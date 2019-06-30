/*之前var声明变量的方式，只有一个全局变量i,所有的延迟执行都在共用一个i
let生命的方式，每次都会形成自己的一个独立作用域*/
for(let i=0;i<3;i++){
	setTimeout(function(){
		console.log(new Date(),i);
	},i*1000)
}