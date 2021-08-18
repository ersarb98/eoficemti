webpackJsonp([17],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KoreksiAbsenBawahanPageModule", function() { return KoreksiAbsenBawahanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__koreksi_absen_bawahan__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KoreksiAbsenBawahanPageModule = /** @class */ (function () {
    function KoreksiAbsenBawahanPageModule() {
    }
    KoreksiAbsenBawahanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__koreksi_absen_bawahan__["a" /* KoreksiAbsenBawahanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__koreksi_absen_bawahan__["a" /* KoreksiAbsenBawahanPage */]),
            ],
        })
    ], KoreksiAbsenBawahanPageModule);
    return KoreksiAbsenBawahanPageModule;
}());

//# sourceMappingURL=koreksi-absen-bawahan.module.js.map

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

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KoreksiAbsenBawahanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(26);
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
 * Generated class for the KoreksiAbsenBawahanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KoreksiAbsenBawahanPage = /** @class */ (function () {
    function KoreksiAbsenBawahanPage(navCtrl, navParams, loadingCtrl, alertCtrl, soapService, storage, datepipe, actionSheetCtrl, modalCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.soapService = soapService;
        this.storage = storage;
        this.datepipe = datepipe;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoading = true;
        this.dataBawahanList = [];
        this.dataKoreksiList = [];
        this.tahunList = [];
        var date = new Date();
        this.currentYear = date.getFullYear();
        this.currentMonth = date.getMonth();
        this.tahun = this.currentYear;
        this.bulan = this.currentMonth + 1;
        for (var i = 0; i < 10; i++) {
            this.tahunList.push(this.currentYear - i);
        }
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.getDataBawahan((_this.currentMonth + 1), _this.tahun);
        });
    }
    KoreksiAbsenBawahanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KoreksiAbsenBawahanPage');
    };
    KoreksiAbsenBawahanPage.prototype.getDataBawahan = function (bln, thn) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        loading.present();
        var m = bln;
        this.soapService.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_absen_bawahan', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["d" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_pass */],
                nipp: this.userdataTPK['data']['NIPP'],
                idjabatan: this.userdataTPK['data']['IDJABATAN'],
                bulan: m < 10 ? '0' + m : m,
                tahun: thn
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                _this.dataKoreksiList = [];
                _this.dataKoreksiList = responData['data']['LIST_OFFICER'];
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            loading.dismiss();
            _this.isLoading = false;
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            loading.dismiss();
            _this.isLoading = false;
        });
    };
    KoreksiAbsenBawahanPage.prototype.convertMonths = function () {
        switch (this.bulan) {
            case '1':
                return "Januari";
            case '2':
                return "Februari";
            case '3':
                return "Maret";
            case '4':
                return "April";
            case '5':
                return "Mei";
            case '6':
                return "Juni";
            case '7':
                return "Juli";
            case '8':
                return "Agustus";
            case '9':
                return "September";
            case '10':
                return "Oktober";
            case '11':
                return "November";
            case '12':
                return "Desember";
            default:
                return "false";
        }
    };
    KoreksiAbsenBawahanPage.prototype.selectVal = function () {
        this.dataKoreksiList = [];
        if (this.dataBawahanList[this.index]['DATA KOREKSI'].length > 0) {
            for (var i = 0; i < this.dataBawahanList[this.index]['DATA KOREKSI'].length; i++) {
                this.dataKoreksiList.push(this.dataBawahanList[this.index]['DATA KOREKSI'][i]);
            }
        }
    };
    KoreksiAbsenBawahanPage.prototype.showOption = function (data) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Pilih Proses',
            buttons: [
                {
                    text: 'Approve',
                    role: 'koreksiDatang',
                    handler: function () {
                        var modal = _this.modalCtrl.create("ApproveKoreksiAbsenPage", {
                            dataKoreksi: data,
                            status: '1',
                            is_tno: data['IS_TNO']
                        }, {
                            enableBackdropDismiss: true,
                            showBackdrop: true,
                            cssClass: 'my-modal2'
                        });
                        modal.present();
                        modal.onDidDismiss(function (data) {
                            _this.getDataBawahan(_this.bulan, _this.tahun);
                        });
                    }
                },
                {
                    text: 'Decline',
                    handler: function () {
                        var modal = _this.modalCtrl.create("ApproveKoreksiAbsenPage", {
                            dataKoreksi: data,
                            status: '0',
                            is_tno: data['IS_TNO']
                        }, {
                            enableBackdropDismiss: true,
                            showBackdrop: true,
                            cssClass: 'my-modal2'
                        });
                        modal.present();
                        modal.onDidDismiss(function (data) {
                            _this.getDataBawahan(_this.bulan, _this.tahun);
                        });
                    }
                },
                {
                    text: 'Tutup',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    KoreksiAbsenBawahanPage.prototype.searchDataKoreksi = function () {
        this.getDataBawahan(this.bulan, this.tahun);
    };
    KoreksiAbsenBawahanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-koreksi-absen-bawahan',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"D:\Project\pos-ppi\src\pages\koreksi-absen-bawahan\koreksi-absen-bawahan.html"*/'<!--\n\n  Generated template for the CutiListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <span ion-text color="light" class="fw500">Koreksi Absen Bawahan</span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div class="divs">\n\n        <ion-item no-lines style="padding-left:8px !important">\n\n            <ion-select [(ngModel)]="bulan" placeholder="Pilih Bulan">\n\n                <!-- <ion-option *ngFor="let m of bulanList" value="{{m[\'bulan\']}}_{{m[\'tahun\']}}">{{ convertMonths2(m[\'bulan\']) }} {{m[\'tahun\']}}</ion-option>                    </ion-select> -->\n\n                <ion-option value="1">Januari</ion-option>\n\n                <ion-option value="2">Februari</ion-option>\n\n                <ion-option value="3">Maret</ion-option>\n\n                <ion-option value="4">April</ion-option>\n\n                <ion-option value="5">Mei</ion-option>\n\n                <ion-option value="6">Juni</ion-option>\n\n                <ion-option value="7">Juli</ion-option>\n\n                <ion-option value="8">Agustus</ion-option>\n\n                <ion-option value="9">September</ion-option>\n\n                <ion-option value="10">Oktober</ion-option>\n\n                <ion-option value="11">November</ion-option>\n\n                <ion-option value="12">Desember</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item no-lines style="padding-left:8px !important">\n\n            <ion-select [(ngModel)]="tahun" placeholder="Pilih Tahun">\n\n                <ion-option *ngFor="let tahun of tahunList" value="{{tahun}}">{{tahun}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <button ion-button block icon-start color="primary" class="button" margin-top (click)="searchDataKoreksi()"\n\n            [disabled]="(bulan == null || tahun == null) ? true : false">\n\n            <ion-icon name="md-search"></ion-icon>\n\n            Cari\n\n        </button>\n\n    </div>\n\n\n\n    <div *ngIf="!isLoading">\n\n        <ion-grid fixed no-padding *ngIf="dataKoreksiList.length == 0" fixed>\n\n            <ion-row>\n\n                <ion-col col-12>\n\n\n\n                    <ion-card class="primary-bg">\n\n                        <ion-card-content>\n\n                            <p text-center class="text-white">Tidak ada data koreksi</p>\n\n                        </ion-card-content>\n\n                    </ion-card>\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n        <div *ngIf="dataKoreksiList.length > 0">\n\n            <ion-card *ngFor="let dataKoreksi of dataKoreksiList" (click)="showOption(dataKoreksi)">\n\n                <ion-item tapplable>\n\n                    <span ion-text text-wrap class="font2 bold" color="dark">{{ dataKoreksi[\'NAMA\'] }} | </span>\n\n                    <span ion-text text-wrap class="font2" color="danger">Tanggal {{dataKoreksi[\'TANGGAL\']}}\n\n                    </span> <br>\n\n\n\n                    <div style="display: table;width:100%;">\n\n                        <div style="display: table-cell;">\n\n                            <span ion-text text-wrap class="font" style="color:#959595">Datang :</span>\n\n                            <span ion-text text-wrap class="font2"\n\n                                *ngIf="dataKoreksi[\'JAM MASUK\'] == \'\' || dataKoreksi[\'JAM MASUK\'] == null"> -\n\n                            </span>\n\n                            <span ion-text text-wrap class="font2"\n\n                                *ngIf="dataKoreksi[\'JAM MASUK\'] != \'\' || dataKoreksi[\'JAM MASUK\'] != null">\n\n                                {{ dataKoreksi[\'JAM MASUK\'] }} </span>\n\n                        </div>\n\n\n\n                        <div style="display: table-cell;text-align: right;">\n\n                            <span ion-text text-wrap class="font" color="primary"\n\n                                *ngIf="dataKoreksi[\'STATUS KOREKSI DATANG\'] == \'POSTED\'">\n\n                                {{ dataKoreksi[\'STATUS KOREKSI DATANG\'] }}\n\n                            </span>\n\n                            <span ion-text text-wrap class="font" color="secondary"\n\n                                *ngIf="dataKoreksi[\'STATUS KOREKSI DATANG\'] == \'APPROVED\'">\n\n                                {{ dataKoreksi[\'STATUS KOREKSI DATANG\'] }}</span>\n\n                        </div>\n\n                    </div>\n\n\n\n                    <span ion-text text-wrap class="font" style="color:#959595">Ket. koreksi datang :</span>\n\n                    <br>\n\n                    <span ion-text text-wrap class="font2"\n\n                        *ngIf="dataKoreksi[\'KETERANGAN KOREKSI DATANG\'] == \'\' || dataKoreksi[\'KETERANGAN KOREKSI DATANG\'] == null">\n\n                        -\n\n                    </span>\n\n                    <span ion-text text-wrap class="font2">{{ dataKoreksi[\'KETERANGAN KOREKSI DATANG\'] }}</span>\n\n\n\n                    <br><br>\n\n\n\n                    <div style="display: table;width:100%;">\n\n                        <div style="display: table-cell;">\n\n                            <span ion-text text-wrap class="font" style="color:#959595">Pulang :</span>\n\n                            <span ion-text text-wrap class="font2"\n\n                                *ngIf="dataKoreksi[\'JAM PULANG\'] == \'\' || dataKoreksi[\'JAM PULANG\'] == null"> -\n\n                            </span>\n\n                            <span ion-text text-wrap class="font2"\n\n                                *ngIf="dataKoreksi[\'JAM PULANG\'] != \'\' || dataKoreksi[\'JAM PULANG\'] != null">{{ dataKoreksi[\'JAM PULANG\'] }}</span>\n\n                        </div>\n\n\n\n                        <div style="display: table-cell;text-align: right;">\n\n                            <span ion-text text-wrap class="font" color="primary"\n\n                                *ngIf="dataKoreksi[\'STATUS KOREKSI PULANG\'] == \'POSTED\'">\n\n                                {{ dataKoreksi[\'STATUS KOREKSI PULANG\'] }}\n\n                            </span>\n\n                            <span ion-text text-wrap class="font" color="secondary"\n\n                                *ngIf="dataKoreksi[\'STATUS KOREKSI PULANG\'] == \'APPROVED\'">\n\n                                {{ dataKoreksi[\'STATUS KOREKSI PULANG\'] }}</span>\n\n                        </div>\n\n                    </div>\n\n\n\n                    <span ion-text text-wrap class="font" style="color:#959595">Ket. koreksi Pulang :</span>\n\n                    <br>\n\n                    <span ion-text text-wrap class="font2"\n\n                        *ngIf="dataKoreksi[\'KETERANGAN KOREKSI PULANG\'] == \'\' || dataKoreksi[\'KETERANGAN KOREKSI PULANG\'] == null">\n\n                        -\n\n                    </span>\n\n                    <span ion-text text-wrap class="font2">{{ dataKoreksi[\'KETERANGAN KOREKSI PULANG\'] }}</span>\n\n                </ion-item>\n\n            </ion-card>\n\n        </div>\n\n\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Project\pos-ppi\src\pages\koreksi-absen-bawahan\koreksi-absen-bawahan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], KoreksiAbsenBawahanPage);
    return KoreksiAbsenBawahanPage;
}());

//# sourceMappingURL=koreksi-absen-bawahan.js.map

/***/ })

});
//# sourceMappingURL=17.js.map