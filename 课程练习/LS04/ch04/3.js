/*
	var index=1；
	switch(index){
		case 1:
			console.log("星期一");
			break;
		case 2：
			console.log("星期二");
	}

	var index=1；
	switch(index){
		case "1":
			console.log("星期一");//报错，类型不等
			break;
		case 2：
			console.log("星期二");
	}
	*/
	
//注意有无break
	var index=1;
	switch(index){
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			console.log("工作日");
			break;
		case 6:
		case 7:
			console.log("工作日");
			break;
		default:
			console.log("均不符合");
			break;
	}

	var obj1={"username":"zhangsan","age":20};
	obj1.__proto__.sex="male";
	for(var i in obj1){
		console.log(i,obj1[i]);
	}//username zhangsan
	//age 20
	//sex male

	var arr=[2,,33];
	for(var i in arr){
		console.log(i,arr[i]);//第二个位置为空，会省略
	}//0 2 
	//2 33