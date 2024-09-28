class KeyCodeMe {
    dir1 = -1;
    constructor(up,dwn,stpR) {
        var myThisObj = this;
        var bodyMe=document.getElementById("b1");
        var keydownCounter = 0;
        var keypressCounter = 0;
        $( document ).ready(function(){

            $('#b1').keydown(function(e){
                if (e.keyCode == up)
                    myThisObj.dir1 = 2;
                else if (e.keyCode == dwn)
                    myThisObj.dir1 = 1;
                else if (e.keyCode == stpR)
                    myThisObj.dir1 = 0;
               
                //else{
                //    myThisObj.dir1 = -1;}
                //$('#keydownCounter').html(++keydownCounter);
            });
	 
            $('#b1').keypress(function(e){
               
                // $('#keypressCounter').html(++keypressCounter);
            });

        });
        //bodyMe.onkeydown = function (e) {

        //    if (e.keyCode == up)
        //        myThisObj.dir1 = 2;
        //    else if (e.keyCode == dwn)
        //        myThisObj.dir1 = 1;
        //    else if (e.keyCode == stpR)
        //        myThisObj.dir1 = 0;
        //}
    }
}