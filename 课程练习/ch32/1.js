/*使用static(){}来添加静态方法
静态方法通过类进行调用
静态方法内部的this指向类本身*/
class Point{
	constructor(){
		this.x=1;
	}
	static showPoint(){
		console.log(this);//Point()
	}
}
Point.showPoint();