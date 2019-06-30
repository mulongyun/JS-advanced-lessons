/*正则表达式文本:
   \d 数字0-9
   . 任意的一个字符
   \s 空格
   \w [A-Z a-z 0-9]

   [xyz]集合中任意取一个
   (abc)是一个组合，abc都要有

   ^a 以特定字符起始
   b$ 以特定字符结束

   量词：a* 字符出现0次 多次
   a+ 字符出现1次 多次
   a? 字符出现0次 1次
*/
var reg1=/(abc)\d/gi;
var str1='abc1efg2';
console.log(reg1.exec(str1));//Array(2)  0: "abc1"  1: "abc"

var reg2=/(ab\d)\d/gi;
var str2='ab31efg2';
console.log(reg2.exec(str2));//["ab31", "ab3"]
//分组可以看做当前正则表达式的子规则，分组匹配得到的内容，可以在exec方法调用的返回结果中查看
var reg3=/(ab\d)(\def)\d/gi;
var str3='ab31ef12';
console.log(reg3.exec(str3));//["ab31ef1", "ab3", "1ef"]



/*反向引用 通过\加数字引用前面出现的分组
数字表示前面出现的第几个分组  /(\d)a\1/gi等效于 /(\d)a(\d)/gi  
适用于当前面结构比较复杂时*/
var reg4=/(ss)a\1/gi;//
var str4='ssassji';
console.log(str4.replace(reg4,'x'));//xji 


/*str.replace(正则表达式,'替换成的内容')  */
/*str.match(正则表达式)  返回值是一个数组或null 
 [整个正则匹配到的内容，分组匹配到的内容，开始匹配位置的索引]  */
 /* str.search(正则表达式) 在str中检索符合正则表达式规则的内容，
 若检索到了，返回其第一个字符出现的位置，若没有返回-1  */



 /*reg.test(字符串) 验证字符串是否符合正则表达式规则
 符合返回true，不符合返回false
 */
/*reg.exec(字符串)*/

//验证压缩文件格式
var reg=/(.*)\.(rar|zip|7zip|tgz)$/;
/*
(.+) 压缩文件的名字
\. 对.进行转义，表示普通字符.
(rar|zip|7zip|tgz) 用或隔开，从里面任意取一个
$ 表示以前面的分组来结尾
*/

var reg1=/^#[a-fA-f0-9]{6}$/;
/*
^# 表示以#开头
[a-fA-f0-9]表示集合，从其中任取一个字符 a-f A-F 0-9
{6}表示之前的字符出现6次
$ 必须以前面的字符结尾
*/