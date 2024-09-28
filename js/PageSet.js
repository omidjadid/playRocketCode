class PageSet
{ 
    _WPage; 
    _HPage;
    can;
    constructor(){
        this.can = document.getElementById('MyCanvas');
        this._WPage = this.can.clientWidth;
        this._HPage = this.can.clientHeight;
        this.can.setAttribute("width", this.can.clientWidth);
        this.can.setAttribute("height", this.can.clientHeight);
    }
}            
            
        
