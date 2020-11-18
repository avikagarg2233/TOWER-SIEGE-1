class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //random ="red,pink,yellow,green"
  }
  display(){
    fill("pink");
    super.display();
  }
};
