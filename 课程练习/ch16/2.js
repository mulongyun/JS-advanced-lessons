/******对象内部的函数，存在嵌套关系，内部函数的this指向window对象*****/
	// var point={
	// 	x:0,
	// 	y:0,
	// 	moveTo:function(x,y){
	// 		function moveToX(x){
	// 			console.log(this);//window
	// 			this.x=x;
	// 		}
	// 		function moveToY(y){
	// 			console.log(this);//window
	// 			this.y=y;
	// 		}
	// 		moveToX(x);
	// 		moveToY(y);
	// 	}
	// }
	// point.moveTo(10,10);
	// console.log(point);//{x: 0, y: 0, moveTo: ƒ} this指向的不是point,是window
/******仍然让this指向point的解决方法：this转存为that局部变量----软绑定********/
	// var point={
	// 	x:0,
	// 	y:0,
	// 	moveTo:function(x,y){
	// 		var that=this;//此时的this指向point
	// 		function moveToX(x){
	// 			console.log(that);//{x: 0, y: 0, moveTo: ƒ}
	// 			that.x=x;
	// 		}
	// 		function moveToY(y){
	// 			console.log(that);//{x: 10, y: 0, moveTo: ƒ}
	// 			that.y=y;
	// 		}
	// 		moveToX(x);
	// 		moveToY(y);
	// 	}
	// }
	// point.moveTo(10,10);
	// console.log(point);//{x: 10, y: 10, moveTo: ƒ}
/************通过 call和apply切换调用主体,并且立即执行**************/
	// var point={
	// 	x:0,
	// 	y:0,
	// 	moveTo:function(x,y){
	// 		function moveToX(x){
	// 			this.x=x;
	// 		}
	// 		function moveToY(y){
	// 			this.y=y;
	// 		}
	// 		moveToX.call(point,x);//等价moveToX.call(this,x);
	// 		moveToY.call(point,y);//等价moveToX.call(this,y);
	// 	}
	// }
	// point.moveTo(10,10);
	// console.log(point);//{x: 10, y: 10, moveTo: ƒ}


	var point={
		x:0,
		y:0,
		moveTo:function(x,y){
			function moveToX(x){
				this.x=x;
			}
			function moveToY(y){
				this.y=y;
			}
			console.log(moveToX.bind(this));
			//ƒ moveToX(x){
				//this.x=x;
			//}
			//函数.bind(对象)切换函数的调用主体，生成了一个新的函数，并且不会立即执行
			//想立即执行加一个()
			moveToX.bind(this,x)();
			moveToY.bind(this,y)();
			//moveToX.__proto__==Function.prototype
		}
	}
	point.moveTo(10,10);
	console.log(point);//{x: 10, y: 10, moveTo: ƒ}