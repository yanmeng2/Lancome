$(function(){
	$.getJSON("js/cp.json",showData);
	function showData(data){
		let dataObj = data;
		var arr = dataObj.ListContents;
		var htmlStr = "<dl>";
		
			
			let groupInfos = arr[0].GroupInfo;
			
				htmlStr+="<dt><img src='"+groupInfos[0].imgURL1+"'/></dt><dd>"+groupInfos[0].EnglishName+"</dd><dd>"+groupInfos[0].CName+"</dd><dd>沾水涂抹后泡沫均匀细腻，有效清洁，肌肤<br/>娇嫩，光洁如新。 每日早晚，取适量洁面<br/>乳沾水揉出泡沫后于面膜按摩，清洁后以<br/>温水洗净，为后续护肤打好基础。</dd><dd>"+groupInfos[0].capacity+"</dd><dd>"+groupInfos[0].price+"</dd>";
			
			
		
		htmlStr += "</dl>";
		$("#shop-info section").append(htmlStr);
	}
	
	var _shopinfo = document.getElementById("shop-info");
	console.log(_shopinfo);
	var minus = _shopinfo.getElementsByClassName("minus")[0];
	console.log(minus);
	var num = _shopinfo.getElementsByClassName("num")[0];
	console.log(num);
	var plus = _shopinfo.getElementsByClassName("plus")[0];
	console.log(plus);
	
	plus.onclick = function(){
		var n = parseInt(num.value);
		console.log(n);
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


});
	


