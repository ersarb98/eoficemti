<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

include 'soap/fCallSoap.php';
include 'soap/nusoap.php';
date_default_timezone_set('Asia/Jakarta');


if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    exit(0);
}





//$conn = oci_connect('E_OFFICE', 'eoff1ce', '10.10.32.169:1521/officedb'); // db EOFFICE DEV
$conn = oci_connect('E_OFFICE', 'W0rldCl4ssP0rt', '10.10.32.174:1521/officedb'); // db EOFFICE PROD

$userEDI = "EDI-USERNAME";
$passEDI = "RURJLVBBU1NXT1JE";

$param = json_decode (file_get_contents("php://input"));

header('Content-Type: application/json');

if ($conn) {
	$usernameEDI    = $param->usernameEDI;
    $passwordEDI    = $param->passwordEDI;  

    if ($usernameEDI == $userEDI && $passwordEDI == $passEDI) {
    	//http_response_code(200);
    	
    	try {
        	//parse input parameter        
        	$nipp 			= $param->nipp;  
        	$nama 			= $param->nama;  
        	$tgl 			= $param->tgl;  
        	$check_type		= $param->check_type;  
        	$sql1 = "SELECT NIPP FROM TR_USER 
						WHERE ID_JABATAN IN (
						SELECT B.ID_ATASAN FROM TR_USER A 
						JOIN TR_JABATAN B ON A.ID_JABATAN = B.ID_JABATAN
						WHERE NIPP = '$nipp'
						)";
			
			$parse_sql1 = oci_parse($conn, $sql1);


			if (oci_execute($parse_sql1)) {
				$arr_nipp = array();
				$result_sql1 = oci_fetch_array($parse_sql1, OCI_ASSOC);				
				$nipp_atasan = $result_sql1['NIPP'];	
				array_push($arr_nipp, $nipp_atasan);	
				$title = '';
				$content = '';
				if ($check_type == 'checkin') {
					$title = "$tgl - $nama Check In Kehadiran";
					$content = "$tgl - $nama telah check in, Anda bisa memberikan arahan/tugas tambahan.";
				} else if ($check_type == 'checkout') {
					$title = "$tgl - $nama Check Out Kehadiran";
					$content = "$tgl - $nama telah check out, Anda bisa memberikan penilaian kinerja.";
				} else {

				}

				$pushNotifikasi = array('usernameEDI' => 'EDI-USERNAME', 'passwordEDI' => 'RURJLVBBU1NXT1JE', 'nipp' => $arr_nipp, 'data' => array('res' => 'HomePage'), 'content' => array( 'en' => $content), 'heading' => array( 'en' => $title));
				$pushNotifikasi = json_encode($pushNotifikasi);
				
				$result = callsoap($pushNotifikasi); 
				oci_commit($conn);
				oci_close($conn);
				echo $result;

			} else {
				$err = "ERROR";
				$response_message = str_replace(array("\t","\n"), ' ', $err);
				$arr = array(	
					'rcmsg' => $response_message, 
					'data' => ''
				);
				echo json_encode($arr, JSON_HEX_TAG);
			}

    	} catch (Exception $e) {
    		$err = $e->getMessage();
    		$response_message = str_replace(array("\t","\n"), ' ', $err);
			$arr = array(	
				'rcmsg' => $response_message, 
				'data' => ''
			);
			echo json_encode($arr, JSON_HEX_TAG);
		}
    } else {
        $err = "USER EDI TIDAK VALID";
        $response_message = str_replace(array("\t","\n"), ' ', $err);
		$arr = array(	
			'rcmsg' => $response_message, 
			'data' => ''
		);
		echo json_encode($arr, JSON_HEX_TAG);
    }     
} else {
	// print_r('error');
	$err = "GAGAL CONNECT DB";
	$response_message = str_replace(array("\t","\n"), ' ', $err);
	$arr = array(	
		'rcmsg' => $response_message, 
		'data' => ''
	);
	echo json_encode($arr, JSON_HEX_TAG);
}

oci_commit($conn);
oci_close($conn);




Err:
    //rollbackOriDb($conn['ori']);

// if($err=="") $err = "ERR";
//echo generateResponse($out_data, $err, "json");



/*------------------------------------------SUCCESS-----------------------------------------------------------*/
Success:
    //rollbackOriDb($conn['ori']);
// oci_commit($conn);
// oci_close($conn);
// if($out_message=="") $out_message = "SUCCESS";
// //echo generateResponse($out_data, $out_message, "json");
// $response_message = str_replace(array("\t","\n"), ' ', $out_message);
// $arr = array(	
// 	'rcmsg' => $response_message, 
// 	'data' => $out_data
// );
// echo json_encode($arr, JSON_HEX_TAG);

	


?>