function Person(username,age){
	this.username= username;
	this.age =age;
}
var p=new Person("zhangsan",28);
console.log(p.__proto__==Person.prototype);//true





var o={
	_x:1,
	get x(){
		return this._x;
	},
	set x(val){
		this._x=val;
	}
}
o.x=10;
console.log(o.x,o._x);//10,10



//对象.属性
var obj={
	"x":1,
	"y":2
}
var z="age";
obj.z=20;
console.log(obj);//x: 1, y: 2, z: 20 取得变量作为对象属性


//obj[z]=20
var obj={
	"x":1,
	"y":2
}
var z="age";
obj[z]=20;
console.log(obj);//x: 1, y: 2, age: 20  取的是变量的值作为对象的属性






//使用Object的create静态方法创建对象  以object为原型新创建对象
var obj={
	"username":"zhangsan",
	"age":20
}
var obj1=Object.create(obj);
console.log(obj1);//{}
console.log(obj);//{username: "zhangsan", age: 20}





function Person(username,age){
	this.username=username;
	this.age=age;
	this.sayHi=function(){
		console.log(this.username);//zhangsan lisi
	}
}
var person1=new Person("zhangsan",20);
var person2=new Person("lisi",18);
person1.sayHi();
person2.sayHi();

/*
//把sayHi方法提取出来
function Person(username,age){
	this.username=username;
	this.age=age;
}
Person.prototype.sayHi=function(){
	console.log(this.username);//zhangsan lisi
}
var person1=new Person("zhangsan",20);
var person2=new Person("lisi",18);
console.log(person1.__proto__==Person.prototype);//true
person1.sayHi();
person2.sayHi();
*/




