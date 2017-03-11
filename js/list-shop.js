$(function(){
	$.getJSON("js/cp.json",showData);
	function showData(data){
		let dataObj = data;
		var arr = dataObj.ListContents;
		var htmlStr = "<ul>";
		for(let i=0;i<arr.length;i++){
			htmlStr+="<li><p>类型:"+arr[i].type+"</p>";
			let groupInfos = arr[i].GroupInfo;
			for(let j=0;j<groupInfos.length;j++){
				htmlStr+="<dl><dt><img src='"+groupInfos[j].imgURL+"'/></dt><dd>"+groupInfos[j].EnglishName+"</dd><dd>"+groupInfos[j].CName+"</dd><dd>"+groupInfos[j].capacity+"</dd><dd>"+groupInfos[j].price+"</dd><dd><a href='###'>立即购买</a></dd></dl>";
			}
			htmlStr+="</li>";
		}
		htmlStr += "</ul>";
		$("#list-shops").append(htmlStr);
	}
});