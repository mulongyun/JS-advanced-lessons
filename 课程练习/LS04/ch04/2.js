	//想对JavaScript所有代码使用严格代码就在当前页面最前面写"use strict"
	//想对JavaScript函数内部代码使用严格代码就在函数块最前面写"use strict"
	"use strict"
	function fn1(){
		"use strict"
	}

	/*
	function fn1(){
		username="zhangsan"
	}
	fn1();
	console.log(username);//如果变量没有用var声明，会自动提升为全局变量
	*/

	/*
	//严格模式下全局变量需显式声明
	function fn1(){
		"use strict"
		username="zhangsan"
	}
	fn1();
	console.log(username);//报错
	*/

	function fn2(){
		//普通函数的内部this指向window对象
		//严格模式下，this指向undefined
		console.log(this);
	}
	fn2();

	function fn(){
		var result=(this===undefined?true:false);
		return result;
	}
	console.log(fn());//false

	function fn(){
		"use strict"
		var result=(this===undefined?true:false);
		return result;
	}
	console.log(fn());//true

	/*
	var str="abcdef";
	str.length=1;//赋给临时对象
	console.log(str.length);//6

	"use strict"
	var str="abcdef";
	str.length=1;
	console.log(str.length);//报错
	*/