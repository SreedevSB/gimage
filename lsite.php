<?php

$c=mysqli_connect("localhost","root","","test");

if(isset($_GET['update'])){

    $id=$_GET['update'];
    $q=mysqli_query($c,"UPDATE visits SET visited=1 WHERE id=$id");

}else if(isset($_GET['push'])){
    $name=$_GET['push'];
    $q=mysqli_query($c,"INSERT INTO visits(name,visited) VALUES('$name','0')");

}else{
    header('Content-Type: application/json');
    $q=mysqli_query($c,"SELECT * FROM visits ORDER BY id DESC");

    $rows=array();
    while($row=mysqli_fetch_assoc($q)){
        $rows['visits'][]=$row;
    }
    echo json_encode($rows);
}