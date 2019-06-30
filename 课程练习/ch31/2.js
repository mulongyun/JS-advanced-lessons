let s1=new Set([1,2,3,4,5,6,1,2,3]);//Set(6) {1, 2, 3, 4, 5, …}
console.log(s1);
for(var i of s1){
	console.log(i);//1 2 3 4 5 6
}


let m1=new Map([
	['username',"zhangsan"],
	['age',20],
	['sex','male']
]);
console.log(m1.size);//3
for(let i of m1){
	console.log(i);
	//["username", "zhangsan"]
	//["age", 20]
	//["sex", "male"]
}
console.log(m1.set('weight','60kg'));
//Map(4) {"username" => "zhangsan", "age" => 20, "sex" => "male", "weight" => "60kg"}
console.log(m1.get('username'));//zhangsan
// m1.delete('username');
// m1.has('sex');

console.log(m1.keys());
for(let j of m1.keys()){
	console.log(j);
}