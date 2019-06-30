var obj={x:1};
Object.defineProperty(obj,"y",{enumerable:false});
console.log(obj);//{x: 1, y: undefined}
for(var i in obj){
	console.log(i,obj[i]);//x 1
}




var person={"name":"jack"};
//Object.defineProperty(对象，属性，{属性描述图});
Object.defineProperty(person,"name",{
	writable:false,//name属性不可修改
	configurable:false,//是否可配置，定义属性能否删除
	enumerable:true,//是否可枚举，定义属性能否被遍历到
	value:"mike"//定义属性值
});
person.name="lily";
delete person.name;//无法删除
console.log(person.name);//mike





var obj={x:1};
//直接添加属性，默认属性特性configurable  writable  enumerable 均为true
obj.z=3;

//通过defineProperty方法添加，除手动修改之外，默认其他属性特性均为false