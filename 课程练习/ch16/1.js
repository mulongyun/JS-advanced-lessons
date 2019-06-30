//非严格模式下，this指向window对象；严格模式下，this是undefined
//this 是谁，取决于函数调用的主体
		// var x=10;
		// console.log(window.x);//10
		// function thisTest(){
		// 	console.log(this);//Window
		// 	console.log(this===window);//true
		// }
		// window.thisTest();//缺省window全局对象

		// function thisTest1(){
		// 	'use strict';
		// 	console.log(this);//undefined
		// 	return this===undefined?true:false;
		// }
		// thisTest1();

//直接定义在对象下的方法，调用主体就是当前对象
//前提是没有函数嵌套
		// var point={
		// 	x:0,
		// 	y:0,
		// 	moveTo:function(x,y){
		// 		this.x=x;
		// 		this.y=y;
		// 	}
		// }
		// point.moveTo(10,10);//this指向point对象

//构造函数中的this指代通过new新创建的对象
		function Point(x,y){
			this.x=x;
			this.y=y;
			this.moveTo=function(x,y){
				this.x=x;
				this.y=y;
				console.log(this.x,this.y);//15 15
			}
		}
		var p=new Point(10,10);
		p.moveTo(15,15);//this指向函数调用的主体p

//方法.call(要切换的调用对象,参数1,参数2)  
//切换方法A的调用主体，this指向函数的调用主体
//前面是一个方法才能调用call和apply
		// var objA={name:'AA',x:1};
		// var objB={name:'BB',x:2};
		// function test(){
		// 	console.log(this.name);
		// 	console.log(this.x);
		// }
		// objA.fun=test;
		// objA.fun();// AA 1
		// objA.fun.call(objB);//BB 2
		
		//call()可以传递参数
		var objA={name:'AA',x:1};
		var objB={name:'BB',x:2};
		function test(m){
			console.log(this.name);
			this.x=m;
			console.log(this.x);
		}
		objA.fun=test;
		objA.fun();//AA undefined
		objA.fun.call(objB,3);//BB 3
//方法.apply(要切换的调用对象,[参数1,参数2]),参数变成一个数组