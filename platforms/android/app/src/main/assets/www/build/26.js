webpackJsonp([26],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CariPegawaiPageModule", function() { return CariPegawaiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cari_pegawai__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CariPegawaiPageModule = /** @class */ (function () {
    function CariPegawaiPageModule() {
    }
    CariPegawaiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cari_pegawai__["a" /* CariPegawaiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cari_pegawai__["a" /* CariPegawaiPage */]),
            ],
        })
    ], CariPegawaiPageModule);
    return CariPegawaiPageModule;
}());

//# sourceMappingURL=cari-pegawai.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__soapclient_js__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__soapclient_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__soapclient_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SoapService = /** @class */ (function () {
    function SoapService() {
    }
    SoapService.prototype.post = function (url, action, params) {
        var _this = this;
        this.soapParams = new __WEBPACK_IMPORTED_MODULE_1__soapclient_js___default.a.SOAPClientParameters;
        this.soapClient = __WEBPACK_IMPORTED_MODULE_1__soapclient_js___default.a.SOAPClient;
        return new Promise(function (resolve, reject) {
            //Create SOAPClientParameters
            for (var param in params) {
                _this.soapParams.add(param, params[param]);
            }
            //Create Callback
            var soapCallback = function (e, status) {
                if (e == null || e.constructor.toString().indexOf("function Error()") != -1) {
                    reject("Unable to contat the server: " + status);
                }
                else {
                    resolve(e);
                }
            };
            _this.soapClient.invoke(url, action, _this.soapParams, true, soapCallback);
        });
    };
    SoapService.prototype.setCredentials = function (username, password) {
        this.soapClient.username = username;
        this.soapClient.password = password;
    };
    SoapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SoapService);
    return SoapService;
}());

//# sourceMappingURL=soap.service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

/*****************************************************************************\
 Javascript "SOAP Client" library
 
 @version: 2.4 - 2007.12.21
 @author: Matteo Casati - http://www.guru4.net/
 
\*****************************************************************************/
 


function SOAPClientParameters()
{
	var _pl = new Array();
	this.add = function(name, value) 
	{
		_pl[name] = value; 
		return this; 
	}
	this.toXml = function()
	{
		var xml = "";
		for(var p in _pl)
		{
			switch(typeof(_pl[p])) 
			{
                case "string":
                case "number":
                case "boolean":
                case "object":
                    xml += "<" + p + ">" + SOAPClientParameters._serialize(_pl[p]) + "</" + p + ">";
                    break;
                default:
                    break;
            }
		}
		return xml;	
	}
}
SOAPClientParameters._serialize = function(o)
{
    var s = "";
    switch(typeof(o))
    {
        case "string":
            s += o.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); break;
        case "number":
        case "boolean":
            s += o.toString(); break;
        case "object":
            // Date
            if(o.constructor.toString().indexOf("function Date()") > -1)
            {
        
                var year = o.getFullYear().toString();
                var month = (o.getMonth() + 1).toString(); month = (month.length == 1) ? "0" + month : month;
                var date = o.getDate().toString(); date = (date.length == 1) ? "0" + date : date;
                var hours = o.getHours().toString(); hours = (hours.length == 1) ? "0" + hours : hours;
                var minutes = o.getMinutes().toString(); minutes = (minutes.length == 1) ? "0" + minutes : minutes;
                var seconds = o.getSeconds().toString(); seconds = (seconds.length == 1) ? "0" + seconds : seconds;
                var milliseconds = o.getMilliseconds().toString();
                var tzminutes = Math.abs(o.getTimezoneOffset());
                var tzhours = 0;
                while(tzminutes >= 60)
                {
                    tzhours++;
                    tzminutes -= 60;
                }
                tzminutes = (tzminutes.toString().length == 1) ? "0" + tzminutes.toString() : tzminutes.toString();
                tzhours = (tzhours.toString().length == 1) ? "0" + tzhours.toString() : tzhours.toString();
                var timezone = ((o.getTimezoneOffset() < 0) ? "+" : "-") + tzhours + ":" + tzminutes;
                s += year + "-" + month + "-" + date + "T" + hours + ":" + minutes + ":" + seconds + "." + milliseconds + timezone;
            }
            // Array
            else if(o.constructor.toString().indexOf("function Array()") > -1)
            {
                for(var p in o)
                {
                    if(!isNaN(p))   // linear array
                    {
                        (/function\s+(\w*)\s*\(/ig).exec(o[p].constructor.toString());
                        var type = RegExp.$1;
                        switch(type)
                        {
                            case "":
                                type = typeof(o[p]);
                            case "String":
                                type = "string"; break;
                            case "Number":
                                type = "int"; break;
                            case "Boolean":
                                type = "bool"; break;
                            case "Date":
                                type = "DateTime"; break;
                        }
                        s += "<" + type + ">" + SOAPClientParameters._serialize(o[p]) + "</" + type + ">"
                    }
                    else    // associative array
                        s += "<" + p + ">" + SOAPClientParameters._serialize(o[p]) + "</" + p + ">"
                }
            }
            // Object or custom function
            else
                for(var p in o){
					xmlAtrr = ''
					for (var p2 in o[p]){ 
							if(p2 == "@"){ // Calculus: Keyword for XML attributes within the objects
								for (var p3 in o[p][p2]){
									xmlAtrr+= ' ' + p3 + "=" + '"'+o[p][p2][p3]+'"';
								}
							}
						}
					if (p == '@'){

					}else{
						 s += "<" + p + xmlAtrr + ">" + SOAPClientParameters._serialize(o[p]) + "</" + p + ">";
					}
				}
            break;
        default:
            break; // throw new Error(500, "SOAPClientParameters: type '" + typeof(o) + "' is not supported");
    }
    return s;
}

function SOAPClient() {}

SOAPClient.username = null;
SOAPClient.password = null;

SOAPClient.invoke = function(url, method, parameters, async, callback)
{
	if(async)
		SOAPClient._loadWsdl(url, method, parameters, async, callback);
	else
		return SOAPClient._loadWsdl(url, method, parameters, async, callback);
}

// private: wsdl cache
SOAPClient_cacheWsdl = new Array();

// private: invoke async
SOAPClient._loadWsdl = function(url, method, parameters, async, callback)
{
	// load from cache?
	var wsdl = SOAPClient_cacheWsdl[url];
	if(wsdl + "" != "" && wsdl + "" != "undefined")
		return SOAPClient._sendSoapRequest(url, method, parameters, async, callback, wsdl);
	// get wsdl
	var xmlHttp = SOAPClient._getXmlHttp();
	//  xmlHttp.open("GET", url + "?wsdl", async);
	xmlHttp.open("GET", url, async);
	if(async) 
	{
		xmlHttp.onreadystatechange = function() 
		{
            
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    SOAPClient._onLoadWsdl(url, method, parameters, async, callback, xmlHttp);
                } else {
                    callback(null, xmlHttp.statusText);
                }
            }  
		}
	}
     xmlHttp.send(null);
     
	if (!async)
		return SOAPClient._onLoadWsdl(url, method, parameters, async, callback, xmlHttp);
}
SOAPClient._onLoadWsdl = function(url, method, parameters, async, callback, req)
{
	var wsdl = req.responseXML;
	SOAPClient_cacheWsdl[url] = wsdl;	// save a copy in cache
	return SOAPClient._sendSoapRequest(url, method, parameters, async, callback, wsdl);
}
SOAPClient._sendSoapRequest = function(url, method, parameters, async, callback, wsdl)
{
	// get namespace
	var ns = (wsdl.documentElement.attributes["targetNamespace"] + "" == "undefined") ? wsdl.documentElement.attributes.getNamedItem("targetNamespace").nodeValue : wsdl.documentElement.attributes["targetNamespace"].value;
	// build SOAP request
	var sr = 
				"<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
				"<soap:Envelope " +
				"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
				"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
				"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
				"<soap:Body>" +
				"<" + method + " xmlns=\"" + ns + "\">" +
				parameters.toXml() +
				"</" + method + "></soap:Body></soap:Envelope>";
	// send request
	var xmlHttp = SOAPClient._getXmlHttp();
	if (SOAPClient.userName && SOAPClient.password){
		xmlHttp.open("POST", url, async, SOAPClient.userName, SOAPClient.password);
		// Some WS implementations (i.e. BEA WebLogic Server 10.0 JAX-WS) don't support Challenge/Response HTTP BASIC, so we send authorization headers in the first request
		xmlHttp.setRequestHeader("Authorization", "Basic " + SOAPClient._toBase64(SOAPClient.userName + ":" + SOAPClient.password));
	}
	else
		xmlHttp.open("POST", url, async);
       xmlHttp.timeout = 15000;
	var soapaction = ((ns.lastIndexOf("/") != ns.length - 1) ? ns + "/" : ns) + encodeURIComponent(method);
	xmlHttp.setRequestHeader("SOAPAction", soapaction); 
	xmlHttp.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
	// xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "https://<ORIGINSERVER>");
	// xmlHttp.setRequestHeader("Access-Control-Allow-Credentials", "true");
	// xmlHttp.setRequestHeader("Access-Control-Allow-Methods", "GET");
	if(async) 
	{
        xmlHttp.ontimeout = function(e){
            callback(null, e.type);
        };
		xmlHttp.onreadystatechange = function() 
		{
             if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                     SOAPClient._onSendSoapRequest(method, async, callback, wsdl, xmlHttp);
                } else {                   
                    callback(null, xmlHttp.statusText);
                }
            }  
		} 
	}   	
    xmlHttp.send(sr);
	if (!async)
		return SOAPClient._onSendSoapRequest(method, async, callback, wsdl, xmlHttp);
}

SOAPClient._onSendSoapRequest = function(method, async, callback, wsdl, req) 
{
	var o = null;
	var nd = SOAPClient._getElementsByTagName(req.responseXML, method + "Result");    
	if(nd.length == 0)
		nd = SOAPClient._getElementsByTagName(req.responseXML, "return");	// PHP web Service?
	if(nd.length == 0)
	{
		if(req.responseXML.getElementsByTagName("faultcode").length > 0)
		{
		    if(async || callback)
		        o = new Error(500, req.responseXML.getElementsByTagName("faultstring")[0].childNodes[0].nodeValue);
			else
			    throw new Error(500, req.responseXML.getElementsByTagName("faultstring")[0].childNodes[0].nodeValue);			
		}
	}
	else
		o = SOAPClient._soapresult2object(nd[0], wsdl);        
	if(callback)
		callback(o, req.responseXML);
	if(!async)
		return o;
}
SOAPClient._soapresult2object = function(node, wsdl)
{
    var wsdlTypes = SOAPClient._getTypesFromWsdl(wsdl);
    return SOAPClient._node2object(node, wsdlTypes);
}
SOAPClient._node2object = function(node, wsdlTypes)
{
	// null node
	if(node == null)
		return null;
	// text node
	if(node.nodeType == 3 || node.nodeType == 4)
		return SOAPClient._extractValue(node, wsdlTypes);
	// leaf node
	if (node.childNodes.length == 1 && (node.childNodes[0].nodeType == 3 || node.childNodes[0].nodeType == 4))
		return SOAPClient._node2object(node.childNodes[0], wsdlTypes);
	var isarray = SOAPClient._getTypeFromWsdl(node.nodeName, wsdlTypes).toLowerCase().indexOf("arrayof") != -1;
	// object node
	if(!isarray)
	{
		var obj = null;
		if(node.hasChildNodes())
			obj = new Object();
		for(var i = 0; i < node.childNodes.length; i++)
		{
			var p = SOAPClient._node2object(node.childNodes[i], wsdlTypes);
			obj[node.childNodes[i].nodeName] = p;
		}
		return obj;
	}
	// list node
	else
	{
		// create node ref
		var l = new Array();
		for(var i = 0; i < node.childNodes.length; i++)
			l[l.length] = SOAPClient._node2object(node.childNodes[i], wsdlTypes);
		return l;
	}
	return null;
}
SOAPClient._extractValue = function(node, wsdlTypes)
{
	var value = node.nodeValue;
	switch(SOAPClient._getTypeFromWsdl(node.parentNode.nodeName, wsdlTypes).toLowerCase())
	{
		default:
		case "s:string":			
			return (value != null) ? value + "" : "";
		case "s:boolean":
			return value + "" == "true";
		case "s:int":
		case "s:long":
			return (value != null) ? parseInt(value + "", 10) : 0;
		case "s:double":
			return (value != null) ? parseFloat(value + "") : 0;
		case "s:datetime":
			if(value == null)
				return null;
			else
			{
				value = value + "";
				value = value.substring(0, (value.lastIndexOf(".") == -1 ? value.length : value.lastIndexOf(".")));
				value = value.replace(/T/gi," ");
				value = value.replace(/-/gi,"/");
				var d = new Date();
				d.setTime(Date.parse(value));										
				return d;				
			}
	}
}
SOAPClient._getTypesFromWsdl = function(wsdl)
{
	var wsdlTypes = new Array();
	// IE
	var ell = wsdl.getElementsByTagName("s:element");	
	var useNamedItem = true;
	// MOZ
	if(ell.length == 0)
	{
		ell = wsdl.getElementsByTagName("element");	     
		useNamedItem = false;
	}
	for(var i = 0; i < ell.length; i++)
	{
		if(useNamedItem)
		{
			if(ell[i].attributes.getNamedItem("name") != null && ell[i].attributes.getNamedItem("type") != null) 
				wsdlTypes[ell[i].attributes.getNamedItem("name").nodeValue] = ell[i].attributes.getNamedItem("type").nodeValue;
		}	
		else
		{
			if(ell[i].attributes["name"] != null && ell[i].attributes["type"] != null)
				wsdlTypes[ell[i].attributes["name"].value] = ell[i].attributes["type"].value;
		}
	}
	return wsdlTypes;
}
SOAPClient._getTypeFromWsdl = function(elementname, wsdlTypes)
{
    var type = wsdlTypes[elementname] + "";
    return (type == "undefined") ? "" : type;
}
// private: utils
SOAPClient._getElementsByTagName = function(document, tagName)
{
	try
	{
		// trying to get node omitting any namespaces (latest versions of MSXML.XMLDocument)
		return document.selectNodes(".//*[local-name()=\""+ tagName +"\"]");
	}
	catch (ex) {}
	// old XML parser support
	return document.getElementsByTagName(tagName);
}
// private: xmlhttp factory
SOAPClient._getXmlHttp = function() 
{
	try
	{
		if(window.XMLHttpRequest) 
		{
			var req = new XMLHttpRequest();
			// some versions of Moz do not support the readyState property and the onreadystate event so we patch it!
			if(req.readyState == null) 
			{
				req.readyState = 1;
				req.addEventListener("load", 
									function() 
									{
										req.readyState = 4;
										if(typeof req.onreadystatechange == "function")
											req.onreadystatechange();
									},
									false);
			}
			return req;
		}
		if(window.ActiveXObject) 
			return new ActiveXObject(SOAPClient._getXmlHttpProgID());
	}
	catch (ex) {}
	throw new Error("Your browser does not support XmlHttp objects");
}
SOAPClient._getXmlHttpProgID = function()
{
	if(SOAPClient._getXmlHttpProgID.progid)
		return SOAPClient._getXmlHttpProgID.progid;
	var progids = ["Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
	var o;
	for(var i = 0; i < progids.length; i++)
	{
		try
		{
			o = new ActiveXObject(progids[i]);
			return SOAPClient._getXmlHttpProgID.progid = progids[i];
		}
		catch (ex) {};
	}
	throw new Error("Could not find an installed XML parser");
}

SOAPClient._toBase64 = function(input)
{
	var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var output = "";
	var chr1, chr2, chr3;
	var enc1, enc2, enc3, enc4;
	var i = 0;

	do {
		chr1 = input.charCodeAt(i++);
		chr2 = input.charCodeAt(i++);
		chr3 = input.charCodeAt(i++);

		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		enc4 = chr3 & 63;

		if (isNaN(chr2)) {
			enc3 = enc4 = 64;
		} else if (isNaN(chr3)) {
			enc4 = 64;
		}

		output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) +
		keyStr.charAt(enc3) + keyStr.charAt(enc4);
	} while (i < input.length);

	return output;
}

module.exports = {
	SOAPClientParameters:SOAPClientParameters,
	SOAPClient:SOAPClient
};


/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CariPegawaiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CariPegawaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CariPegawaiPage = /** @class */ (function () {
    function CariPegawaiPage(navCtrl, navParams, _fb, soapService, loadingCtrl, alertCtrl, modalCtrl, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fb = _fb;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.isLoading = false;
        this.searchDataList = [];
        this.jumlahPegawai = 0;
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.pegawaiForm = this._fb.group({
            fcSearch: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])]
        });
    }
    CariPegawaiPage.prototype.ionViewDidEnter = function () {
        // this.getJumlahPegawai();
    };
    CariPegawaiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CariPegawaiPage');
    };
    // getJumlahPegawai() {
    //   let loading = this.loadingCtrl.create({
    //     spinner: 'dots',
    //     content: "Mohon Tunggu...",       
    //     cssClass: 'transparent',
    //     dismissOnPageChange:true
    //   });
    //   loading.present();
    //   this.isLoading = true;
    //   this.soapService
    //   //.post(api_base_url,'eoffice_data_direktorat_ipcc',{fStream:JSON.stringify(
    //   .post(api_base_url,'eoffice_bypass_wso',{fStream:JSON.stringify(
    //     {
    //       // usernameEDI : api_user, 
    //       // passwordEDI : api_pass
    //       sc_type: 'countpeg',
    //       sc_code: sc_code,        
    //       data : {}         
    //     }
    //   )}).then(result => {
    //     var responData = JSON.parse(String(result));
    //     console.log(responData);
    //     if (responData['rcmsg'] == "SUCCESS") {        
    //       this.jumlahPegawai = responData['data'][0]['JUMLAH'];
    //     } else {        
    //       let toast = this.toastCtrl.create({
    //         message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
    //         duration: 3000,
    //         position: 'bottom'
    //       });
    //       toast.present();  
    //     }  
    //     loading.dismiss();
    //     this.isLoading = false;    
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     let toast = this.toastCtrl.create({
    //       message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
    //       duration: 3000,
    //       position: 'bottom'
    //     });
    //     toast.present();          
    //     loading.dismiss();
    //     this.isLoading = false;       
    //   });
    // }
    CariPegawaiPage.prototype.doSearch = function () {
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.searchDataList = [];
        this.getSearchList('first', '');
    };
    CariPegawaiPage.prototype.getSearchList = function (type, functionName) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        if (type == 'first' && functionName == '') {
            loading.present();
        }
        var searchInput = this.pegawaiForm.controls.fcSearch.value;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_findemployee', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["d" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["b" /* api_pass */],
                search: searchInput.toUpperCase(),
                atas: this.batasAtas,
                bawah: this.batasBawah
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.searchDataList = [];
                }
                if (responData['data'].length > 0 && !_this.isEmptyObject(responData['data'][0])) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.searchDataList.push(responData['data'][i]);
                    }
                }
                // console.log(this.searchDataList);        
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            if (type == 'first' && functionName == '') {
                loading.dismiss();
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
            //this.isLoading = false;  
        })
            .catch(function (error) {
            // console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            if (type == 'first' && functionName == '') {
                loading.dismiss();
                _this.isLoading = false;
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
        });
    };
    CariPegawaiPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.searchDataList.length >= 20) {
            this.batasAtas = this.batasBawah + 1;
            this.batasBawah = this.batasBawah + 20;
            this.getSearchList('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
    };
    // goToDetailPegawai(data) {
    //   let modal = this.modalCtrl.create("CariPegawaiDetailPage",{ dataPegawai: data }, {
    //     enableBackdropDismiss: true,
    //     showBackdrop:true       
    //   });
    //   modal.present();
    // } 
    CariPegawaiPage.prototype.convertImage = function (data) {
        return btoa(data);
    };
    CariPegawaiPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    CariPegawaiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cari-pegawai',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"D:\Project\pos-ppi\src\pages\cari-pegawai\cari-pegawai.html"*/'<!--\n\n  Generated template for the CariPegawaiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <span ion-text color="light" class="fw500">Cari Pegawai</span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div class="my-padding">\n\n        <form [formGroup]="pegawaiForm" class="list-form">\n\n            <ion-item no-padding>\n\n                <span item-left>\n\n                    <img src="assets/imgs/menu-icon/contact-icon.png" class="icons">\n\n                </span>\n\n                <ion-label stacked>Cari (Nama/NIPP/Jabatan) </ion-label>\n\n                <ion-input type="text" formControlName="fcSearch" placeholder=""></ion-input>\n\n            </ion-item>\n\n            <button ion-button icon-start block class="button" margin-top (click)="doSearch()" [disabled]="!pegawaiForm.valid">\n\n                <ion-icon name="ios-search"></ion-icon>\n\n                Cari\n\n            </button>\n\n        </form>\n\n    </div>\n\n\n\n    <ion-list *ngIf="isLoading == false && !isEmptyObject(searchDataList[0])">\n\n        <div align="center" class="headers">\n\n            <br>\n\n            <span class="font3" ion-text text-center color="gray">{{ searchDataList.length }} Hasil\n\n                Pencarian</span>\n\n        </div>\n\n\n\n        <ion-card *ngFor="let searchData of searchDataList" class="my-card">\n\n            <ion-item>\n\n                <span item-start>\n\n                    <img *ngIf="searchData[\'FOTO\'] == \'\'" src="assets/imgs/logo/peserta_pekerja.png" class="icons2">\n\n                    <img *ngIf="searchData[\'FOTO\'] != \'\'" src="{{ searchData[\'FOTO\'] }}" class="icons2">\n\n                </span>\n\n                <span class="font2">{{ searchData[\'NIPP\'] }}</span><br>\n\n                <span ion-text text-wrap class="font1"><b>{{ searchData[\'NAMA\'] }}</b></span>            \n\n                <br />\n\n                <span ion-text text-wrap class="font2">{{ searchData[\'NAMA_CABANG\'] }}</span>\n\n                <br />\n\n                <span ion-text text-wrap class="font3" color="gray">{{ searchData[\'NAMA_JABATAN\'] }}</span>\n\n                <br />\n\n                <span ion-text text-wrap class="font3" color="danger">\n\n                    {{ searchData[\'EMAIL\'] }}\n\n                </span>\n\n            </ion-item>\n\n        </ion-card>\n\n    </ion-list>\n\n\n\n\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Project\pos-ppi\src\pages\cari-pegawai\cari-pegawai.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], CariPegawaiPage);
    return CariPegawaiPage;
}());

//# sourceMappingURL=cari-pegawai.js.map

/***/ })

});
//# sourceMappingURL=26.js.map