<?php
	header("Content-Type:text/html;charset=utf-8");
	$goodsName = $_REQUEST['goodsName'];

	$conn = mysql_connect("localhost:3306","root","123456");

	mysql_select_db("shoppingcenter",$conn);
	
	$sqlstr = "select g.goodsName,g.goodsPrice,g.goodsDesc,s.goodsCount from goodsInfo g,shoppingCart s 
	where g.goodsName = s.goodsName and g.goodsName = '".$goodsName."'";
	
	$result = mysql_query($sqlstr,$conn);
	
	//查询列数
	$query_cols = mysql_num_fields($result);
	//echo "列数：".$query_cols;
	//查询行数
	$query_num =mysql_num_rows($result);
	//echo "行数：".$query_num;
	
	$str="[";
	
	$query_row = mysql_fetch_array($result);

	while($query_row){
		$str = $str."{
		'goodsName':'".$query_row[0]."','goodsPrice':'".$query_row[1]."',
		'goodsDesc':'".$query_row[2]."','goodsCount':'".$query_row[3]."'
		}";
		$query_row = mysql_fetch_array($result);
		if($query_row){
			$str = $str.",";
		}
	}
	$str = $str."]";

	mysql_close($conn);
	
	echo $str;
?>