/*ES6里面对象的结构进行了简化
属性可以写成变量的形式
函数省略function，函数名(){}*/
let username='lily';

let obj={
	username,
	fn1(){
		console.log(this.username);
	}
}


let bar='foo';
let obj1={
	[bar]:'male'
}
console.log(obj1);//{foo: "male"}



let obj2={username:'zhangsan'};
let obj3={age:20};
console.log(Object.assign(obj2,obj3));//{username: "zhangsan", age: 20}