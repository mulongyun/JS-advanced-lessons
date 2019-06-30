/*arr.copyWithin(target,start,end)
复制的目标位置，复制的起始位置，复制的结束位置(不包括结束位置)*/
var arr1=[1,2,3,4,5,6];
console.log(arr1.copyWithin(0,4,5));//[5, 2, 3, 4, 5, 6]

/*遍历数组中元素，验证是否能满足回调函数的验证条件（回调函数的返回值）
返回满足条件的第一个数组元素*/
let arr2=[10,15,20,30,40];
let e1=arr2.find(function(element){
	return element>19;
});
console.log(e1);//20

/*同上，但返回值是索引值*/
let elIndex=arr2.findIndex(function(element){
	return element>29;
});
console.log(elIndex);//3


/*fill(value,start,end)用一个固定值填充数组从起始到终止索引内的全部元素。
不包括终止索引
keys()获取键的值
values()获取数组具体值*/
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]