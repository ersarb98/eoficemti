webpackJsonp([33],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCutiPageModule", function() { return AddCutiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_cuti__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddCutiPageModule = /** @class */ (function () {
    function AddCutiPageModule() {
    }
    AddCutiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_cuti__["a" /* AddCutiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_cuti__["a" /* AddCutiPage */]),
            ],
        })
    ], AddCutiPageModule);
    return AddCutiPageModule;
}());

//# sourceMappingURL=add-cuti.module.js.map

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

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCutiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soap_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { dashCaseToCamelCase } from '@angular/compiler/src/util';

/**
 * Generated class for the AddCutiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddCutiPage = /** @class */ (function () {
    function AddCutiPage(navCtrl, navParams, viewCtrl, datePicker, platform, datePipe, toastCtrl, soapService, storage, loadingCtrl, oneSignal, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.datePicker = datePicker;
        this.platform = platform;
        this.datePipe = datePipe;
        this.toastCtrl = toastCtrl;
        this.soapService = soapService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.oneSignal = oneSignal;
        this.alertCtrl = alertCtrl;
        this.jenisPengajuan = '';
        this.tanggalMulai = '';
        this.jamMulai = '23';
        this.jamSelesai = '23';
        this.tanggalSelesai = '';
        this.alamat = '';
        this.alasan = '';
        this.errorMsg = '';
        this.jumHari = 0;
        this.jenisPengajuanList = [];
        this.selectValue = '';
        this.disable = false;
        oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_5__config__["e" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_5__config__["g" /* sender_id */]);
        oneSignal.endInit();
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
        });
        this.getJenisCuti();
    }
    AddCutiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCutiPage');
    };
    AddCutiPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddCutiPage.prototype.getJenisCuti = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mengambil Data Jenis Cuti...",
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        loading.present();
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_jenis_cuti', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["d" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["b" /* api_pass */],
            })
        })
            .then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.jenisPengajuanList = responData['data'];
                loading.dismiss();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: responData['rcmsg'],
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loading.dismiss();
            }
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Gagal mendapatkan hari, silahkan periksa koneksi internet anda.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            loading.dismiss();
        });
    };
    AddCutiPage.prototype.showDatePicker = function (type) {
        var _this = this;
        var myDate = new Date();
        var datePickerOption;
        datePickerOption = {
            date: myDate,
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        };
        // if (this.jenisPengajuan == 'Cuti Sakit') {
        //   datePickerOption = {
        //     date: myDate,
        //     mode: 'date',        
        //     androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        //   };
        // } else {
        //   datePickerOption = {
        //     date: myDate,
        //     mode: 'date',
        //     minDate: this.platform.is('ios') ? new Date() : (new Date()).valueOf(),
        //     androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        //   };
        // }
        if (type == 1) {
            this.datePicker.show(datePickerOption).then(function (date) {
                _this.firstDate = date;
                _this.tanggalMulai = _this.datePipe.transform(date, 'MM/dd/yyyy');
                _this.startTglSelesai = date;
            }, function (err) { return console.log('Error occurred while getting date: ', err); });
        }
        else if (type == 2) {
            if (this.tanggalMulai == '') {
                var toast = this.toastCtrl.create({
                    message: 'tanggal mulai harus diisi dahulu.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            else {
                myDate = new Date(this.startTglSelesai);
                this.datePicker.show({
                    date: myDate,
                    mode: 'date',
                    minDate: this.platform.is('ios') ? myDate : (myDate).valueOf(),
                    androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
                }).then(function (date) {
                    _this.secondDate = date;
                    _this.tanggalSelesai = _this.datePipe.transform(date, 'MM/dd/yyyy');
                    _this.getJumHari();
                }, function (err) { return console.log('Error occurred while getting date: ', err); });
            }
        }
    };
    AddCutiPage.prototype.checkFocus = function (data) {
        this.showDatePicker(data);
    };
    AddCutiPage.prototype.getJumHari = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mengambil Data Cuti...",
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        loading.present();
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_cuti_jumlah', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["d" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["b" /* api_pass */],
                id_user: this.userdataTPK['data']['IDUSER'],
                tgl_mulai: this.tanggalMulai,
                tgl_selesai: this.tanggalSelesai,
            })
        })
            .then(function (result) {
            var responData = JSON.parse(String(result));
            //console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.jumHari = responData['data']['JUMLAH_HARI'];
                loading.dismiss();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: responData['rcmsg'],
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loading.dismiss();
            }
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Gagal mendapatkan hari, silahkan periksa koneksi internet anda.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            loading.dismiss();
        });
    };
    AddCutiPage.prototype.doInsert = function () {
        var _this = this;
        var dataJenisPengajuan = this.jenisPengajuanList.filter(function (x) { return x.ID.includes(_this.selectValue); });
        console.log(dataJenisPengajuan[0]['JN_PENGAJUAN']);
        this.jenisPengajuan = dataJenisPengajuan[0]['JN_PENGAJUAN'];
        var validationForm;
        // if (this.jenisPengajuan == 'Cuti Tahunan') {
        //   validationForm = this.jenisPengajuan == '' || this.tanggalMulai == '' || this.tanggalSelesai == '' || this.jamMulai == '' || this.jamSelesai == '' || this.alamat == '' || this.alasan == '' || this.jumHari == '';
        // } else {
        //   validationForm = this.jenisPengajuan == '' || this.tanggalMulai == '' || this.tanggalSelesai == '' || this.jamMulai == '' || this.jamSelesai == '' || this.alamat == '' || this.alasan == '';
        // }
        validationForm = this.jenisPengajuan == '' || this.tanggalMulai == '' || this.tanggalSelesai == '' || this.jamMulai == '' || this.jamSelesai == '' || this.alamat == '' || this.alasan == '' || this.jumHari == '';
        if (validationForm) {
            this.errorMsg = '*mohon melengkapi seluruh input.';
        }
        else {
            var alert_1 = this.alertCtrl.create({
                subTitle: 'Anda yakin ingin mengajukan cuti ?',
                cssClass: 'alert',
                buttons: [
                    {
                        text: 'TIDAK',
                        role: 'cancel',
                        handler: function () {
                            //console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'YA',
                        handler: function () {
                            // if (Date.parse(this.tanggalSelesai) <= Date.parse(this.tanggalMulai)) {
                            // } else {
                            //   let toast = this.toastCtrl.create({
                            //     message: 'Tanggal Selesai tidak boleh kurang dari tanggal mulai.',
                            //     duration: 3000,
                            //     position: 'bottom'
                            //   });
                            //   toast.present();
                            // }
                            var loading = _this.loadingCtrl.create({
                                spinner: 'dots',
                                content: "Mengubah Data...",
                                cssClass: 'transparent',
                                dismissOnPageChange: true
                            });
                            loading.present();
                            _this.soapService
                                .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_cuti_new', {
                                fStream: JSON.stringify({
                                    usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["d" /* api_user */],
                                    passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["b" /* api_pass */],
                                    id_user: _this.userdataTPK['data']['IDUSER'],
                                    id_cabang: _this.userdataTPK['data']['IDCABANG'],
                                    jenis: _this.jenisPengajuan,
                                    tgl_mulai: _this.tanggalMulai,
                                    tgl_selesai: _this.tanggalSelesai,
                                    jam_mulai: _this.jamMulai,
                                    jam_selesai: _this.jamSelesai,
                                    alasan: _this.alasan,
                                    alasan_cuti_penting: _this.alasan,
                                    lokasi: _this.alamat,
                                    jumlah: _this.jumHari,
                                    sisa_cuti: _this.userdataTPK['data']['SISA_CUTI']
                                })
                            })
                                .then(function (result) {
                                var responData = JSON.parse(String(result));
                                if (responData['rcmsg'] == "SUCCESS") {
                                    var toast = _this.toastCtrl.create({
                                        message: 'Berhasil mengajukan cuti.',
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    _this.pushNotif();
                                    toast.present();
                                    loading.dismiss();
                                    _this.cancel();
                                }
                                else {
                                    var toast = _this.toastCtrl.create({
                                        message: responData['rcmsg'],
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    toast.present();
                                    loading.dismiss();
                                }
                            })
                                .catch(function (error) {
                                var toast = _this.toastCtrl.create({
                                    message: 'Input gagal, silahkan periksa koneksi internet anda.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                                loading.dismiss();
                            });
                        }
                    }
                ]
            });
            if (parseInt(dataJenisPengajuan[0]['MAX_JUM_CUTI']) == 0) {
                if (this.jumHari >= parseInt(dataJenisPengajuan[0]['MIN_JUM_CUTI'])) {
                    alert_1.present();
                }
                else {
                    this.errorMsg = '*' + dataJenisPengajuan[0]['JN_PENGAJUAN'] + " minimal " + dataJenisPengajuan[0]['MIN_JUM_CUTI'] + " hari.";
                }
            }
            else {
                if (this.jumHari >= parseInt(dataJenisPengajuan[0]['MIN_JUM_CUTI']) && this.jumHari <= parseInt(dataJenisPengajuan[0]['MAX_JUM_CUTI'])) {
                    alert_1.present();
                }
                else {
                    this.errorMsg = '*' + dataJenisPengajuan[0]['JN_PENGAJUAN'] + " minimal " + dataJenisPengajuan[0]['MIN_JUM_CUTI'] + " hari dan maksimal " + dataJenisPengajuan[0]['MIN_JUM_CUTI'] + " hari.";
                }
            }
            // if (this.jenisPengajuan['JN_PENGAJUAN'] == this.jenisPengajuanList[]) {
            //   if (this.jumHari > 0 && this.jumHari <= 2) {
            //     alert.present();
            //   } else {
            //     this.errorMsg = '*' + this.alasan + " maksimal 2 hari";
            //   }
            // } 
            // else if (this.jenisPengajuan == 'Cuti Penting') {
            //   if (this.alasan == 'Keluarga sakit keras atau meninggal dunia' || this.alasan == 'Melangsungkan perkawinan yang pertama') {
            //     if (this.jumHari >= 2  && this.jumHari <= 7) {
            //       alert.present();
            //     } else {
            //       this.errorMsg = '*' + this.alasan + " minimal 2 hari dan maksimal 7 hari";
            //     }
            //   } else if (this.alasan == 'Mengurus harta warisan') {
            //     if (this.jumHari > 0  && this.jumHari <= 7) {
            //       alert.present();
            //     } else {
            //       this.errorMsg = '*' + this.alasan + " maksimal 7 hari";
            //     }
            //   }
            // } 
            // else {
            //   alert.present();
            // }
        }
    };
    AddCutiPage.prototype.pushNotif = function () {
        var _this = this;
        this.oneSignal.getIds().then(function (id) {
            _this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_notif_imove', {
                fStream: JSON.stringify({
                    usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["d" /* api_user */],
                    passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["b" /* api_pass */],
                    id_user: [_this.userdataTPK['data']['ID_USER_ATASAN']],
                    data: {
                        res: "InboxPage"
                    },
                    content: {
                        "en": "Pengajuan cuti dari " + _this.userdataTPK['data']['NAMA'] + " memerlukan persetujuan."
                    },
                    heading: {
                        "en": "Pengajuan Cuti"
                    }
                })
            }).then(function (result) {
                var hasil = JSON.parse(String(result));
            }).catch(function (error) {
                //console.log(error);
                _this.navCtrl.pop();
            });
        });
    };
    AddCutiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-cuti',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-cuti/add-cuti.html"*/'<!--\n  Generated template for the UpdateUserdataPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <span ion-text color="light">Pengajuan Cuti/Izin</span>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="cancel()">\n                <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <span item-left>\n            <img src="assets/imgs/menu-icon/jenis_cuti.png" class="icons">\n        </span>\n        <ion-label stacked>Jenis Pengajuan</ion-label>\n        <ion-select [(ngModel)]="selectValue" placeholder="">\n            <!-- <ion-option value="Izin">Izin</ion-option>            \n            <ion-option value="Izin Tidak Memotong Cuti">Izin Tidak Memotong Cuti</ion-option>            \n            <ion-option value="Cuti Tahunan">Cuti Tahunan</ion-option>\n            <ion-option value="Cuti Besar">Cuti Besar</ion-option>\n            <ion-option value="Cuti Sakit">Cuti Sakit</ion-option>\n            <ion-option value="Cuti Bersalin">Cuti Bersalin dan Gugur Kandungan</ion-option>\n            <ion-option value="Cuti Penting">Cuti Karena Alasan Penting</ion-option>\n            <ion-option value="Cuti Diluar">Cuti Diluar Tanggungan Perusahaan</ion-option>        \n            <ion-option value="Cuti Massal">Cuti Massal / Cuti Bersama</ion-option>        \n            <ion-option value="Masa Haid">Cuti Haid</ion-option> -->\n            <div *ngIf="jenisPengajuanList.length > 0">\n                <ion-option *ngFor="let jn_cuti of jenisPengajuanList; let i = index" value="{{ jn_cuti[\'ID\'] }}">{{ jn_cuti[\'JN_PENGAJUAN\'] }}</ion-option> \n            </div>\n        </ion-select>\n    </ion-item>\n\n    <div>\n        <ion-item style="width:70%; float: left;">\n            <span item-left>\n                <img src="assets/imgs/menu-icon/start_date.png" class="icons">\n            </span>\n            <ion-label stacked>Tanggal Mulai</ion-label>\n            <ion-input type="text" [readonly]="true" (ionFocus)="checkFocus(1)" (click)="checkFocus(1)" [(ngModel)]="tanggalMulai"></ion-input>\n        </ion-item>\n\n        <ion-item style="width:30%; float:right;padding-top:14px;padding-left:3px !important;">\n            <ion-select [(ngModel)]="jamMulai" placeholder="" style="max-width:100%;">\n                <ion-option value="23">7:00</ion-option>\n                <ion-option value="24">19:00</ion-option>\n                <ion-option value="1">0:00</ion-option>\n                <ion-option value="2">8:00</ion-option>\n                <ion-option value="3">8:30</ion-option>\n                <ion-option value="4">9:00</ion-option>\n                <ion-option value="5">9:30</ion-option>\n                <ion-option value="6">10:00</ion-option>\n                <ion-option value="7">10:30</ion-option>\n                <ion-option value="8">11:00</ion-option>\n                <ion-option value="9">11:30</ion-option>\n                <ion-option value="10">12:00</ion-option>\n                <ion-option value="11">12:30</ion-option>\n                <ion-option value="12">13:00</ion-option>\n                <ion-option value="13">13:30</ion-option>\n                <ion-option value="14">14:00</ion-option>\n                <ion-option value="15">14:30</ion-option>\n                <ion-option value="16">15:00</ion-option>\n                <ion-option value="17">15:30</ion-option>\n                <ion-option value="18">16:00</ion-option>\n                <ion-option value="19">16:30</ion-option>\n                <ion-option value="20">17:00</ion-option>\n                <ion-option value="21">17:30</ion-option>\n                <ion-option value="22">18.00</ion-option>\n                <ion-option value="25">20:00</ion-option>\n                <ion-option value="26">6:00</ion-option>\n                <ion-option value="28">7:30</ion-option>\n            </ion-select>\n        </ion-item>\n    </div>\n\n    <div>\n        <ion-item style="width:70%; float: left;">\n            <span item-left>\n                <img src="assets/imgs/menu-icon/end_date.png" class="icons">\n            </span>\n            <ion-label stacked>Tanggal Selesai</ion-label>\n            <!-- <ion-input type="text" [readonly]="true" (ionFocus)="checkFocus(2)" [(ngModel)]="tanggalSelesai"> -->\n                <ion-input type="text" [readonly]="true" (click)="checkFocus(2)" (ionFocus)="checkFocus(2)" [(ngModel)]="tanggalSelesai">\n            </ion-input>\n        </ion-item>\n\n        <ion-item style="width:30%; float:right;padding-top:14px;padding-left:3px !important;">\n            <ion-select [(ngModel)]="jamSelesai" placeholder="" style="max-width:100%;">\n                <ion-option value="23">7:30</ion-option>\n                <ion-option value="24">20:00</ion-option>\n                <ion-option value="1">8:00</ion-option>\n                <ion-option value="2">8:30</ion-option>\n                <ion-option value="3">9:00</ion-option>\n                <ion-option value="4">9:30</ion-option>\n                <ion-option value="5">10:00</ion-option>\n                <ion-option value="6">10:30</ion-option>\n                <ion-option value="7">11:00</ion-option>\n                <ion-option value="8">11:30</ion-option>\n                <ion-option value="9">12:00</ion-option>\n                <ion-option value="10">12:30</ion-option>\n                <ion-option value="11">13:00</ion-option>\n                <ion-option value="12">13:30</ion-option>\n                <ion-option value="13">14:00</ion-option>\n                <ion-option value="14">14:30</ion-option>\n                <ion-option value="15">15:00</ion-option>\n                <ion-option value="16">15:30</ion-option>\n                <ion-option value="17">16:00</ion-option>\n                <ion-option value="18">16:30</ion-option>\n                <ion-option value="19">17:00</ion-option>\n                <ion-option value="20">17:30</ion-option>\n                <ion-option value="21">18:00</ion-option>\n                <ion-option value="22">19.00</ion-option>\n                <ion-option value="25">22:00</ion-option>\n                <ion-option value="26">7:00</ion-option>\n                <ion-option value="28">8:00</ion-option>\n            </ion-select>\n        </ion-item>\n    </div>\n\n    <div *ngIf="tanggalSelesai != \'\'" >\n        <ion-item>\n            <span item-left>\n                <img src="assets/imgs/menu-icon/jumHari.png" class="icons">\n            </span>\n            <ion-label stacked>Jumlah Hari</ion-label>\n            <ion-input type="number" [(ngModel)]="jumHari"></ion-input>\n        </ion-item>\n\n        <p ion-text text-wrap color="color4" style="padding-left:8px !important;">*Bila terdapat kesalahan jumlah hari silahkan disesuaikan</p>\n        <p ion-text text-wrap color="danger" style="padding-left:8px !important;">Sisa Cuti Tahunan : <b>{{ userdataTPK[\'data\'][\'SISA_CUTI\'] }}</b></p>\n    </div>\n\n    <ion-item>\n        <span item-left>\n            <img src="assets/imgs/menu-icon/alamat.png" class="icons">\n        </span>\n        <ion-label stacked>Alamat Selama Cuti</ion-label>\n        <ion-textarea rows="3" [(ngModel)]="alamat"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n        <span item-left>\n            <img src="assets/imgs/menu-icon/alasan.png" class="icons">\n        </span>\n        <ion-label stacked>Alasan</ion-label>\n        <ion-input type="text" [(ngModel)]="alasan"></ion-input>\n    </ion-item>\n\n    <!-- <ion-item *ngIf="jenisPengajuan == \'Cuti Penting\'">\n        <span item-left>\n            <img src="assets/imgs/menu-icon/alasan.png" class="icons">\n        </span>\n        <ion-label stacked>Alasan</ion-label>\n        <ion-select [(ngModel)]="alasan" placeholder="">\n            <ion-option value="Keluarga sakit keras atau meninggal dunia">Keluarga sakit keras atau meninggal dunia</ion-option>\n            <ion-option value="Mengurus harta warisan">Mengurus harta warisan</ion-option>\n            <ion-option value="Melangsungkan perkawinan yang pertama">Melangsungkan perkawinan yang pertama</ion-option>\n            <ion-option value="Melaksanakan Ibadah Haji ke Tanah Suci">Melaksanakan Ibadah Haji ke Tanah Suci</ion-option>\n            <ion-option value="Melaksanakan Ibadah Umroh">Melaksanakan Ibadah Umroh</ion-option>\n            <ion-option value="Lainnya yang ditetapkan perusahaan">Lainnya yang ditetapkan perusahaan</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="jenisPengajuan == \'Izin Tidak Memotong Cuti\'">\n        <span item-left>\n            <img src="assets/imgs/menu-icon/alasan.png" class="icons">\n        </span>\n        <ion-label stacked>Alasan</ion-label>\n        <ion-select [(ngModel)]="alasan" placeholder="">\n            <ion-option value="Khitanan anak">Khitanan anak</ion-option>\n            <ion-option value="Pernikahan anak">Pernikahan anak</ion-option>\n            <ion-option value="Pekerja pindah rumah">Pekerja pindah rumah</ion-option>\n            <ion-option value="Istri pekerja melahirkan atau keguguran">Istri pekerja melahirkan atau keguguran</ion-option>            \n        </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="jenisPengajuan == \'Cuti Bersalin\'">\n        <span item-left>\n            <img src="assets/imgs/menu-icon/alasan.png" class="icons">\n        </span>\n        <ion-label stacked>Alasan</ion-label>\n        <ion-select [(ngModel)]="alasan" placeholder="">\n            <ion-option value="Cuti bersalin">Cuti bersalin</ion-option>\n            <ion-option value="Cuti gugur kandungan">Cuti gugur kandungan</ion-option>            \n        </ion-select>\n    </ion-item> -->\n    <p ion-text text-wrap color="danger" style="padding-left:8px !important;">{{errorMsg}}</p>\n    <br>\n    <div class="row">\n        <div class="col">\n            <button ion-button full icon-start color="danger" style="border-radius: 5px;" (click)="cancel()">\n                <ion-icon name="close"></ion-icon>\n                Batal\n            </button>\n        </div>\n        <div class="col">\n            <button ion-button full icon-end style="border-radius: 5px;" [disabled]=\'disable\' (click)="doInsert()">\n                Ajukan\n                <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-cuti/add-cuti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AddCutiPage);
    return AddCutiPage;
}());

//# sourceMappingURL=add-cuti.js.map

/***/ })

});
//# sourceMappingURL=33.js.map