export class Point{
  constructor(index, x){
      this.x = x;
      this.y = 4500;
      this.fixedY = 4500;
      this.speed = 0.04;
      this.cur = index;
      this.max = Math.random() * 100 + 150;
  }

  update(){
      this.cur += this.speed;
      this.y = this.fixedY + (Math.sin(this.cur) * this.max);
  }
}