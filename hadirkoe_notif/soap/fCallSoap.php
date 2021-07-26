<?php

function callsoap($in_param) {
	// print_r($in_param);die();
	try {

		$client = new nusoap_client("http://localhost/api_itpk_dev/index.php?wsdl");
		$error = $client->getError();
		if ($error) {
		    echo "<h2>Constructor error</h2><pre>" . $error . "</pre>";
			return;
		}

		$param = json_decode($in_param);
		// $op_name 	= $param->sc_type;
		$modul = 'eoffice_notif_imove_nipp';

		// echo $op_name." ".$in_param;

		$in_data=$in_param;
		// print_r($in_data);die();
		$result = $client->call($modul, array("in_param" => "$in_data"));

		if ($client->fault) {
		    return($result);
		}
		else {
		    $error = $client->getError();
		    if ($error) {
		        return "<h2>Error 2</h2><pre>" . $error . "</pre>";
		    }
		    else {
				//Header('Content-type: text/xml');
		        return $result['out_param'];
		        print_r($result);
		    }
		}

		return $result['out_param'];
	}
	catch (Exception $e) {
		$err = $e->getMessage();
		// goto Err;
	}
}

?>