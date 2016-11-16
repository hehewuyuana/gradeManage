<?php

	$user=$_GET["user"];
	$pass=$_GET["pass"];

	$sql="select * from stuinfo";
	mysql_connect("localhost","root","root");
	mysql_select_db("student");
	$data=mysql_query($sql);

	while(@$row=mysql_fetch_row($data)){
		if($user==$row[0]&&$pass==$row[2]){
			echo 1;
			break;
		}
		else{
			continue;
		}
	}



?>