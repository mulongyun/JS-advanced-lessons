/*********生成器*****************/
function* helloGenerator(){
	yield 'hello';//生成器的一个状态
	yield 'world';
	return 'ending';
}
var iterator=helloGenerator();//生成器的返回值是一个遍历器
console.log(iterator.next());//{value: "hello", done: false}
console.log(iterator.next());//{value: "world", done: false}
console.log(iterator.next());//{value: "ending", done: true}
console.log(iterator.next());//{value: undefined, done: true}


let obj={};
obj[Symbol.iterator]=function*(){
	yield 1;
	yield 2;
	yield 3;
}
for(let i of obj){
	console.log(i);// 1 2 3 
}

let str='abcdefg';
for(let i of str){
	console.log(i);//a b c d e f g
}