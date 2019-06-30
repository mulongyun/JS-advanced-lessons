// var obj1={z:1};
// var obj2=Object.create(obj1);
// console.log(obj2.__proto__);//obj1
// console.log(obj2.__proto__.__proto__);//Object.prototype
// console.log(obj2.__proto__.__proto__.__proto__);//null
// console.log(obj1.__proto__==Object.prototype);//true



// var obj1={
// 	z:1,
// 	sayhi:function(){
// 		console.log(this.z);
// 	}
// };
// var obj2=Object.create(obj1);
// obj2.z;
// obj2.sayhi();//1

/*

//基于构造函数实现的原型继承
function Person(username,age){
	this.username=username;
	this.age=age;
}
Person.prototype.sayHi=function(){
	console.log(this.username);
}
var person1=new Person("zhangsan",20);
var person2=new Person("lisi",20);
console.log(person1.__proto__==Person.prototype);//true
console.log(person2.__proto__==Person.prototype);//true
console.log(person1.__proto__==person2.__proto__);//true
//在person找不到去它原型链上person.__proto__找
person1.sayHi();//zhangsan
person2.sayHi();//lisi
//公有的方法放到prototype里面，让所有对象公用它，节省内存空间，属性还是在原来里面写
//person1和person2公有sayHi方法，节省内存空间
*/


function Person(username,age){
	this.username=username;
	this.age=age;
}
Person.prototype.sayHi=function(){
	console.log(this.username);
}
var person=new Person("zhangsan",20);
//看懂原型链图解
console.log(person.__proto__==Person.prototype);//true
console.log(Person.prototype.constructor==Person);//true
console.log(Person.prototype.__proto__==Object.prototype);//true
console.log(person.__proto__.__proto__==Object.prototype);//true
console.log(Object.prototype.constructor==Object);//true
console.log(Object.prototype.__proto__==null);//true

console.log(Person.prototype.constructor);//Person构造函数







/*
//把this方法放到构造函数里面怎样？区别是什么？
function Person(username,age){
	this.username=username;
	this.age=age;
	this.sayHi=function(){
		console.log(this.username);
	}
}
var person1=new Person("zhangsan",20);
var person2=new Person("lisi",20);
console.log(person1.__proto__==Person.prototype);//true
console.log(person2.__proto__==Person.prototype);//true
console.log(person1.__proto__==person2.__proto__);//true
person1.sayHi();//zhangsan
person2.sayHi();//lisi
*/





