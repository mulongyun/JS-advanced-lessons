/*
1.判断是静态方法还是原型方法
2.确定这个方法是用来做什么的
（1）是否会对原变量产生影响
（2）最终的作用效果是什么样的
3. 判断方法的参数分别是什么
（1）如果是回调函数的形式，还需要判断回调函数的参数是什么
（2）如果是值类型参数，判断参数所代表的意义
4.确定方法调用的返回值
*/

var arr1=[4,1,2,3];
//倒序输出
console.log(arr1.reverse());// [3, 2, 1, 4]
//排序  arr.sort([compareFunction])
/*
如果没有指明 compareFunction ，那么元素会按照转换为的字符串的诸个字符的Unicode位点进行排序。
如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：

如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。*/
function compareNumbers(a,b){
	return a-b;
}
arr1.sort(compareNumbers);
console.log(arr1);// [1, 2, 3, 4]

//concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。