
//	$.getJSON("js/cp.json",showData);
//	function showData(data){
//		let dataObj = data;
//		var arr = dataObj.ListContents;
//		var htmlStr = "<ul>";
//		for(let i=0;i<arr.length;i++){
//			htmlStr+="<li><p>类型:"+arr[i].type+"</p>";
//			let groupInfos = arr[i].GroupInfo;
//			for(let j=0;j<groupInfos.length;j++){
//				htmlStr+="<dl><dt><img src='"+groupInfos[j].imgURL+"'/></dt><dd>"+groupInfos[j].EnglishName+"</dd><dd>"+groupInfos[j].CName+"</dd><dd>"+groupInfos[j].capacity+"</dd><dd>"+groupInfos[j].price+"</dd><dd><a href='shop-info.html'>立即购买</a></dd></dl>";
//			}
//			htmlStr+="</li>";
//		}
//		htmlStr += "</ul>";
//		$("#list-shops").append(htmlStr);
//	}
$(function(){
	$.get("getGoodsList.php",
//		{"goodstype":$('#direction p').html()},
		function(data){
			//console.log(data);
			let dataObj = eval(data);
			//console.log(dataObj);
			
			for(let i=0;i<dataObj.length;i++){
				var htmlStr = "<dl>";
				htmlStr+="<dt><img src='"+dataObj[i].goodsDesc+"'/></dt><dd>"+dataObj[i].goodsName+"</dd><dd>"+dataObj[i].goodstype+"</dd><dd>"+dataObj[i].goodsPrice+"</dd><dd><a href='shop-info.html'>立即购买</a></dd>";
				htmlStr += "</dl>";
				console.log(htmlStr);
				$("#list-shops").append(htmlStr);
			}
			
		});

});