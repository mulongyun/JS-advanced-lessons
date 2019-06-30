function BaseClass(){}
BaseClass.fn1=function(){
	console.log("静态方法");
}
BaseClass.fn1();

BaseClass.prototype.fn2=function(){
	console.log("原型方法");
}
var base=new BaseClass();
console.log(base.__proto__==BaseClass.prototype);
// base.fn1();   //报错，静态方法没办法被实例化对象调用，实例化对象只能调用原型对象上的方法
base.fn2();



function Person(username,age){
	this.username=username;
	this.age=age;
}
console.log(Person.prototype.constructor==Person);//true
var person=new Person('zhangsan',20);
console.log(person.constructor==Person);//true


var obj=new Object();
console.log(obj.constructor==Object);//true