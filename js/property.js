$(function(){
	for(let i=1;i<$("list-items").li.lemgth;i++){
		$("list-items").li.click(function(){
			$(this).css({background:"white",border:"none"});
		});
	}
});
