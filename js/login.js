var login = document.getElementById("login-page");
var btn = login.getElementsByClassName("btn")[0];

//用户
var msg0 = login.getElementsByClassName("msg0")[0];
var _name = login.getElementsByClassName("name")[0];
_name.onblur = function(){
	$("#login-page .btn").attr("disabled",false);
	if(_name.value!=" "){
		$.post("register.php",
		{
			"name":$("#login-page .name").val()
		},
		function(data){
			if(data.indexOf("1")>-1){
				$("#login-page .msg0").html("用户名正确");
			}else{
				$("#login-page .msg0").html("用户名不存在");
				$("#login-page .btn").attr("disabled",true);
				$("#login-page .msg0").css("color","red");
				$("#login-page .pwd").attr("disabled",true);
			}
		});
	}else{msg0.innerHTML("输入用户名");}
	
	
}

//密码
var pwd = login.getElementsByClassName("pwd")[0];
var msg1 = login.getElementsByClassName("msg1")[0];
pwd.onblur = function(){
	$.post("pwd.php",
			{
				"name":$("#login-page .name").val(),
				"pwd":$("#login-page .pwd").val()
			},
			function(data){
				if(data.indexOf("1")>-1){
				$("#login-page .msg1").html("密码正确");
			}else{
				$("#login-page .msg1").html("密码错误");	
			}
				
			}
		);
	
//	var reg = /^[0-9a-zA-Z][0-9a-zA-Z_]{6,12}$/;
//	var _pwd = pwd.value;
//	if(reg.test(_pwd)){
//		msg1.innerHTML = "密码可用";}
//	else{
//		msg1.innerHTML = "密码格式不正确";}
	
}


$("#login-page .btn").click(function(){
	//$.post("checkUser.php",
	//	{
	//		"name":$("#login-page .name").val(),
	//		"pwd":$("#login-page .pwd").val()
	//	},
	//	function(data){
			alert("登录成功！");		
	//	}
	//);
});