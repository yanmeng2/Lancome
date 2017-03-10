var register = document.getElementById("register-page");
var btn = register.getElementsByClassName("btn")[0];

//验证码
var _inp=register.getElementsByClassName("inp")[0];
var _href=register.getElementsByClassName("href")[0];
var code = register.getElementsByClassName("code")[0];
var msg3 = register.getElementsByClassName("msg3")[0];
window.onload=function(){
	var arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var oLen=arr.length;
	var res="";
	for(i=0;i<4;i++){
		res+=arr[parseInt(Math.random()*oLen)];
	}
	_inp.value=res;
}
_href.onclick=function(){
	var arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var oLen=arr.length;
	var res="";
	for(i=0;i<4;i++){
		res+=arr[parseInt(Math.random()*oLen)];
	}
	_inp.value=res;
}
code.onblur = function(){
	if(code.value!=_inp.value){msg3.innerHTML = "验证码不正确";}
}

//用户
var msg0 = register.getElementsByClassName("msg0")[0];
var _name = register.getElementsByClassName("name")[0];
_name.onblur = function(){
	ajax("js/user.json",function(res){
		var oname = JSON.parse(res);
		var flag = 0;
		for(i=0;i<oname.length;i++){
			if(_name.value==oname[i].name){
			flag = 1;
			}
		}
		if(flag){msg0.innerHTML = "账户已注册";}
//		else{msg0.innerHTML = "账户名不可用";}
	});
}

//密码
var pwd = register.getElementsByClassName("pwd")[0];
var cpwd = register.getElementsByClassName("cpwd")[0];
var msg1 = register.getElementsByClassName("msg1")[0];
var msg2 = register.getElementsByClassName("msg2")[0];
pwd.onblur = function(){
	var reg = /^[0-9a-zA-Z][0-9a-zA-Z_]{6,12}$/;
	var _pwd = pwd.value;
	if(reg.test(_pwd)){
		msg1.innerHTML = "密码可用";}
	else{
		msg1.innerHTML = "密码格式不正确";}
}
cpwd.onblur = function(){
	var _cpwd = cpwd.value;
		if(_cpwd!=""){
			if(pwd.value==_cpwd){
				msg2.innerHTML = "密码正确";
			}else{
				msg2.innerHTML = "两次密码不一致";
			}
		}
		
}
console.log($.getJSON("js/user.json"));
//btn.onclick = function(){
//	var j = $.getJSON("js/user.json",function(data){data=JSON.parse(user.json)});
//	console.log(j);
//	console.log(_name.value);
//	console.log(pwd.value);
//	var j1 = JSON.stringify(j);
//	console.log(j1);
//	var n = {"name":_name.value,"pwd":pwd.value};
//	var m = JSON.stringify(n);
//	console.log(m);
//	j1.push(m);
//	console.log(j1);
//	$.get.JSON("ls/user.json",{"name":_name.value,"pwd":pwd.value},function(){
//		
//	});
//}
//var userjson = [
//		{"name":"a","pwd":"123"},
//		{"name":"b","pwd":"123"},
//		{"name":"c","pwd":"123"},
//		{"name":"d","pwd":"123"},
//		{"name":"e","pwd":"123"}
//		];
//btn.onclick = function(){
//	var add = {"name":_name.value,"pwd":pwd.value};
//	userjson.push(add);
//	console.log(userjson);
}

//test = {}; //空json对像
//test['firstname'] = "tank"; //添加二个元素
//test['lastname'] = "zhang";console.log(test); //查看
//delete test['lastname']; //删除json中的某个元素
//console.log(test);

