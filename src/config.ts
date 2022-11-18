import {Injectable} from "@angular/core";

@Injectable() 
    export class Config {

}   
//prod
export const sender_id = '286575097065';
export const oneSignalAppId = '569a0df1-a068-4a2d-afc6-737efcdae5a7';

//dev
// export const sender_id = '346331100253';
// export const oneSignalAppId = '3dc3181a-a59f-4f2e-91ce-6119ce479feb';


//dev
// export const api_base_url = 'http://10.1.19.100/api_itpk_dev/index.php?wsdl';
// export const api_res = 'http://10.1.19.100/api_itpk_dev/';
// export const url_image = "http://10.1.19.100/api_itpk_dev/foto_absen";
// export const api_base_url = 'http://192.168.5.22/e-office-itpk/api_itpk/index.php?wsdl';
// export const api_p2b_url = 'http://103.19.80.243/cfs_dev/api/index.php?wsdl';



//prod
// export const api_base_url = 'http://103.234.195.187/api_itpk/index.php?wsdl';
export const api_res = 'http://10.1.19.100/api_itpk/';
export const url_image = "http://10.1.19.100/api_itpk/foto_absen";
export const api_base_url = 'http://10.1.19.100/api_itpk/index.php?wsdl';
export const api_p2b_url = 'http://103.19.80.188/api/index.php?wsdl';
export const urldownload_srt = 'http://10.1.19.100/';
export const url_upload_sppd = 'http://10.1.19.100/api_itpk/f116_eoffice_upload_attachment_sppd.php';
export const url_download_att_cv = 'http://10.1.19.100/upload_personal_info/';
export const url_upload_att_cv = 'http://10.1.19.100/api_itpk/f147_eoffice_upload_attachment_cv.php';




export const api_user = "EDI-USERNAME";
export const api_pass = "RURJLVBBU1NXT1JE";   

export const sc_code = "no value";   
export const sc_type = "no value";   