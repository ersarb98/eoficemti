<?php
$host	= "localhost";  //prod
$user	= "root";
$pass	= "eoff1ce";
$db 	= "p2b";

mysql_connect($host,$user,$pass);
mysql_select_db($db); //tbl_absensi_karyawan
 

 // Create connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
	// echo "Connected successfully";
}

// $sql_jadwal 		= "SELECT * FROM jadwal WHERE NAMA = 'Pengajuan'";
// $rs 				= $conn->query($sql_jadwal);
// $r 					= $rs->fetch_assoc();
// $pengajuan_awal 	= $r['AWAL'];
// $pengajuan_akhir 	= $r['AKHIR'];
// print_r($pengajuan_awal);
// $sql = "SELECT ID, NIPP FROM user WHERE NIPP LIKE '2%' AND ID NOT IN(SELECT ID_USER FROM evaluasi WHERE BULAN = '".$bulan_period."' AND TAHUN = '".$tahun."') OR ID IN(SELECT ID_USER FROM evaluasi WHERE BULAN = '".$bulan_period."' AND TAHUN = '".$tahun."' AND STATUS = 'SAVED')";
// 	$result = $conn->query($sql);
// 	$arr_nipp = array();
// 	while($row = $result->fetch_assoc()){
// 		$nipp = $row['NIPP'];
// 		    array_push($arr_nipp, $nipp);
// 	}
// 	$arr = array('nipp' => $arr_nipp);

// 				$in_param = json_encode($arr);

 ?>