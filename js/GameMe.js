class GameMe {
    k=0;
    j=0;
    timer;//var audio = new Audio('beep1.mp3');            
    sound;
    interval=10;
    _WPage; 
    _HPage;
    speedToop=6;
    speedRaket=4;
    ntoop=1;
    audioRaket;
    chart1;
    constructor() {
        this.audioRaket = new Audio('../file/S(11).mp3');
        //this.sound = document.getElementById("s");
        var pg=new PageSet();
        this._WPage=pg._WPage;
        this._HPage=pg._HPage;
        this.chart();
        //var options;
        //this.chart1 = new Highcharts.Chart(options);
        //options.series[0].data = [[.7]];
        //options.series[0].data = [[.3]];
       
    }
    ChangeChart = function()
    {       
        var objGameMe=this;
        var timer = setInterval(function ()
        {                   
            objGameMe.chart1.series[0].setData([[objGameMe.k]]);
            objGameMe.chart1.series[1].setData([[objGameMe.j]]);
            //clearInterval(timer);
        }, 20*1000);
    }
    chart= function(){

        
       this.chart1= Highcharts.chart('container', {
            chart: {
                type: 'bar',
                height: 160,
                animation: false
            },
            //title: {
            //    text: 'Stacked bar chart'
            //},
            xAxis: {
                categories: ['Touching the wall']
            },
            //yAxis: {
            //    min: 0,
            //    title: {
            //        text: 'Total fruit consumption'
            //    }
            //},
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'Right',
                data: [.5]
            }, {
                name: 'Left',
                data: [.5]
            }]
        });

    }
        SetKeyStopPlay = function (stpKeyPlay){               
            var objGameMe=this;
            $( document ).ready(function(){
                $('#b1').keydown(function(e){
                    if (e.keyCode == stpKeyPlay){
                    
                        // objGameMe.chart1.series[1].data=[[.2]];
                        //objGameMe.chart();
                        clearInterval(objGameMe.timer);       
                        //var objGameMe=this;       
                        objGameMe.chart1.series[0].setData([[objGameMe.k]]);
                        objGameMe.chart1.series[1].setData([[objGameMe.j]]);
                        //alert("پایان بازی");
                        //objGameMe.chart1.series.data=[.8 .2];
                   
                   
                    }
                    // $('#keypressCounter').html(++keypressCounter);
                });
            });
        }

    InitPlay = function (ntoop,speedToop,speedRaket,interval,stpKeyPlay) {        
        this.interval=interval; 
        this.ntoop=ntoop;
        this.speedToop=speedToop;
        this.speedRaket=speedRaket;
        this.SetKeyStopPlay(stpKeyPlay);
    }
    separ = function(toop, rec1,rec2) {   
        
        for (var i = 0; i < toop.length; i++) {
            //console.log(toop);
            if(toop[i] !=null){
                if ((toop[i].y >= rec1.y) && (toop[i].y <= (rec1.y + rec1.h))) {
                    if (((toop[i].x + toop[i].radius) >= rec1.x) &&(toop[i].cmdX ==1 ) ) {
                        toop[i].cmdX = 2;//toop.splice(i,1);//a.cmdY= 2;     
                        this.audioRaket.play();
                        rec1.ChangeColor();
                        break;                       
                    }
                }
                else if ((toop[i].x + toop[i].radius) > this._WPage) {                    
                    //this.sound.play();//toop[i]=null;                    
                    this.k = this.k + 1;
                    console.log(this.k);
                    break;
                }
            }
            if(toop[i] !=null){
                if((toop[i].y >= rec2.y) && (toop[i].y <= (rec2.y + rec2.h))){
                    if(((toop[i].x - toop[i].radius) <= rec2.x+rec2.w)&&(toop[i].cmdX ==2 )){
                        toop[i].cmdX = 1;                        
                        this.audioRaket.volume = 2;
                        this.audioRaket.play();
                        rec2.ChangeColor();
                        break;
                    }
                }
                else if ((toop[i].x - toop[i].radius) <= 0) {
                    this.j = this.j + 1;  
                    //this.sound.play();//toop[i]=null;
                    break;
                }         
            }
            document.title = this.j+"-----"+this.k;            
            //this.ChangeChart();
            //this.ChangeChart();            
        }      
        
    }
    StartPlay = function () {
        
        var can = document.getElementById('MyCanvas');
        var _WPage = can.clientWidth;
        var _HPage = can.clientHeight;
        can.setAttribute("width", can.clientWidth);
        can.setAttribute("height", can.clientHeight);
        var ctx = document.getElementById('MyCanvas').getContext("2d");
        //var obj1= new KeyCodeMe(38,40,37);
        //var obj2= new KeyCodeMe(65,90,88);
        var rec2  = new Raket("black",50,65,90,88,this.speedRaket);
        var rec1  = new Raket("red",(_WPage - 75),38,40,37,this.speedRaket);
        var addtoop=[];
        var addraket=[];            
        for (var i = 0; i < this.ntoop; i++) {
            var x=Math.floor(0 + Math.random() * (_WPage - 0));
            var y=Math.floor(0 + Math.random() * (_HPage - 0));
            var col='#'+Math.floor(Math.random()*16777215).toString(16);
            addtoop.push(new Toop(x, y, 20, col,this.speedToop));
        }
        var countMe;
        
        var timer = setInterval(() => {
            ctx.clearRect(0, 0, _WPage, _HPage);
            countMe=0;
            for (var i = 0; i < this.ntoop; i++) {
                if( addtoop[i] != null)
                {
                    addtoop[i].MyDraw(ctx);
                    addtoop[i].MyStepMove();
                    countMe++;
                }                    
            }
            rec1.MyDrawR(ctx);
            rec2.MyDrawR(ctx);
            rec1.MyStepMoveR();
            rec2.MyStepMoveR();
            
            if(rec1.cmdY!=-1 || rec2.cmdY!=-1){
                this.separ( addtoop , rec1 ,rec2); 
                //var objGameMe=this;       
                //objGameMe.chart1.series[0].setData([[objGameMe.k]]);
                //objGameMe.chart1.series[1].setData([[objGameMe.j]]);
                
                
            }
            if(countMe==0){
                clearInterval(timer);                
            }

        }, this.interval);  
        this.timer=timer;
    }
}