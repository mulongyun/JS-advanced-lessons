//闭包，函数（addNum）内部定义的函数（return 匿名函数）
//与其相关作用域中的变量（start）形成的实体
//start 会一直保存在内容中，不会被释放

// function addNum(start){
// 	return function(step){
// 		start+=step;
// 		return start;
// 	}
// }
// var fn3=addNum(10);
// console.log(fn3(1));
// console.log(fn3(1));
// console.log(fn3(1));


/*
闭包所带来的改变，影响
原来定义在函数内部的变量是没办法访问的，现在可以访问了
闭包中关联作用域中的特定变量不会被释放，始终保存在内存当中
*/
/*
function foo(){
	var i=0;
	function bar(){
		console.log(++i);
	}
	return bar;
}
var fn1=foo();
var fn2=foo();
fn1();//1
fn1();//2
fn2();//1
fn2();//2
*/


var  tmp=10;
function foo(x){
	return function(y){
		console.log(y,++x);
	}
}
var fee=foo(10);
fee(1);
fee(1);