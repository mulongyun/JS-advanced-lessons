/******同步代码1  同步代码2  时间到***/
// setTimeout(function(){
// 	console.log('时间到');
// },3000);
// console.log('同步代码1');
// console.log('同步代码2');


/**********promise 将异步的代码写成同步的方式进行执行************/
/*
new Promise(function(resolve,reject){
	异步操作
	resolve();//异步操作成功时的调用
	reject();//异步操作失败时的调用
}).then(function(){
	其实就是resolve的函数的定义
},function(){
	其实是reject函数的定义
})
*/
new Promise(function (resolve,reject){
	setTimeout(function(){
		console.log('时间到');
		resolve('hello');//异步操作成功时的回调函数
	},3000);
}).then(function(val){//异步操作完成之后才会执行then里面的操作
	console.log(val);
},fuction(){

}).catch(function(){
	//捕获异常的
}).finally(function(){
	console.log('不论如何都会执行');
})