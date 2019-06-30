/*
forEach(callback,thisArg)
callback(element,index,arr)
element遍历数组每次取到的数组元素值
index遍历数组每次取到的元素数组的索引
arr操作的数组
thisArg可以指明回调函数内部this的指向
*/
var arr1=['a','b','c'];
arr1.forEach(function(element,index,arr2){
	console.log(element,index,arr2);
	//a 0 (3) ["a", "b", "c"]
	//b 1 (3) ["a", "b", "c"]
	//c 2 (3) ["a", "b", "c"]
	window.x=10;
},window)

//every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
var arr3=[10,20,30,40];
var result=arr3.every(function(value){
	return value>5;
});
console.log(result);//true

//map()方法创建一个新数组，其结果是在调用数组中的每个元素上调用提供的函数。
var arr4=[1,2,3];
var arr5=arr4.map(function(element){
	return element*2;
});
console.log(arr5);//[2, 4, 6]
