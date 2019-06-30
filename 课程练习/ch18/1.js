//稀疏数组
var arr1=[,2,,4];
console.log(arr1.length);//4
Array.prototype.min=function(){
	return "最小值";
}
console.log(arr1.length);//4
for(var i in arr1){//用来遍历对象，不适合遍历数组（会遍历出来方法）
	console.log(i,arr1[i]);//1 2
						   //3 4
						   //min ƒ (){
								//return "最小值";
}
//---------------------------------------------------------------
//多维数组
var table=new Array(5);
for(var i=0;i<table.length;i++){
	table[i]=new Array(5);
}

for(var row=0;row<table.length;row++){
	for(varco1=0;col<table.length;col++){
		table[row][col]=row*col;
	}
}
var product=table[2][4];