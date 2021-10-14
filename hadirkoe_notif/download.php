<?php 
	require_once "db_collection.php";

	// if (isset($_SERVER['HTTP_ORIGIN'])) {
	//     header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
	//     header('Access-Control-Allow-Credentials: true');
	//     header('Access-Control-Max-Age: 86400');
	// }
	// if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	//     if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
	//         header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
	//     if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
	//         header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
	//     exit(0);
	// } 

	// $conn['ori'] = oriDb('DEV');
	// if(!checkOriDb($conn['ori']['repo'],$err)) {
	// 	die("Gagal koneksi ke DB");
	// }
	$conn = oci_connect('E_OFFICE', 'W0rldCl4ssP0rt', '10.10.32.174:1521/officedb');
	if (!$conn) {
		die("gagal connect ke DB");
	}

	$id_surat = base64_decode($_GET['id']);
	$no_surat = base64_decode($_GET['no']);
	$id_user = $_GET['id_user'];
	$nox = $_GET['no'];

	if ($nox != 1 && $nox != 'Tk9fU1VSQVQ=') {
    	$sql2="SELECT D_LINK,JENIS FROM TBL_STATUS WHERE NO_SURAT='$no_surat' AND ROWNUM = 1";
  	}else{
    	$sql2="SELECT D_LINK,JENIS FROM TBL_STATUS WHERE ID_SURAT='$id_surat' AND ROWNUM = 1";
  	}	
  	// print_r($sql2);die;
  	$result= oci_parse($conn, $sql2);
  	oci_execute($result);
  	$hasil = oci_fetch_array($result,OCI_ASSOC);

  	//print_r($hasil['JENIS']);die();
  	$jensur = $hasil['JENIS'];
  	// echo $jensur;die();
  	if($hasil == NULL) {
		$sql2="SELECT D_LINK,JENIS FROM TBL_STATUS_SEKRETARIS WHERE ID_SURAT='$id_surat'";
		$result= oci_parse($conn, $sql2);
	  	oci_execute($result);
	  	$hasil = oci_fetch_array($result,OCI_ASSOC);
		$jensur = $hasil['JENIS'];
	}

	if ($jensur == 'surat_manual' || $jensur == 'surat_manual_sppd' || $jensur == 'surat_manual_keluar') {
		// print_r($jensur); die();
	  	$opowae = $hasil['D_LINK'];
	  	$kata = explode('/', $opowae);
	  	$nama = $kata[7];
	  	// print_r($nama);die;
	} else {
	  	$opowae = $hasil['D_LINK'];
	  	$kata = explode('/', $opowae);
	  	$nama = $kata[4];
	}

	 //print_r($nama);die;
	define('ALLOWED_REFERRER', '');
	$sql7="SELECT J.ID_CABANG FROM SURAT S, TR_JABATAN J WHERE ID_SURAT='$id_surat' AND S.ID_JABATAN_PENGIRIM = J.ID_JABATAN";
	
	$result7= oci_parse($conn, $sql7);
	oci_execute($result7);
	$hasil7=oci_fetch_array($result7,OCI_ASSOC);
	

	$cabang = $hasil7['ID_CABANG'];
	//print_r($cabang);die();
	

	if ($cabang == '31' || $cabang == '32' || $cabang == '33' ) {
		define('BASE_DIR','/var/www/html/e-office-itpk/upload');
		//print_r($nama);die;
 	} else {
		//define('BASE_DIR','upload/arsip');
		define('BASE_DIR','/var/www/html/e-office/upload/arsip');
		
 	}

	// log downloads?  true/false
	define('LOG_DOWNLOADS',true);

	// log file name
	define('LOG_FILE','downloads.log');

	$allowed_ext = array (
		// archives
		'zip' => 'application/zip',
		'rar' => 'application/rar',


		// documents
		'pdf' => 'application/pdf',
		'doc' => 'application/msword',
		'docx' => 'application/msword',
		'xls' => 'application/vnd.ms-excel',
		'ppt' => 'application/vnd.ms-powerpoint',

		// executables
		'exe' => 'application/octet-stream',

		// images
		'gif' => 'image/gif',
		'png' => 'image/png',
		'jpg' => 'image/jpeg',
		'jpeg' => 'image/jpeg',

		// audio
		'mp3' => 'audio/mpeg',
		'wav' => 'audio/x-wav',

		// video
		'mpeg' => 'video/mpeg',
		'mpg' => 'video/mpeg',
		'mpe' => 'video/mpeg',
		'mov' => 'video/quicktime',
		'avi' => 'video/x-msvideo'
	);

	if (ALLOWED_REFERRER !== ''
	&& (!isset($_SERVER['HTTP_REFERER']) || strpos(strtoupper($_SERVER['HTTP_REFERER']),strtoupper(ALLOWED_REFERRER)) === false)
	) {
	  die("Internal server error. Please contact system administrator.");
	}

	// Make sure program execution doesn't time out
	// Set maximum script execution time in seconds (0 means no limit)
	set_time_limit(0);

	if (!isset($nama) || empty($nama)) {
	  die("File Tidak Ditemukan, Silahkan Menghubungi Admin");
	}

	// Nullbyte hack fix
	if (strpos($nama, "\0") !== FALSE) die('hallo die');

	// Get real file name.
	// Remove any path info to avoid hacking by adding relative path, etc.
	$fname = basename($nama);
	//print_r($fname);die;
	// Check if the file exists
	// Check in subfolders too

	function find_file ($dirname, $fname, &$file_path) {		

	$dir = opendir($dirname);

	while ($file = readdir($dir)) {
	if (empty($file_path) && $file != '.' && $file != '..') {
	  if (is_dir($dirname.'/'.$file)) {
	    find_file($dirname.'/'.$file, $fname, $file_path);
	  }
	  else {
	    if (file_exists($dirname.'/'.$fname)) {
	      $file_path = $dirname.'/'.$fname;
	      return;
	    }
	  }
	}
	}

	} // find_file

	// get full file path (including subfolders)
	$file_path = '';
	find_file(BASE_DIR, $fname, $file_path);

	if (!is_file($file_path)) {
	  die("File Tidak Ditemukan, Silahkan Menghubungi Admin");
	}

	// file size in bytes
	$fsize = filesize($file_path);

	// file extension
	$fext = strtolower(substr(strrchr($fname,"."),1));

	// check if allowed extension
	if (!array_key_exists($fext, $allowed_ext)) {
	  die("Tipe File Tidak Didukung, Silahkan Menghubungi Admin");
	}

	// get mime type
	if ($allowed_ext[$fext] == '') {
	  $mtype = '';
	  // mime type is not set, get from server settings
	  if (function_exists('mime_content_type')) {
	    $mtype = mime_content_type($file_path);
	  }
	  else if (function_exists('finfo_file')) {
	    $finfo = finfo_open(FILEINFO_MIME); // return mime type
	    $mtype = finfo_file($finfo, $file_path);
	    finfo_close($finfo);
	  }
	  if ($mtype == '') {
	    $mtype = "application/force-download";
	  }
	}
	else {
	  // get mime type defined by admin
	  $mtype = $allowed_ext[$fext];
	}

	// Browser will try to save file with this filename, regardless original filename.
	// You can override it if needed.

	if (!isset($_GET['fc']) || empty($_GET['fc'])) {
	  $asfname = $fname;
	}
	else {
	  // remove some bad chars
	  $asfname = str_replace(array('"',"'",'\\','/'), '', $_GET['fc']);
	  if ($asfname === '') $asfname = 'NoName';
	}

	// print_r($file_path); die;
	// set headers
	// header("Pragma: public");
	// header("Expires: 0");
	// header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
	// header("Cache-Control: public");
	// header("Content-Description: File Transfer");
	// header("Content-Type: $mtype");
	// header("Content-Disposition: attachment; filename=\"$asfname\"");
	// header("Content-Transfer-Encoding: binary");
	// header("Content-Length: " . $fsize);

	// repaired by Andika Kamiswara 18/
	header('Content-Description: File Transfer');
	header('Content-Type: application/octet-stream');
	header("Content-Disposition: attachment; filename=\"$asfname\"");
	header('Expires: 0');
	header('Cache-Control: must-revalidate');
	header('Pragma: public');
	header("Content-Length: " . $fsize);
	flush(); // Flush system output buffer
	readfile($file_path); 


	// die('Trying Get Connection..');
	// download
	// @readfile($file_path);
	$file = @fopen($file_path,"rb"); 

	// if ($file) {
	//   while(!feof($file)) {
	//     print(fread($file, 1024*20));
	//     flush();
	//     if (connection_status()!=0) {
	//       @fclose($file);
	//       die();
	//     }
	//   }
	//   @fclose($file);
	// }

	// log downloads
 ?>