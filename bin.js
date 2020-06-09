class Bin{
  constructor() {
    this.bin1 = Bodies.rectangle(800,540,10,100,{isStatic:true});
    this.bin2 = Bodies.rectangle(700,540,10,100,{isStatic:true});
    this.bin3 = Bodies.rectangle(750,585,100,10,{isStatic:true});

    World.add(world,this.bin1);
    World.add(world,this.bin2);
    World.add(world,this.bin3);
  }
  display(){
 rectMode(CENTER);
 noStroke();
 fill("red");
 rect(this.bin1.position.x,this.bin1.position.y,10,100);
 rect(this.bin2.position.x,this.bin2.position.y,10,100);
 rect(this.bin3.position.x,this.bin3.position.y,100,10);



  }

}