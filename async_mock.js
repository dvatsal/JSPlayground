function add(number){

	setTimeout(function(){
		return number+1;
	},1000);
}
function add2(number){

	setTimeout(function(){
		console.log(number+2);
	},1000);
}
add(2);
add2(4);