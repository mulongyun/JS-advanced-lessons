//定义一个车(car)的对象，height，width,weight
//创建一个小轿车(smallCar)的对象，继承上面车的属性，自身具有颜色color，座位seatNum
//实现方式：①create方法，②以及构造函数的形式（把属性加到prototype属性上）



//①create方法
var car={
	height:150,
	width:200,
	weight:2000
};
var smallCar=Object.create(car);
smallCar.color='red';
smallCar.seatNum=1;
console.log(smallCar.height);//150

//②构造函数形式
function createSmallCar(color,seatNum){
	this.color=color;
	this.seatNum=seatNum;
}
// createSmallCar.prototype.height=150;
// createSmallCar.prototype.width=200;
// createSmallCar.prototype.weight=2000;
createSmallCar.prototype=car;

var smallCar=new createSmallCar('red',1);
