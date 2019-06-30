function fn(){
	var arr1=[];
	for(var i=0;i<10;i++){
		arr1[i]=function(){
			return i;
		}
	}
	return arr1;
}
fn();


//形成自己的作用域，避免变量污染
function fn(){
	var arr1=[];
	for(var i=0;i<10;i++){
		(function (j){
			arr1[j]=function(){
			return j;
			}
		})(i)	
	}
	return arr1;
}
fn();