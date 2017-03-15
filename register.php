<?php
	$userName = $_POST['name'];

	$conn = mysql_connect("localhost:3306","root","123456");

	mysql_select_db("lancome",$conn);

	$sqlStr = "select * from userinfo where name='".$userName."'";
	$result = mysql_query($sqlStr,$conn);
 	
 	$rows = mysql_num_rows($result);
 	
	mysql_query($sqlStr,$conn);

	mysql_close($conn);
	
	echo($rows);
?>