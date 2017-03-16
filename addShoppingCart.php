<?php
	header("content-type","text/html;charset=utf-8");

	//$vipName = $_REQUEST['vipName'];
	$goodsName = $_POST['goodsName'];
	$goodsCount = $_POST['goodsCount'];
	
	$conn = mysql_connect("localhost:3306","root","123456");
	
	mysql_select_db("shoppingcenter",$conn);
	
	$sqlstr = "insert into shoppingCart(goodsName,goodsCount) values('".$goodsName."','".$goodsCount."')";
	//echo($sqlstr);
	
	$result=true;
	if(!mysql_query($sqlstr,$conn)){
		$result=false;
	}
	
	//4）、关闭连接（拆桥）
	mysql_close($conn);
	
	//3、给客户端返回（响应）一个注册成功！
	echo $result;
?>