function fn1(x,y=2,z=3){
	return x+y+z;
}
console.log(fn1(1));//6
console.log(fn1(1,3));//7
console.log(fn1(1,3,4));//8

/*带默认值的参数变量是默认声明的，所以函数体内不能再用let或const重复声明
- 参数一般有顺序，有默认值的参数应该是尾参数，这样可以使有默认值的用默认值
  没有默认值的用传递的值*/


/*添加了剩余操作符的参数，会得到一个数组
接受剩余的实参，写在其他参数的后面*/
 function fn2(x,...rest){
  	console.log(x);//1
  	console.log(rest);//[2,3,4,5]
 }
 fn2(1,2,3,4,5);

/*spread 扩展操作符
rest的逆过程，将一个集合打散作为单个元素*/
 function fn3(x){
 	console.log(x);//1
 	console.log(arguments);//[1, 2, 3]
 }
 fn3(1,...[2,3]);
 //fn3(1,2,3);

