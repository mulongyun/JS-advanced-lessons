console.log("小明回家");
var xx=["书桌","书包","铅笔盒"];//小明家中
console.log("在家-做作业中");
function goToStore(){
	var yy=["文具店老板","出售的文具"];//文具店中
	console.log("在文具店-买文具中");
	console.log("在文具店-买文具中  发现没带钱");
	goToBank();
	console.log("在文具店-买好文具 返回家");
}
function goToBank(){
	var zz=["银行职员","柜员机"];//银行中
	console.log("在银行-取钱 返回文具店");
}
console.log("在家-做作业中 发现笔没有了");
goToStore();//笔没有了，去商店买笔
console.log("在家-继续做作业");