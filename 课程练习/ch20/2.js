// ^匹配开始的位置
var reg1=/^a[0-9]/gi;
var str1='a1b2c3';
console.log(str1.match(reg1));//["a1"]

var reg2=/[0-9]z$/gi;
var str2='abcd9z';
var str2_2='bcfbdfdfd9';
console.log(str2.match(reg2));//["9z"]
console.log(str2_2.match(reg2));//null
//match是定义在正则表达式上的，test是定义在字符串上的
console.log(reg2.test(str2));//true
