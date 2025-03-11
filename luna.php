<?php
// Database credentials
$host = "localhost"; // Replace with your host
$username = "root"; // Replace with your database username
$password = ""; // Replace with your database password
$database = "luna"; // Replace with your database name

// Create connection
$conn =mysqli_connect($host, $username, $password);
mysqli_select_db($conn,$database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
else{
echo "Connected successfully!";}
$sql="SELECT * FROM users";
$rs=mysqli_query($conn,$sql);
$data=array();
if(mysqli_num_rows($rs)>0){
    while($row=mysqli_fetch_assoc($rs)){
        $data[]=$row;
    }   
}
header('Content-Type:application/json');
echo json_encode($data, JSON_PRETTY_PRINT);
mysqli_close($conn);
?>