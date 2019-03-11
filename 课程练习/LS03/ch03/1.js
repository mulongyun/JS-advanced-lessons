//基本数据类型，在操作过程中，会有自动装箱过程
//生成临时对象，临时对象在使用完成之后会自动释放
	var num=10;
	console.log(num.toString());//10
	var numObject=new Number(num);
	console.log(numObject.toString());//10

	var num1=11.26;
	var num2=new Number(num1);
	console.log(num2);//11.26

	num.p=10;
	var t=num.p;
	console.log(t);//undifined


