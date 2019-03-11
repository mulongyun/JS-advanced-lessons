//两等号和三等号区别
	var num3=10;
	var num4=10;
	console.log(num3==num4);//true  判断值是否相等
	console.log(num3===num4);//true  判断值和类型是否相等

	var b1 = {};
	var b2 = {};
	console.log(b1==b2);// false  指向的地址不一样，对象指向空间不一样
	console.log(b1===b2);//false
	console.log(b1===b1);//true

	//数字类型
	console.log(1===1.0);//true
	console.log(Number("xyz"));//NaN
	console.log(3/0);//Infinity

	var c1 = 23;
	var c2 = new Number(23);
	console.log(c1==c2);//true
	console.log(c1===c2);//false   c1为原始数据类型，c2为包装器数据类型

	//包装对象
	var str2 = "abc";
	console.log(str2.length);//3
	str2.length = 1;
	console.log(str2);//abc 原始类型变量的不可变性，指的是包装对象的改变并不影响原始类型的变量

	//怎么理解JS中都是对象这句话
	//访问基本类型的变量属性时，会创建临时包装对象，访问的是该包装对象的属性
	//另外改变此临时包装对象的属性，并不会影原变量（原始类型变量的不可变性）