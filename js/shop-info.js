$(function(){
//	$.getJSON("js/cp.json",showData);
//	function showData(data){
//		let dataObj = data;
//		var arr = dataObj.ListContents;
//		var htmlStr = "<dl>";
//		
//			let groupInfos = arr[0].GroupInfo;
//			
//				htmlStr+="<dt><img src='"+groupInfos[0].imgURL1+"'/></dt><dd>"+groupInfos[0].EnglishName+"</dd><dd>"+groupInfos[0].CName+"</dd><dd>沾水涂抹后泡沫均匀细腻，有效清洁，肌肤<br/>娇嫩，光洁如新。 每日早晚，取适量洁面<br/>乳沾水揉出泡沫后于面膜按摩，清洁后以<br/>温水洗净，为后续护肤打好基础。</dd><dd>"+groupInfos[0].capacity+"</dd><dd>"+groupInfos[0].price+"</dd>";
//		
//		htmlStr += "</dl>";
//		$("#shop-info section").append(htmlStr);
//	}

	$.get("getGoodsInfo.php",
//		{"goodsName":$('#direction p').html()},
		function(data){
			//console.log(data);
			//console.log(typeof data);
			//console.log(data.length);
			//console.log(data[77]+data[78]+data[79]+data[80]+data[81]+data[82]+data[83]+data[84]+data[85]+data[86]+data[87]+data[88]+data[89]+data[90]+data[91]+data[92]+data[93]+data[94]);
			//console.log(data[31]+data[32]+data[33]+data[34]+data[35]+data[36]+data[37]+data[38]);
			//console.log(data[59]+data[60]+data[61]);
			
			var htmlStr = "<dl>";
			//for(let i=0;i<data.length;i++){
				
				htmlStr+="<dt><img src='"+data[77]+data[78]+data[79]+data[80]+data[81]+data[82]+data[83]+data[84]+data[85]+data[86]+data[87]+data[88]+data[89]+data[90]+data[91]+data[92]+data[93]+data[94]+"'/></dt><dd>"+data[31]+data[32]+data[33]+data[34]+data[35]+data[36]+data[37]+data[38]+"</dd><dd>沾水涂抹后泡沫均匀细腻，有效清洁，肌肤<br/>娇嫩，光洁如新。 每日早晚，取适量洁面<br/>乳沾水揉出泡沫后于面膜按摩，清洁后以<br/>温水洗净，为后续护肤打好基础。</dd><dd>"+data[59]+data[60]+data[61]+"</dd>";
				
			//}
			htmlStr += "</dl>";
			$("#shop-info section").append(htmlStr);
		});

	
	
	var _shopinfo = document.getElementById("shop-info");
//	console.log(_shopinfo);
	var minus = _shopinfo.getElementsByClassName("minus")[0];
//	console.log(minus);
	var num = _shopinfo.getElementsByClassName("num")[0];
//	console.log(num);
	var plus = _shopinfo.getElementsByClassName("plus")[0];
//	console.log(plus);
	
	plus.onclick = function(){
		var n = parseInt(num.value);
		//console.log(n);
		if(n<199&&n>0){
			num.value = n+1;
			minus.disabled = false;
			minus.style.cursor = "pointer";
			if(num.value==199){
				plus.disabled = true;
				plus.style.cursor = "not-allowed";
			}
		}else{
			plus.disabled = true;
			plus.style.cursor = "not-allowed";
		}
	}
	
	minus.onclick = function(){
		var n = parseInt(num.value);
		if(n>1&&n<200){
			num.value = n-1;
			plus.disabled = false;
			plus.style.cursor = "pointer";
			if(num.value==1){
				minus.disabled = true;
				minus.style.cursor = "not-allowed";
			}
		}else{
			minus.disabled = true;
			minus.style.cursor = "not-allowed";
		}		
	}
	
	//键盘松开数字的处理
	num.onkeyup = function(){
		setTimeout(function(){
			var n = num.value;
			n1 = n.replace(/\D/g,"")?n.replace(/\D/g,""):1;
			num.value = n1<200?n1:199;
			if(num.value==1){
				minus.disabled = true;
				minus.style.cursor = "not-allowed";
			}else{
				minus.disabled = false;
				minus.style.cursor = "pointer";
			}
			if(num.value==199){
				plus.disabled = true;
				plus.style.cursor = "not-allowed";
			}else{
				plus.disabled = false;
				plus.style.cursor = "pointer";
			}
		},500)	
	}
	
	var btn = _shopinfo.getElementsByClassName("btn")[0];
	//console.log(btn);
	
	btn.onclick = function(){
		console.log();
		saveCookie("goodsName","兰蔻净透洁面泡沫",4);
		saveCookie("goodsCount",num.value,4);
		
		$.post(
			"addShoppingCart.php",
			{
				"goodsName":"兰蔻净透洁面泡沫",
				"goodsCount":num.value
			},
			function(data){
				console.log(data);
				if(data.indexOf("1")>-1){
					alert("添加成功");
				}else{
					alert("添加失败");	
				}
			}
			
		)
	}
	
	
});	
	


//$("#shop-info section div a input").click(function(){
//	saveCookie("vipName",name.value,4);
//	saveCookie("goodsName",$("#shop-info section dl dd")eq(1).val(),4);
//	saveCookie("goodsCount",$("#shop-info section .num").val(),4);
//	
//	$.post("addShoppingCart.php",
//			{
//				//"name":$("#login-page .name").val(),
//				//"pwd":$("#login-page .pwd").val()
//				"goodsName":$("#shop-info section dl dd")eq(1).val(),
//				"goodsCount":$("#shop-info section .num").val()
//			},
//			function(data){
//				if(data.indexOf("1")>-1){
//				alert("添加成功");
//			}else{
//				alert("添加失败");	
//			}
//				
//			}
//		);
//});
