<?php
	header("Content-Type:text/html;charset=utf-8");
	
	//$goodsId = $_REQUEST["001"];	
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","123456");
	
	//2）、选择数据库（找目的地）
	mysql_select_db("shoppingcenter",$conn);
	
	//3）、传输数据（过桥）
	$sqlstr = "select * from goodsInfo where goodsId='001'";
	$result = mysql_query($sqlstr,$conn);//执行查询的sql语句后，有返回值，返回的是查询结果
			
	//查询列数
	 $query_cols = mysql_num_fields($result);
	 //echo "列数：".$query_cols;
	//查询行数
    $query_num =mysql_num_rows($result);
    //echo "行数：".$query_num;
	
	$str="";
	
	$query_row = mysql_fetch_array($result);//游标下移,拿出结果集中的某一行，返回值是拿到的行；
	if($query_row){
		$str = $str."{ 'goodsId':'".$query_row[0]."','goodsName':'".$query_row[1]."'
		,'goodsPrice':'".$query_row[2]."','goodsDesc':'".$query_row[3]."','goodstype':'".$query_row[4]."'
		}";
			
	}
	//4、关闭数据库
	mysql_close($conn);
	
	//3、给客户端返回商品的json数组！
	echo $str;
?>
