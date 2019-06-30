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
console.log(Student.prototype);
var p1=Object.create(Person.prototype);
Student.prototype=p1;
console.log(Student.prototype);

Student.prototype.constructor=Student;
var s1=new Student('xxx',22,2017001);
var s2=new Student('www',23,2017002);
