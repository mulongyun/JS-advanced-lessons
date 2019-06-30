let arr1=[1,3,4,5,6];
for(let i of arr1){
	console.log(arr1[i]);
}


let m1=new Map([1,3,4,5,6]);
for(let i of m1){
	console.log(m1[i]);
}
/*函数的arguments*/

/*判断数据结构能否被遍历器所遍历
不能直接对对象应用遍历器*/
let arr2=[1,2,3];
let person={'name':'zhangsan','age':20};
console.log(arr2[Symbol.iterator]);