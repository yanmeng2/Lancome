var login = document.getElementById("login-page");
var btn = login.getElementsByClassName("btn")[0];

//用户
var msg0 = login.getElementsByClassName("msg0")[0];
var _name = login.getElementsByClassName("name")[0];
_name.onblur = function(){
	ajax("js/user.json",function(res){
		var oname = JSON.parse(res);
		var flag = 0;
		for(i=0;i<oname.length;i++){
			if(_name.value==oname[i].name){
			flag = 1;
			}
		}
		if(flag){msg0.innerHTML = "账户可使用";}
		else{msg0.innerHTML = "账户名不可用";}
	});
}

//密码
var pwd = login.getElementsByClassName("pwd")[0];
var msg1 = login.getElementsByClassName("msg1")[0];
pwd.onblur = function(){
	var reg = /^[0-9a-zA-Z][0-9a-zA-Z_]{6,12}$/;
	var _pwd = pwd.value;
	if(reg.test(_pwd)){
		msg1.innerHTML = "密码可用";}
	else{
		msg1.innerHTML = "密码格式不正确";}
}
