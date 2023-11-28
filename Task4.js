class Circle{
    constructor(radius, color){
        this.radius=radius;
        this.color=color;
    }
    Circle(radius){
        this.radius=radius;
        return `This is Single parameter circle method Radius : ${this.radius}`;
    }
    Circle(radius, color){
        this.radius=radius;
        this.color=color;
        return `This is two parameter circle method Radius : ${this.radius} and Color ${this.color}`;
    }
    getRadius(){
        return `GetRadius method Radius is : ${this.radius}`;
    }
    setRadius(radius){
        this.radius=radius;
    }
    getColor(){
        return `The color of the circle is ${this.color}`;
    }
    setColor(color){
        this.color=color;
    }
    toString(){
        return `The Radius of the Circle is ${this.color} and Radius is ${this.radius}`;
    }
    getArea(){
        return `The Area of the circle is ${3.14159265*(this.radius*this.radius)}`;
    }
    getCircumference(){
        return `The Circumference of the Circle is ${2*(3.14159265*this.radius)}`;
    }
}
var circle=new Circle();
console.log(circle.Circle(1.0));
console.log(circle.Circle(1.0,'red'));
console.log(circle.getRadius())
circle.setRadius(1.0);
console.log(circle.getColor());
circle.setColor('green');
console.log(circle.toString());
console.log(circle.getArea());
console.log(circle.getCircumference());
