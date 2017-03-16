$(function(){
	var _goodsName = getCookie("goodsName")
	console.log(_goodsName);
	
	$.post(
		"getShoppingCart.php",
		{"goodsName":"_goodsName"},
		function(data){
			console.log(data);
		}
	);	
})