try{
	function abc(x,cb){
		console.log(x);
		cb();
	}
	abc('xx',function(){
		var arr=new Array(-1);
	});
}catch(e){
	console.log(e);
}