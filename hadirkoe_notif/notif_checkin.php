<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

include 'soap/fCallSoap.php';
include 'soap/nusoap.php';
date_default_timezone_set('Asia/Jakarta');
if(date("w") == '6' || date("w") == '0') die("LIBUR");

$conn = oci_connect('E_OFFICE', 'e-Offic3_2021', '192.168.5.67:1521/OFFICEDB'); //absensi dev

if ($conn) {
$sql = "SELECT A.NIPP
FROM ABSEN_TEMP A LEFT JOIN TR_USER B ON A.NIPP = B.NIPP
WHERE A.JAM_MASUK IS NULL AND B.HADIRKOE = '1' AND TRUNC(A.TGL_CREATE) = TRUNC(SYSDATE)";
$stid = oci_parse($conn, $sql);		      	
if (oci_execute($stid)) {	
	$arr_nipp = array();
	while ($row_result = oci_fetch_array($stid, OCI_ASSOC)) {
		// echo $row_result['NIPP'];
		
		$nipp = $row_result['NIPP'];
		array_push($arr_nipp, $nipp);
	
	}

	$pushNotifikasi = array('usernameEDI' => 'EDI-USERNAME', 'passwordEDI' => 'RURJLVBBU1NXT1JE', 'nipp' => $arr_nipp, 'data' => array('res' => 'HomePage3'), 'content' => array( 'en' => "Anda belum melakukan Check in kehadiran. Silakan Check in pada aplikasi E-Office IPCTPK Mobile/Mesin Absensi."), 'heading' => array( 'en' => "Check In Kehadiran"));
	$pushNotifikasi = json_encode($pushNotifikasi);
	callsoap($pushNotifikasi); 
	print_r($pushNotifikasi);
} else {
	print_r('error');
}
	// $result = $conn->query($sql);
	
} else {
	print_r('error');
}


	


?>