
	if(true){
		var a=1;//没有块作用域的概念，提升到全局
	}
	a=2;
	console.log(a);//2


	if(true){
		var b=1;//没有块作用域的概念，提升到全局
	}
	//b=2;
	console.log(b);//1
	
	
	if(false){
		var c=1;//没有块作用域的概念，提升到全局
	}
	c=2;
	console.log(c);//2
	
	
	if(false){
		var d=1;//没有块作用域的概念，提升到全局
	}
	//d=2;
	console.log(d);//undefined


	for(i=0;i<3;i++){

	}
	console.log(i);//3
	