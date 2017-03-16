<?php
	
	header("content-type","text/html;charset=utf-8");

	$userName = $_POST['name'];
	$userPwd = $_POST['pwd'];
	
	//建立连接
	$conn = mysql_connect("localhost:3306","root","123456");

	//2、选择数据库
	mysql_select_db("lancome",$conn);
	
	//3、执行语句（插入数据）
	$sqlStr = "select * from userinfo where pwd='".$userPwd."' and name='".$userName."'";
	$result = mysql_query($sqlStr,$conn);
 	$rows = mysql_num_rows($result);
 	
	mysql_query($sqlStr,$conn);
	
	//4、关闭数据库
	mysql_close($conn);
	
	echo($rows);
?>