/*
本地时间：当前所处时区的标准时间
世界标准时间：UTC（格林威治时间）GMT（）
*/
var seconds=Date.parse('2019-05-05');
console.log(seconds);
var date1=new Date(seconds);
console.log(date1);

var date2=new Date();
var seconds2=Date.parse(date2);
console.log(seconds2>seconds);//true

/*
getDate()//1-31 获得日
getDay()//0-6  获得星期
getMonth()//0-11
*/