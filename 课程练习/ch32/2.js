/*继承的实现方式*/
let obj1={'x':1};
let obj2=Object.create(obj1);
console.log(obj2.x)

let obj3={'y':2};
obj4.__proto__=obj3;

function fn1(){

}



function Child(x,y){
	this.x=x;
	this.y=y;
}
function Parent(x,y,z){
	Child.call(this,x,y);
	this.z=z;
}
let p1=new Parent(1,2,3);
console.log(p1);


/*子类继承父类extends
在子类的构造函数里面super 指向父类的构造函数
继承的子类构造函数中，必须得在super方法调用之后才能使用this

super在子类的原型方法中，指向父类的prototype
*/
class Parent{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
	parentShow(){
		console.log('hello');
	}
class Child extends Parent{
	constructor(x,y,z){
		super(x,y);
		this.z=z;
	}
	show(){
		super.parentShow();
		console.log(super);
		console.log(this);
	}
}
let c1=new Child(1,2,3);
console.log(c1);
