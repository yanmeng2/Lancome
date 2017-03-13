<?php
	
	header("content-type","text/html;charset=utf-8");
	
	$userName = $_POST['name'];
	$userPass = $_POST['pwd'];
	
	//echo($userName.$userPass);

	//建立连接
	$conn = mysql_connect("localhost:3306","root","123456");
	if($conn){
		echo("连接成功");
	}else{
		echo("连接失败");
	}
	
	//2、选择数据库
	mysql_select_db("lancome",$conn);
	
	//3、执行语句（插入数据）
	$sqlStr = "insert into userinfo(name,pwd)values('".$userName."','".$userPass."')";
	$nameStr = "select * from userinfo";
	mysql_query($sqlStr,$conn);
	mysql_query($nameStr,$conn);
	
	//4、关闭数据库
	mysql_close($conn);

?>