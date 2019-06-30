function Person(name){
	this.name=name;
}
Person.prototype.age=22;
Person.prototype.showName=function(){
	console.log(this.name);
};
function Student(id){
	this.id=id;
}
/*
person name属性Mike， person.__proto__.age
person.__proto__.showName
*/
var person=new Person('mike');
Student.prototype=person;
var s1=new Student(2017001);
var s2=new Student(2017002);
console.log(s1.id,s2.id);//2017001   2017002
console.log(s1.age,s2.age);//22 22
/*
s1自身上没有age, s1.__proto__==Student.prototype
Student.prototype==person;person上没有age属性
s1.__proto__.__proto__==person.__proto__
person.__proto__==Person.prototype;
*/
console.log(s1.name,s2.name);


