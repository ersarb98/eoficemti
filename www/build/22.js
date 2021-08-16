webpackJsonp([22],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home3PageModule", function() { return Home3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home3__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Home3PageModule = /** @class */ (function () {
    function Home3PageModule() {
    }
    Home3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home3__["a" /* Home3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home3__["a" /* Home3Page */]),
            ],
        })
    ], Home3PageModule);
    return Home3PageModule;
}());

//# sourceMappingURL=home3.module.js.map

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

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soap_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(201);
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
 * Generated class for the Home3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Home3Page = /** @class */ (function () {
    function Home3Page(navCtrl, navParams, alertCtrl, app, storage, loadingCtrl, soapService, toastCtrl, device, inAppBrowser, oneSignal, modalCtrl, http, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.soapService = soapService;
        this.toastCtrl = toastCtrl;
        this.device = device;
        this.inAppBrowser = inAppBrowser;
        this.oneSignal = oneSignal;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.platform = platform;
        this.isLoading = true;
        this.agendaList = [];
        this.isSkipUpdate = false;
        this.isLoadingHadirkoe = true;
    }
    Home3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Home3Page');
    };
    Home3Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('userdataTPK').then(function (val) {
            // console.log(val);
            _this.userdataTPK = val;
            _this.getBadges();
            _this.getBadgesP2b();
            _this.getBadgesPrpo();
            _this.getValidasi();
            _this.newSession('first', '');
            _this.getData('first', '');
            _this.cekVersi();
        });
    };
    Home3Page.prototype.newSession = function (type, functionName) {
        // let loading = this.loadingCtrl.create({
        //   spinner: 'dots',
        //   content: "Mohon Tunggu...",
        //   cssClass: 'transparent',
        //   dismissOnPageChange: true
        // });
        var _this = this;
        // if (type == 'refresh') {
        //   loading.present();
        // }
        // this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_get_user_data', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["d" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["b" /* api_pass */],
                username: this.userdataTPK['data']['NIPP'],
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                if (responData['data']['login_status'] == '404 Not Found') {
                    // console.log(responData['data']['login_status']);
                }
                else if (responData['data'] == undefined) {
                    // console.log(responData['data']);
                }
                else if (responData['data']['login_status'] == 'AP NOT ALLOWED') {
                    // console.log(responData['data']['login_status']);
                }
                else {
                    _this.userdataTPK = responData;
                    _this.storage.set('userdataTPK', responData).then(function () {
                        //this.getData(type, functionName, loading);
                    });
                }
            }
            else {
                // console.log("error here");
                //loading.dismiss();
                // this.isLoading = false;
            }
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            if (type == 'refresh') {
                functionName.complete();
                // loading.dismiss();
            }
            // this.isLoading = false;
        });
    };
    Home3Page.prototype.getData = function (type, functionName) {
        var _this = this;
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_home', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["d" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["b" /* api_pass */],
                iduser: this.userdataTPK.data.IDUSER,
                idjabatan: this.userdataTPK.data.IDJABATAN,
                nipp: this.userdataTPK.data.NIPP,
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.agendaList = [];
                for (var i = 0; i < responData['data']['AGENDA_HARI_INI'].length; i++) {
                    _this.agendaList.push(responData['data']['AGENDA_HARI_INI'][i]);
                }
                if (type == 'refresh') {
                    functionName.complete();
                    // loading.dismiss();
                }
                _this.isLoading = false;
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                if (type == 'refresh') {
                    functionName.complete();
                }
                _this.isLoading = false;
            }
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            if (type == 'refresh') {
                functionName.complete();
                // loading.dismiss();
            }
            _this.isLoading = false;
        });
    };
    Home3Page.prototype.getBadges = function () {
        var _this = this;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_countbadges', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["d" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["b" /* api_pass */],
                iduser: this.userdataTPK['data']['IDUSER'],
                idjabatan: this.userdataTPK['data']['IDJABATAN'],
                nipp: this.userdataTPK['data']['NIPP']
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.badgesList = responData['data'];
                console.log(_this.badgesList);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Gagal Mendapatkan Notifikasi, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Gagal Mendapatkan Notifikasi, Periksa Koneksi Internet Anda.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    Home3Page.prototype.getBadgesP2b = function () {
        // this.soapService
        //   .post(api_p2b_url, 'eoffice_countbadges', {
        //     fStream: JSON.stringify(
        //       {
        //         usernameEDI: api_user,
        //         passwordEDI: api_pass,
        //         iduser: this.userdataTPK['data']['IDUSER'],
        //         idjabatan: this.userdataTPK['data']['IDJABATAN'],
        //         nipp: this.userdataTPK['data']['NIPP']
        //       }
        //     )
        //   }).then(result => {
        //     var responData = JSON.parse(String(result));
        //     console.log(responData);
        //     if (responData['rcmsg'] == "SUCCESS") {
        //       this.badgesP2b = responData['data'];
        //       // console.log(this.badgesList);
        //     } else {
        //       let toast = this.toastCtrl.create({
        //         message: 'Gagal Mendapatkan Notifikasi, Coba Beberapa Saat Lagi.',
        //         duration: 3000,
        //         position: 'bottom'
        //       });
        //       toast.present();
        //     }
        //   })
        //   .catch(error => {
        //     let toast = this.toastCtrl.create({
        //       message: 'Gagal Mendapatkan Notifikasi, Periksa Koneksi Internet Anda.',
        //       duration: 3000,
        //       position: 'bottom'
        //     });
        //     toast.present();
        //   });
    };
    Home3Page.prototype.getBadgesPrpo = function () {
        // this.soapService
        //   .post(api_p2b_url, 'eoffice_countbadgestpk', {
        //     fStream: JSON.stringify(
        //       {
        //         usernameEDI: api_user,
        //         passwordEDI: api_pass,
        //         nipp: this.userdataTPK['data']['NIPP']
        //       }
        //     )
        //   }).then(result => {
        //     var responData = JSON.parse(String(result));
        //     if (responData['rcmsg'] == "SUCCESS") {
        //       this.badgesPrpoList = responData['data'];
        //       console.log(this.badgesPrpoList);
        //     } else {
        //     }
        //   })
        //   .catch(error => {
        //   });
    };
    Home3Page.prototype.doRefresh = function (refresher) {
        this.getBadges();
        this.getBadgesP2b();
        this.getBadgesPrpo();
        this.getValidasi();
        this.getData('refresh', refresher);
        this.newSession('refresh', refresher);
        this.cekVersi();
    };
    Home3Page.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: 'Apakah anda yakin ingin log out ?',
            cssClass: 'alert',
            buttons: [
                {
                    text: 'TIDAK',
                    role: 'cancel',
                    handler: function () {
                        // console.log('Cancel clicked');
                    }
                },
                {
                    text: 'YA',
                    handler: function () {
                        _this.app.getRootNav().setRoot('LoginPage').then(function () {
                            //this.events.unsubscribe('user:data',() => {});
                            _this.storage.clear();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    Home3Page.prototype.openPage = function (page) {
        this.navCtrl.push(page);
    };
    Home3Page.prototype.openPage2 = function (page, param) {
        this.navCtrl.push(page, {
            modul: param
        });
    };
    Home3Page.prototype.notEmpty = function (val) {
        if (typeof val != "undefined") {
            return true;
        }
        else {
            return false;
        }
    };
    Home3Page.prototype.parse = function (val) {
        var intValue = parseInt(val);
        if (intValue > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Home3Page.prototype.cekVersi = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.oneSignal.getIds().then(function (id) {
                console.log(id);
                _this.soapService.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_bypass_wso', {
                    fStream: JSON.stringify({
                        sc_type: 'check_version',
                        sc_code: "",
                        data: {
                            "platform": "android",
                            "version": "1.0.0",
                            "player_id": id.userId,
                            "nipp": _this.userdataTPK.data.NIPP,
                            "model": _this.device.model,
                            "uuid": _this.device.uuid
                        }
                    })
                }).then(function (result) {
                    var responData = JSON.parse(String(result));
                    console.log(responData);
                    if (responData['rcmsg'] == "SUCCESS") {
                        if ((responData['data']['POPUP'] == "1" || responData['data']['POPUP'] == "2" || responData['data']['POPUP'] == "3")) {
                            _this.showVersiPopup(responData['data']['POPUP'], responData['data']['POPUP_MESSAGE'], responData['data']['URL']);
                        }
                        else {
                        }
                    }
                    else {
                    }
                })
                    .catch(function (error) {
                    console.log(error);
                });
            });
        }
    };
    Home3Page.prototype.showVersiPopup = function (popupCode, popupMessage, url) {
        var _this = this;
        var myButton = [];
        if (popupCode == "1") {
            myButton = [
                {
                    text: 'LEWATI',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.isSkipUpdate = true;
                        // return false;
                    }
                },
                {
                    text: 'UPDATE',
                    handler: function () {
                        var options = {
                            zoom: 'no'
                        };
                        var browser = _this.inAppBrowser.create(url, '_system', options);
                        return false;
                    }
                }
            ];
        }
        else if (popupCode == "2") {
            myButton = [
                {
                    text: 'UPDATE',
                    handler: function () {
                        // this.market.open('ipc.imove');
                        var options = {
                            zoom: 'no'
                        };
                        var browser = _this.inAppBrowser.create(url, '_system', options);
                        return false;
                    }
                }
            ];
        }
        else if (popupCode == "3") {
            myButton = [
                {
                    text: 'OK',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ];
        }
        var alert = this.alertCtrl.create({
            subTitle: popupMessage,
            enableBackdropDismiss: false,
            cssClass: 'alert',
            buttons: myButton
        });
        alert.present();
    };
    Home3Page.prototype.showModal = function (myModal) {
        var modal = this.modalCtrl.create(myModal, {}, {
            enableBackdropDismiss: true,
            showBackdrop: true,
            cssClass: 'my-modal10'
        });
        modal.present();
    };
    Home3Page.prototype.getValidasi = function () {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_res */] + 'am3_check_shift.php', {
            usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["d" /* api_user */],
            passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["b" /* api_pass */],
            person_id: this.userdataTPK['data']['PERSON_ID'],
            nipp: this.userdataTPK['data']['NIPP'],
            id_user: this.userdataTPK['data']['IDUSER']
        }).subscribe(function (data) {
            console.log(data);
            //var responData = JSON.parse(data);
            _this.dataValidasi = data['data'];
            _this.isLoadingHadirkoe = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingHadirkoe = false;
        });
    };
    Home3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home3',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/home3/home3.html"*/'<!--\n  Generated template for the Home3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <img src="assets/imgs/ipc-tpk-logo.png" style="width:65px;height:auto; margin-left:10px; display:inline-block"\n      height="40px" />\n    <ion-title class="titleicon" style="display:inline-block">\n      <span ion-text><b>PPI Office System</b></span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="openPage(\'SettingPage\')">\n        <ion-icon style="font-size:2.5rem;" name="md-settings" color="color6"></ion-icon>\n      </button>\n      <button ion-button (click)="logout()">\n        <ion-icon style="font-size:2.5rem;" name="md-log-out" color="color6"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-navbar>\n    <img src="assets/imgs/ipc-tpk-logo.png" style="width:65px;height:auto; margin-left:10px; display:inline-block"\n      height="40px" />\n    <ion-title class="titleicon" style="display:inline-block">\n      <span ion-text><b>PPI Office System</b></span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="openPage(\'SettingPage\')">\n        <ion-icon style="font-size:2.5rem;" name="md-settings" color="color6"></ion-icon>\n      </button>\n      <button ion-button (click)="logout()">\n        <ion-icon style="font-size:2.5rem;" name="md-log-out" color="color6"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <div class="header-container" *ngIf="userdataTPK != null">\n    <div class="welcome-class">\n      <span ion-text text-wrap>Welcome,</span> <br>\n      <span *ngIf="userdataTPK != null" ion-text text-wrap> <b>{{ userdataTPK[\'data\'][\'NAMA\'] }}</b></span>\n    </div>\n    <!-- <div class="header-img"></div> -->\n\n    <ion-slides style="margin-top: 50px;" autoplay="5000" loop="true" speed="500">\n      <ion-slide class="my-slide">\n        <img src="assets/imgs/slide-1.png" class="my-slider-img">\n      </ion-slide>\n      <ion-slide class="my-slide">\n        <img src="assets/imgs/slide-2.png" class="my-slider-img">\n      </ion-slide>\n      <ion-slide class="my-slide">\n        <img src="assets/imgs/slide-3.png" class="my-slider-img">\n      </ion-slide>\n    </ion-slides>\n\n    <ion-card class="header-card" *ngIf="isLoadingHadirkoe == false && dataValidasi != null">\n      <div class="menu-container">\n        <div class="menu-content" (click)="openPage(\'InboxPage\')">\n          <div class="img-container color-1"><img src="assets/imgs/menu-icon/inbox-white.png"></div>\n          <span ion-text text-wrap>Surat Masuk</span>\n          <ion-badge class="my-badge" *ngIf="badgesList != null && parse(badgesList[\'JUMLAH_SURAT_ALL_BADGES\'])"\n            color="danger">{{badgesList[\'JUMLAH_SURAT_ALL_BADGES\']}}</ion-badge>\n        </div>\n\n        <div class="menu-content" (click)="openPage(\'OutboxPage\')">\n          <div class="img-container color-2"><img src="assets/imgs/menu-icon/outbox-white.png"></div>\n          <span ion-text text-wrap>Surat Keluar</span>\n        </div>\n\n        <!-- <div class="menu-content" *ngIf="userdataTPK[\'data\'][\'TNO\'] == true || dataValidasi[\'HADIRKOE\'] == false"\n          (click)="openPage(\'SppdListPage\')">\n          <div class="img-container color-3"><img src="assets/imgs/menu-icon/sppd-white.png"></div>\n          <span ion-text text-wrap>SPPD</span>\n        </div> -->\n        <div class="menu-content"\n          (click)="showModal(\'FingerprintModalPage\')">\n          <div class="img-container color-8"><img src="assets/flat-icon/hadirkoe.png"></div>\n          <span ion-text text-wrap>HadirKoe</span>\n        </div>\n      </div>\n    </ion-card>\n\n    <ion-card class="header-card" *ngIf="isLoadingHadirkoe == true && dataValidasi == null">\n      <div class="menu-container">\n        <div class="menu-content">\n          <div class="animate-skeleton-background load-3"></div>\n        </div>\n\n        <div class="menu-content">\n          <div class="animate-skeleton-background load-3"></div>\n        </div>\n\n        <div class="menu-content">\n          <div class="animate-skeleton-background load-3"></div>\n        </div>\n      </div>\n    </ion-card>\n  </div>\n\n  <!-- <div class="my-card-3">\n    <div class="my-card-3-content" style="border-right: 1px solid #e6e6e6;">\n      <span ion-text text-wrap color="danger"\n        *ngIf="badgesList != null"><b>{{ badgesList[\'JUMLAH_SURAT_BELUM_APPROVE\'] }} surat</b></span>\n      <span ion-text text-wrap color="danger" *ngIf="badgesList == null"><b>0 surat</b></span>\n      <br>\n      <span ion-text text-wrap class="font-mini" color="gray">Butuh Approval</span>\n    </div>\n    <div class="my-card-3-content">\n      <span ion-text text-wrap color="danger"><b>5 surat</b></span> <br>\n      <span ion-text text-wrap class="font-mini" color="gray">Belum Didisposisi</span>\n    </div>\n  </div> -->\n  <br>\n  <div *ngIf="userdataTPK != null">\n    <div *ngIf="userdataTPK[\'data\'][\'TNO\'] == false">\n      <div style="margin-top: 175px;" class="menu-container">\n        <div class="menu-content-2" (click)="openPage(\'AbsenListPage\')">\n          <div class="img-container-2"><img src="assets/imgs/menu-icon/absensi.png"></div>\n          <span ion-text text-wrap>Absensi</span>\n          <ion-badge class="my-badge" *ngIf="badgesList != null && parse(badgesList[\'JUMLAH_ABSEN_BELUM_KOREKSI\'])"\n            color="danger">{{ badgesList[\'JUMLAH_ABSEN_BELUM_KOREKSI\'] }}\n          </ion-badge>\n        </div>\n\n        <div class="menu-content-2" (click)="openPage(\'CutiListPage\')">\n          <div class="img-container-2"><img src="assets/imgs/menu-icon/cuti.png"></div>\n          <span ion-text text-wrap>Cuti/Izin</span>\n        </div>\n\n        <div class="menu-content-2" (click)="openPage(\'SppdListPage\')">\n          <div class="img-container-2"><img src="assets/imgs/menu-icon/sppd-2.png"></div>\n          <span ion-text text-wrap>SPPD</span>\n        </div>\n\n        <div class="menu-content-2" (click)="openPage(\'\')">\n          <div class="img-container-2"><img src="assets/imgs/menu-icon/survey.png"></div>\n          <span ion-text text-wrap>Arsip Personal</span>\n        </div>\n      </div>\n\n      <div *ngIf="dataValidasi != null">\n        <div style="margin-top: 20px;" class="menu-container">\n          <div class="menu-content-2" (click)="openPage(\'SppdListPage\')">\n            <div class="img-container-2"><img src="assets/imgs/menu-icon/sppd-2.png"></div>\n            <span ion-text text-wrap>E-CV</span>\n          </div>\n\n          <div class="menu-content-2">\n          </div>\n\n          <div class="menu-content-2">\n          </div>\n\n          <div class="menu-content-2">\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n  <br>\n\n  <div class="divider"></div>\n\n\n\n  <div class="agenda-title-container">\n    <span ion-text text-wrap style="font-size:1.5rem;">\n      <b>AGENDA</b>\n    </span> <br>\n    <span ion-text text-wrap class="font-mini" color="gray">\n      Daftar agenda anda saat ini\n    </span>\n  </div>\n\n  <ion-card *ngIf=\'isLoading == true && agendaList.length == 0\' class="my-card">\n    <ion-item>\n      <div class="animate-skeleton-background load-2"></div>\n      <div class="animate-skeleton-background load-1"></div>\n      <div style="\n              width:100%;\n              border-bottom: 1px solid lightgray;\n              padding: 5px;\n              margin-bottom:5px;">\n      </div>\n      <div class="animate-skeleton-background load-2"> </div>\n    </ion-item>\n  </ion-card>\n\n  <ion-card class="my-card" *ngIf="isLoading == false && agendaList.length == 0">\n    <ion-item>\n      <span ion-text text-wrap class="font-small" style="text-align:center;">\n        Tidak ada agenda hari ini.\n      </span>\n    </ion-item>\n  </ion-card>\n\n  <ion-slides pager="true" paginationType="bullets" *ngIf=\'agendaList.length > 0\'>\n    <ion-slide *ngFor="let agenda of agendaList">\n      <ion-card class="my-card">\n        <ion-item>\n          <span ion-text text-wrap class="font-mini">\n            {{ agenda[\'Tanggal_Mulai\'] }} {{ agenda[\'Start_Time\'] }} - {{ agenda[\'End_Time\'] }}\n          </span> <br>\n          <span ion-text text-wrap class="font-mini">\n            {{ agenda[\'Nama_Tempat\'] }}\n          </span>\n          <div style="\n                      width:100%;\n                      border-bottom: 1px solid white;\n                      padding: 5px;\n                      margin-bottom:5px;">\n          </div>\n          <span ion-text text-wrap class="font-small">\n            <b>{{ agenda[\'Acara\'] }}</b>\n          </span>\n        </ion-item>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n  <br>\n  <br>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/home3/home3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], Home3Page);
    return Home3Page;
}());

//# sourceMappingURL=home3.js.map

/***/ })

});
//# sourceMappingURL=22.js.map