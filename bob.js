class Bob{
    constructor(x,y,radius){
         var options={
             isStatic:true,
             restitution:0.3,
             density:1.2,
             friction:0.5
         }
          this.body=Bodies.circle(x,y,radius,options);
          this.width = radius;
          this.height = radius;
          World.add(world,this.body);
     }
      display(){
          ellipseMode(RADIUS);
          var pos = this.body.position;
          fill("darkblue");
          ellipse(pos.x,pos.y,this.width,this.height);
      }
 }