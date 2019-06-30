/*
var obj={x:0};
Object.defineProterty(obj,"y"{
	value:1,
	enumerable:true,
	writable:false,
	configurable:true
});
*/

//获取特定对象，特定属性的属性描述符
Object.getOwnPropertyDescriptor(obj,"y");
/*
//给多个属性设置特性的方法（Object.defineProperties）
var obj={x:0};
Object.defineProterties(obj,{
	y:{value:1,enumerable:true,writable:false,configurable:true},
	z:{value:2,enumerable:true,writable:false,configurable:true}
});
*/

//o2.Object.create(o1)  以01为原型对象生成一个新对象o2
var o1={};
Object.defineProterties(o1,'x',{
	value:1,writable:true,
});
var o2=Object.create(o1);
console.log(o2.__proto__==o1);
console.log(o2.x);//1
o2.x=2;
console.log(o2.x);//2   查找自身有就不再
delete o2.x;//delete删除属性时只能删除自身属性，原型链上是删不掉的
console.log(o2.x);//1 
//o2.__proto__与o1是完全相同的对象的引用，改其中一个，另一个也变化
o2.__proto__.x=3;//想改原型链上属性可以用__proto__ 
console.log(o2.x);//1 
console.log(o1.x);//1 


