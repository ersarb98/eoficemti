<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

include 'soap/fCallSoap.php';
include 'soap/nusoap.php';
date_default_timezone_set('Asia/Jakarta');

$conn = oci_connect('ABSENSI', 'absensi', '10.88.44.65:1521/ABSPROD');// Hadirkoe

if ($conn) {
$sql = "SELECT A.NIPP 
FROM PI2_ATTENDANCE A LEFT JOIN TM_PERSON B ON A.NIPP = B.NIPP
WHERE B.NIPP ='285128735' AND TRUNC(A.SHIFT_DATE) = TRUNC(SYSDATE)";
 // A.CHECK_IN IS NULL AND B.HADIRKOE = '1' AND TRUNC(A.SHIFT_DATE) = TRUNC(SYSDATE)
$stid = oci_parse($conn, $sql);		      	
if (oci_execute($stid)) {	
	$arr_nipp = array();
	while ($row_result = oci_fetch_array($stid, OCI_ASSOC)) {
		// echo $row_result['NIPP'];
		
		$nipp = $row_result['NIPP'];
		array_push($arr_nipp, $nipp);
	
	}

	$pushNotifikasi = array('usernameEDI' => 'EDI-USERNAME', 'passwordEDI' => 'RURJLVBBU1NXT1JE', 'nipp' => $arr_nipp, 'data' => array('res' => 'HomePage'), 'content' => array( 'en' => "Anda belum melakukan pencatatan absen datang. Silahkan melakukan pencatatan absen datang segera melalui Aplikasi I-MOVE."), 'heading' => array( 'en' => "Sudah Absen Datang Belum?"));
	$pushNotifikasi = json_encode($pushNotifikasi);
	callsoap($pushNotifikasi); 
	print_r($pushNotifikasi);
} else {
	print_r('error 1');
}
	// $result = $conn->query($sql);
	
} else {
	print_r('error 2');
}


	


?>