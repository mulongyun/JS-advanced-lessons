//数量词：?表示之前的字符出现0次或1次
var reg1=/abc?/gi;
var str1='abc ab kkk';
console.log(str1.replace(reg1,'x'));//x x kkk

//数量词：+表示之前的字符出现1次或多次
var reg2='abc+';
var str2='abc abccc abccccc ab';
console.log(str2.replace(reg2,'x'));//abc abccc abccccc ab

//{}表示
var reg3=/abc{1,3}/gi;
var str3='abc abcc abccc abccccc';
console.log(str3.replace(reg3,'x'));//x x x xcc
