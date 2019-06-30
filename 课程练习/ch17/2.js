function Person(name,age){
	this.name=name;
	this.age=age;
};
Person.prototype.showName=function(){
	console.log(this.name);
};
function Student(name,age,id){
	//Person.call()切换了Person函数内部this的指向
	Person.call(this,name,age);
	this.id=id;
}
Student.prototype.__proto__=Person.prototype;
var s1=new Student('xxx',22,2017001);
var s2=new Student('www',23,2017002);
s1.showName();
console.log(s1);
/*
s1.__proto__==Student.prototype
Student.prototype.__proto__==Person.prototype
s1.__proto__.__proto__==Person.prototype;
*/