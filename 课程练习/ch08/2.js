	var obja=["objname","aaa"];
	var objb=["objname","bbb"];
	obja.foo=function(){
		console.log(this.objname);
	}
	obja.foo();
	//方法.call(对象)
	obja.foo.call(objb);
