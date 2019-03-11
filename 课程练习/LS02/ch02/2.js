//前++和后++之后变量的值
	var a = 10;
	console.log(++a);//11
	console.log(a);//11

	var b = 20;
	console.log(b++);//20
	console.log(b);//21
//栈区，把对象的值存到变量里了
	var num1=20;
	var num2=num1;
	num1=10;
	console.log(num2);//20 
//栈堆区，变量存的是对象的引用
	var object1={usename:"zhangsan"};
	var object2=object1;
	object2.usename="lisi";
	console.log(object1); //{usename: "lisi"}


	var arr1=[1,2,3,4];//数组也是对象
	var arr2=arr1;
	arr2[0]=5;
	console.log(arr1);//[5,2,3,4]