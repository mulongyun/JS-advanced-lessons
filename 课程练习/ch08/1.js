//对象instanceof构造函数
//1.判断这个对象能否使用后面的构造函数实例化得到,能的话结果为true
//2.能否在对象的原型链上找到构造函数的prototype
	function Person(username,age){
		this.username=username;
		this.age=age;
	}
	var person=new Person("zhangsan",20);
	console.log(person instanceof Person);//true
	console.log(person.__proto__==Person.prototype);//true
	console.log(person instanceof Object);//true


	var arr2 = [];
	console.log(arr2 instanceof Array);//true
    var arr2 = new Array();
    console.log(arr2 instanceof Array);//true
    
//arguments 获取函数调用时传入的实参，类数组结构
	function fn1(x){
		for(var i=0;i<arguments.length;i++){
			console.log(arguments[i]);//10 5 3
		}
	}
	//函数名.length表示的是形参的个数
	console.log(fn1.length);//1	
	fn1(10,5,3);

//caller属性定义在函数上边
	function fn2(){
		console.log(fn2.caller);
	}
	function fn3(){
		fn2();
	}
	fn3();//ƒ fn3(){fn2();}