class Raindrop extends baseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.speed=random(10,20);
    }
    fall(){
        this.y =this.y+this.speed;
    }
}