var str='abcdef adf kil ad adfff';
var str1='a2c a3c abc';
var str2='atf btf ktf';

var reg1=/adf/gi;
var reg2=/adf*/gi;//*匹配前面字符出现0次或者多次
var reg3=/a.c/gi;///.匹配任意单个字符
var reg4=/a\dc/gi;// \d匹配任意阿拉伯数字，等价于0-9
var reg4_1=/a\Dc/gi;// \D表示在特定位置上不是一个阿拉伯数字[^0-9]
var reg5=/[^abc]tf/gi;// ^排除中括号字符集合中的字符

console.log(str.match(reg1));//["adf", "adf"]
console.log(str.match(reg2));//["adf", "ad", "adfff"]
console.log(str.match(reg3));//["abc"]
console.log(str1.match(reg4));//["a2c", "a3c"]
console.log(str1.match(reg4_1));//["abc"]
console.log(str2.match(reg5));//["ktf"]