//字符串常用方法，字符串的方法源于String.prototype

//slice(start,end)第一个参数是起始，第二个参数是结束，但不包括结束
	var str="abcd";
	console.log(str.slice(0,3));  //abc
	console.log(str.slice(1,-1)); //bc
	console.log(str.slice(-2)); //cd
	var str="ab-cd-ef";
	console.log(str.slice(0,2));//ab
	console.log(str.slice(0,-1));//ab-cd-e
//substr(start,len)第一个参数是起始，第二个参数是长度
	console.log(str.substr(0,3)); //abc
	console.log(str.substr(0,-1)); //没有
//substring(start,end)第一个参数是起始，第二个参数是结束，可选的，不写的话就是从起始位置到结束
	//起始位置大于结束位置，就互换位置；起始位置小于0，会自动从0开始
	//超过索引位置0——str.lenngth-1的就不算了，自动截断
	console.log(str.substring(0,3)); //abc
	console.log(str.substring(3,0)); //abc
	console.log(str.substring(-1,3)); //abc

//substr 与 substring的区别
	var str13 = "abcdefgh";
	var str14 = str13.substr(2,3);//后一个参数代表长度
	console.log(str13,str14);//abcdefgh cde     str13 未受到破坏

	var str15 = str13.substring(2,3);//后一个参数代表第几个end
	console.log(str13,str15);//abcdefgh c    str13 未受到破坏

//str.split(特定字符,限定元素个数)以特定的字符分割字符串
	var str1="ab*c*d*e";
	console.log(str1.split("*"));//转化为分割后的数组   ["ab", "c", "d", "e"]
	console.log(str1.split("*",2));//限制保留下来数组元素的个数   ["ab", "c"]
	console.log(str1.split(""));//里面什么都没有就是每一个字符成为一个元素["a","b","*","c","*","d","*","e"]

//str.trim()去除两边空格，不能去除字符中间空格
	var str2="   abc def   \r\n  ".trim();
	console.log(str2.trim());//abc def//返回已移除前导空格、尾随空格和行终止符的原始字符串
	
//indexOf(查找字符，查找的起始位置)
	var str3="abcdefabcdef";
	console.log(str3.indexOf("d",1));//3
	console.log(str3.indexOf("d",4));//9 从第4个开始找