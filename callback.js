function add(number,callback){

	setTimeout(function(){
		callback(number+1);
	},1000);
}
// add(1,function(result){
// 	console.log(result);
// })
//we are using callback here to use RESULT of one function for further processing in next call of same function
 add(1,function(result1){
 	console.log("result1->"+result1);
 	add(result1,function(result2){
 		console.log("result2->"+result2);
 		add(result2,function(result3){

 			console.log("result3"+result3);
 		})	
 	})
 })