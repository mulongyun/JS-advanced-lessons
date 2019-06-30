var obj={
	_name:"jack"
}
Object.defineProperty(obj,"name",{
	configurable:true,
	enumable:true,
	get(){
		return this._name;
	},
	set(val){
		this._name=val;
	}
});
obj.name="lily";
console.log(obj.name);//lily