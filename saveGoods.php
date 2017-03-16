<?php
	header("Content-Type:text/html;charset=utf-8");
	//1、接受客户端的数据
	$goodsId   = $_REQUEST['goodsId'];
	$goodsName = $_REQUEST['goodsName'];
	$goodsPrice = $_REQUEST['goodsPrice'];
	$goodsDesc = $_REQUEST['goodsDesc'];
	$goodstype  = $_REQUEST['goodstype'];
	
	//2、数据保存在数据库中
	//1）、建立连接
	$conn = mysql_connect("localhost:3306","root","123456");
	
	//2）、选择数据库
	mysql_select_db("shoppingcenter",$conn);
	
	//3）、传输数据
	$sqlstr = "insert into goodsInfo values('".$goodsId."','".$goodsName."','".$goodsPrice."','".$goodsDesc."','".$goodstype."')";
	//echo($sqlstr);
	
	mysql_query($sqlstr,$conn);
	
	//4）、关闭连接（拆桥）
	mysql_close($conn);
	
	//3、给客户端返回（响应）一个注册成功！
	echo "保存成功";
?>