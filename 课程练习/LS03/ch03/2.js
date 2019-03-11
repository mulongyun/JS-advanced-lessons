//基本数据类型，变量.__proto__属性(两个下划线)=变量的包装器.prototype
	var num1=10;
	console.log(num1.__proto__);//等价
	console.log(Number.prototype);

//toFixed(保留位数)保留小数点后特定位数，有四舍五入的处理过程
	console.log((345.67).toFixed(1));//345.7
	console.log((11.26).toFixed(2));//11.26
	console.log((130).toFixed(2));//130.00
//toPrecision(指定个数)指定有效数个数，到特定位数时会四舍五入
	var num3=22.56;
	console.log(num3.toPrecision(1));// 2e+1
	console.log(num3.toPrecision(2));// 23
	console.log(num3.toPrecision(3));// 22.6
	console.log(num3.toPrecision(4));// 22.56
	console.log(num3.toPrecision(5));// 22.560

//charAt(index)：返回指定索引位置的字符.第一个字符位置为 0, 第二个字符位置为 1,以此类推.
	console.log("abcde".charAt(2));// c
//charCodeAt返回指定对象中位于指定位置处的字符的 ASCII 代码
	var str="abcde";
	console.log(str.charAt(1));// b
	console.log(str.charCodeAt(0));// 97


//字符串拼接
	var st1="hello ";
	var st2="world";
	console.log(st1.concat(st2));//hello world
//字符串链接
	var a = "abc";
	var b = "def";
	console.log(a+b);//abcdef


	//
	console.log("B".localeCompare("a"));//1
	console.log("B".localeCompare("A"));//1