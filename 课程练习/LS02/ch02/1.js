	//观察函数执行过程，步骤
	var username="zhangsan";
	var age=18;
	function setName(){
		username="lisi";
	}
	function setAge(){
		age=20;
	}
	function setInfo(){
		setName();
		setAge();
	}
	setInfo();
