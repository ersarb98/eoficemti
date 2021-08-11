webpackJsonp([22],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxDetailPageModule", function() { return InboxDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inbox_detail__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InboxDetailPageModule = /** @class */ (function () {
    function InboxDetailPageModule() {
    }
    InboxDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inbox_detail__["a" /* InboxDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inbox_detail__["a" /* InboxDetailPage */]),
            ],
        })
    ], InboxDetailPageModule);
    return InboxDetailPageModule;
}());

//# sourceMappingURL=inbox-detail.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__soapclient_js__ = __webpack_require__(344);
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

/***/ 344:
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

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(102);
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
 * Generated class for the InboxDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InboxDetailPage = /** @class */ (function () {
    function InboxDetailPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, inAppBrowser, oneSignal, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.inAppBrowser = inAppBrowser;
        this.oneSignal = oneSignal;
        this.toastCtrl = toastCtrl;
        this.isLoading = true;
        this.showAllPenerima = false;
        this.showAllPenerimaJabatan = false;
        this.showAllTembusanJabatan = false;
        this.showAllPenerimaPekerja = false;
        this.showAllTembusanPekerja = false;
        this.showAllPenerimaNonPekerja = false;
        this.showAllTembusanNonPekerja = false;
        this.showDetailPesan = false;
        this.attachmentList = [];
        this.penerima = [];
        this.databawahan = [];
        this.disposisiJabatanList = [];
        this.disposisiPekerjaList = [];
        this.lastCatatan = "";
        this.keterangan = "";
        this.from_modul = '';
        this.pesertaSppdList = [];
        this.attrScanSppd = [];
        oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_4__config__["f" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_4__config__["h" /* sender_id */]);
        oneSignal.endInit();
    }
    InboxDetailPage.prototype.show = function () {
        this.showDetailPesan = !this.showDetailPesan;
    };
    InboxDetailPage.prototype.ionViewWillLoad = function () {
    };
    InboxDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.isLoading = true;
        this.messageData = this.navParams.get('messageData');
        // console.log(this.messageData);
        this.from_modul = this.navParams.get('from_modul');
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.nipp = _this.userdataTPK['data']['NIPP'];
            _this.getDetail();
        });
    };
    InboxDetailPage.prototype.getDetail = function () {
        // let loading = this.loadingCtrl.create({
        //   spinner: 'dots',
        //   content: "Mohon Tunggu...",
        //   cssClass: 'transparent',
        //   dismissOnPageChange:true
        // });
        // loading.present();
        var _this = this;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_viewmail', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                nipp: this.nipp,
                linkSurat: this.messageData['Location'],
                from_modul: (this.from_modul != null || this.from_modul != '') ? this.from_modul : 'inbox'
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.messageDetail = responData['data'];
                if (_this.messageDetail['Jenis Surat'] == 'Surat Perintah') {
                    _this.dasarSuratPerintah = _this.messageDetail['Isi Surat'].split('xxdasaxx_').pop().split('_xxperintxx_')[0] + '<br>';
                    _this.dasarSuratPerintah = _this.dasarSuratPerintah.replace(/_/gi, "<br><br>");
                    _this.isiPerintah = _this.messageDetail['Isi Surat'].split('_xxperintxx_')[1];
                    _this.isiPerintah = _this.isiPerintah.replace(/_/gi, "<br><br>");
                }
                if (_this.messageDetail['Kode Jenis Surat'] == 'nd_sppd') {
                    _this.getPesertaSPPD(_this.messageDetail['ID Surat']);
                }
                else {
                    _this.newSession();
                }
                _this.linkSurat = _this.messageDetail['Link Surat Asli'];
                _this.attachmentList = _this.messageDetail['Attachment'];
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
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
            _this.isLoading = false;
        });
    };
    InboxDetailPage.prototype.getPesertaSPPD = function (idSurat) {
        var _this = this;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_sppd_peserta', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                id_surat: atob(idSurat),
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (responData['data']['PESERTA_JABATAN'].length > 0) {
                    for (var i = 0; i < responData['data']['PESERTA_JABATAN'].length; i++) {
                        _this.pesertaSppdList.push(responData['data']['PESERTA_JABATAN'][i]);
                    }
                }
                if (responData['data']['PESERTA_PEGAWAI'].length > 0) {
                    for (var i = 0; i < responData['data']['PESERTA_PEGAWAI'].length; i++) {
                        _this.pesertaSppdList.push(responData['data']['PESERTA_PEGAWAI'][i]);
                    }
                }
                if (responData['data']['PESERTA_NON_PEGAWAI'].length > 0) {
                    for (var i = 0; i < responData['data']['PESERTA_NON_PEGAWAI'].length; i++) {
                        _this.pesertaSppdList.push(responData['data']['PESERTA_NON_PEGAWAI'][i]);
                    }
                }
                // if (responData['data']['SCAN_SPPD'].length > 0) {
                //   for (var i = 0; i < responData['data']['SCAN_SPPD'].length; i++) {
                //     this.attrScanSppd.push( responData['data']['SCAN_SPPD'][i]);
                //   }
                // }
                _this.newSession();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                _this.isLoading = false;
            }
        })
            .catch(function (error) {
            // console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.isLoading = false;
        });
    };
    InboxDetailPage.prototype.newSession = function () {
        var _this = this;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_get_user_data', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                username: this.nipp,
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                if (responData['data']['login_status'] == '404 Not Found') {
                }
                else if (responData['data'] == undefined) {
                }
                else if (responData['data']['login_status'] == 'AP NOT ALLOWED') {
                }
                else {
                    responData['data']['FL_FIRST_IMOVE'] = false;
                    _this.userdataTPK = responData;
                    if (_this.isEmptyObject(_this.userdataTPK['data']['LISTOFFICER'][0]) && _this.isEmptyObject(_this.userdataTPK['data']['DATA_BAWAHAN'][0]) && _this.isEmptyObject(_this.userdataTPK['data']['DATA_BAWAHAN_TNO'][0])) {
                        _this.isAtasan = false;
                    }
                    else {
                        _this.isAtasan = true;
                    }
                    _this.getDataBawahan();
                    _this.getPenerima();
                    _this.storage.set('userdataTPK', responData).then(function () {
                    });
                }
            }
            else {
            }
            _this.isLoading = false;
        })
            .catch(function (error) {
            _this.isLoading = false;
        });
    };
    InboxDetailPage.prototype.showMore = function (type) {
        //this.showAllPenerima = !this.showAllPenerima;
        if (type == 1) {
            this.showAllPenerimaJabatan = !this.showAllPenerimaJabatan;
        }
        else if (type == 2) {
            this.showAllTembusanJabatan = !this.showAllTembusanJabatan;
        }
        else if (type == 3) {
            this.showAllPenerimaPekerja = !this.showAllPenerimaPekerja;
        }
        else if (type == 4) {
            this.showAllTembusanPekerja = !this.showAllTembusanPekerja;
        }
        else if (type == 5) {
            this.showAllPenerimaNonPekerja = !this.showAllPenerimaNonPekerja;
        }
        else if (type == 6) {
            this.showAllTembusanNonPekerja = !this.showAllTembusanNonPekerja;
        }
        else {
        }
    };
    InboxDetailPage.prototype.getDataBawahan = function () {
        // if (!this.isEmptyObject(this.userdataTPK['data']['LISTOFFICER'][0])) {
        //   for (var i = 0; i < this.userdataTPK['data']['LISTOFFICER'][0].length; i++) {
        //     this.databawahan.push(this.userdataTPK['data']['LISTOFFICER'][0][i]);
        //   }
        // }
        if (!this.isEmptyObject(this.userdataTPK['data']['DATA_BAWAHAN'][0])) {
            for (var i = 0; i < this.userdataTPK['data']['DATA_BAWAHAN'].length; i++) {
                this.databawahan.push(this.userdataTPK['data']['DATA_BAWAHAN'][i]);
            }
        }
        if (!this.isEmptyObject(this.userdataTPK['data']['DATA_BAWAHAN_TNO'][0])) {
            for (var i = 0; i < this.userdataTPK['data']['DATA_BAWAHAN'].length; i++) {
                this.databawahan.push(this.userdataTPK['data']['DATA_BAWAHAN'][i]);
            }
        }
    };
    InboxDetailPage.prototype.getPenerima = function () {
        if (this.messageDetail['Penerima Pekerja'] != null) {
            for (var i = 0; i < this.messageDetail['Penerima Pekerja'].length; i++) {
                this.penerima.push(this.messageDetail['Penerima Pekerja'][i]);
            }
        }
        if (this.messageDetail['Penerima Jabatan'] != null) {
            for (var i = 0; i < this.messageDetail['Penerima Jabatan'].length; i++) {
                this.penerima.push(this.messageDetail['Penerima Jabatan'][i]);
            }
        }
        if (this.messageDetail['Penerima Non Pekerja'] != null) {
            for (var i = 0; i < this.messageDetail['Penerima Non Pekerja'].length; i++) {
                this.penerima.push(this.messageDetail['Penerima Non Pekerja'][i]);
            }
        }
        if (this.messageDetail['Tembusan Pekerja'] != null) {
            for (var i = 0; i < this.messageDetail['Tembusan Pekerja'].length; i++) {
                this.penerima.push(this.messageDetail['Tembusan Pekerja'][i]);
            }
        }
        if (this.messageDetail['Tembusan Jabatan'] != null) {
            for (var i = 0; i < this.messageDetail['Penerima Jabatan'].length; i++) {
                this.penerima.push(this.messageDetail['Penerima Jabatan'][i]);
            }
        }
        if (this.messageDetail['Tembusan Non Pekerja'] != null) {
            for (var i = 0; i < this.messageDetail['Tembusan Non Pekerja'].length; i++) {
                this.penerima.push(this.messageDetail['Tembusan Non Pekerja'][i]);
            }
        }
    };
    InboxDetailPage.prototype.showDisposisi = function (tipeDisposisi) {
        var _this = this;
        var data;
        if (tipeDisposisi == 'jabatan') {
            var modal = this.modalCtrl.create("DisposisiPage", {
                kepadaList: this.databawahan,
                lastCatatan: this.lastCatatan,
                tipeDisposisi: tipeDisposisi
            }, {
                enableBackdropDismiss: true,
                showBackdrop: true,
            });
            modal.present();
            modal.onDidDismiss(function (data) {
                if (data != null) {
                    if (data['disposisiJabatanList'].length > 0) {
                        for (var i = 0; i < data['disposisiJabatanList'].length; i++) {
                            _this.disposisiJabatanList.push(data['disposisiJabatanList'][i]);
                        }
                    }
                    _this.lastCatatan = data['lastCatatan'];
                }
            });
        }
        else if (tipeDisposisi == 'pekerja') {
            var modal = this.modalCtrl.create("DisposisiPage", {
                kepadaList: this.userdataTPK['data']['DATA_BAWAHAN'],
                lastCatatan: this.lastCatatan,
                tipeDisposisi: tipeDisposisi
            }, {
                enableBackdropDismiss: true,
                showBackdrop: true,
            });
            modal.present();
            modal.onDidDismiss(function (data) {
                if (data != null) {
                    if (data['disposisiPekerjaList'].length > 0) {
                        for (var i = 0; i < data['disposisiPekerjaList'].length; i++) {
                            _this.disposisiPekerjaList.push(data['disposisiPekerjaList'][i]);
                        }
                    }
                    _this.lastCatatan = data['lastCatatan'];
                }
            });
        }
        else {
        }
    };
    InboxDetailPage.prototype.delete = function (disposisidata, tipeDisposisi) {
        if (tipeDisposisi == 'jabatan') {
            var index = this.disposisiJabatanList.indexOf(disposisidata);
            if (index !== -1) {
                this.disposisiJabatanList.splice(index, 1);
            }
        }
        else if (tipeDisposisi == 'pekerja') {
            var index = this.disposisiPekerjaList.indexOf(disposisidata);
            if (index !== -1) {
                this.disposisiPekerjaList.splice(index, 1);
            }
        }
    };
    InboxDetailPage.prototype.sendDisposisi = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: 'Anda yakin ingin disposisi surat ?',
            cssClass: 'alert',
            buttons: [
                {
                    text: 'TIDAK',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'YA',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            spinner: 'dots',
                            content: "Mohon Tunggu...",
                            cssClass: 'transparent',
                            dismissOnPageChange: true
                        });
                        loading.present();
                        _this.isLoading = true;
                        _this.soapService
                            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_disposisi', {
                            fStream: JSON.stringify({
                                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                                nipp: _this.nipp,
                                linkSurat: _this.messageData['Location'],
                                disposisi_jabatan: _this.disposisiJabatanList,
                                disposisi_pekerja: _this.disposisiPekerjaList
                            })
                        }).then(function (result) {
                            var responData = JSON.parse(String(result));
                            // console.log(responData);
                            if (responData['rcmsg'] == "SUCCESS") {
                                var toast = _this.toastCtrl.create({
                                    message: 'Disposisi Berhasil',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present().then(function () {
                                    _this.pushNotif();
                                    _this.navCtrl.pop();
                                });
                            }
                            else {
                                var alert_1 = _this.alertCtrl.create({
                                    title: '',
                                    subTitle: 'Gagal Melakukan Disposisi, Silahkan Coba Beberapa Saat Lagi.',
                                    buttons: ['OK']
                                });
                                alert_1.present();
                            }
                            loading.dismiss();
                            _this.isLoading = false;
                        })
                            .catch(function (error) {
                            var alert = _this.alertCtrl.create({
                                title: '',
                                subTitle: 'Gagal Melakukan Disposisi, Periksa Koneksi Internet Anda.',
                                buttons: ['OK']
                            });
                            alert.present();
                            loading.dismiss();
                            _this.isLoading = false;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    InboxDetailPage.prototype.pushNotif = function () {
        var _this = this;
        this.oneSignal.getIds().then(function (id) {
            var userList = [];
            if (_this.disposisiJabatanList.length > 0) {
                for (var i = 0; i < _this.disposisiJabatanList.length; i++) {
                    userList.push(_this.disposisiJabatanList[i]['id_user']);
                }
            }
            if (_this.disposisiPekerjaList.length > 0) {
                for (var i = 0; i < _this.disposisiPekerjaList.length; i++) {
                    userList.push(_this.disposisiPekerjaList[i]['id_user']);
                }
            }
            _this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_notif_imove', {
                fStream: JSON.stringify({
                    usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                    passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                    id_user: userList,
                    data: {
                        // "res": "InboxPage"
                        res: "InboxDetailPage",
                        nipp: _this.nipp,
                        //userdataTPK : this.userdataTPK,
                        messageData: _this.messageData
                    },
                    heading: {
                        "en": "Surat Masuk"
                    },
                    content: {
                        "en": "Anda memiliki disposisi baru dari " + _this.userdataTPK['data']['NAMA'] + ". \nPerihal : " + _this.messageDetail['Perihal']
                    },
                })
            }).then(function (result) {
                var hasil = JSON.parse(String(result));
            }).catch(function (error) {
                _this.navCtrl.pop();
            });
        });
    };
    InboxDetailPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    InboxDetailPage.prototype.downloadInbox = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mengunduh surat...",
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        loading.present();
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'find_file', {
            fStream: JSON.stringify({
                "usernameEDI": __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                "passwordEDI": __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                "fileName": data,
                "id_surat": this.messageDetail['ID Surat'],
                "jenis_surat": this.messageDetail['Kode Jenis Surat'],
                "no_surat": this.messageData['No_Surat']
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            loading.dismiss();
            var options = {
                zoom: 'no'
            };
            var browser = _this.inAppBrowser.create(responData['data']['LINK'], '_system', options);
        })
            .catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: '',
                subTitle: 'Gagal download surat, silahkan coba lagi',
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    InboxDetailPage.prototype.downloadAttach = function (data) {
        var options = {
            zoom: 'no'
        };
        var browser = this.inAppBrowser.create(data, '_system', options);
    };
    InboxDetailPage.prototype.subStrAttachment = function (data) {
        var str = data;
        var n = str.lastIndexOf('/');
        return str.substring(n + 1);
    };
    InboxDetailPage.prototype.doPeriksa = function (type) {
        var _this = this;
        if (this.keterangan == '') {
            var toast = this.toastCtrl.create({
                message: 'Komentar harus diisi.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            if (type == 'approve') {
                var alert_2 = this.alertCtrl.create({
                    subTitle: 'Anda yakin ingin approve surat ?',
                    cssClass: 'alert',
                    buttons: [
                        {
                            text: 'TIDAK',
                            role: 'cancel',
                            handler: function () {
                            }
                        },
                        {
                            text: 'YA',
                            handler: function () {
                                var loading = _this.loadingCtrl.create({
                                    spinner: 'dots',
                                    content: "Approve surat...",
                                    cssClass: 'transparent',
                                    dismissOnPageChange: true
                                });
                                loading.present();
                                _this.soapService
                                    .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_approve', {
                                    fStream: JSON.stringify({
                                        usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                                        passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                                        nipp: _this.nipp,
                                        iduser: _this.userdataTPK['data']['IDUSER'],
                                        nama: _this.userdataTPK['data']['NAMA'],
                                        id_surat: _this.messageDetail['ID Surat'],
                                        kode_jenis_surat: _this.messageDetail['Kode Jenis Surat'] != 'permohonan' && _this.messageDetail['Jenis Surat'] != null ? _this.messageDetail['Jenis Surat'].toLowerCase() : _this.messageDetail['Kode Jenis Surat'].toLowerCase(),
                                        komentar: _this.keterangan
                                    })
                                }).then(function (result) {
                                    var responData = JSON.parse(String(result));
                                    if (responData['rcmsg'] == "SUCCESS") {
                                        var toast = _this.toastCtrl.create({
                                            message: 'Approve berhasil !',
                                            duration: 3000,
                                            position: 'bottom'
                                        });
                                        toast.present().then(function () {
                                            _this.sendApprovalNotif('approve');
                                            _this.navCtrl.pop();
                                        });
                                    }
                                    else {
                                        var alert_3 = _this.alertCtrl.create({
                                            title: '',
                                            subTitle: 'Gagal Approve Surat, Silahkan Coba Beberapa Saat Lagi.',
                                            buttons: ['OK']
                                        });
                                        alert_3.present();
                                    }
                                    loading.dismiss();
                                })
                                    .catch(function (error) {
                                    var alert = _this.alertCtrl.create({
                                        title: '',
                                        subTitle: 'Gagal Approve Surat, Periksa Koneksi Internet Anda.',
                                        buttons: ['OK']
                                    });
                                    alert.present();
                                    loading.dismiss();
                                });
                            }
                        }
                    ]
                });
                alert_2.present();
            }
            else if (type == 'decline') {
                var alert_4 = this.alertCtrl.create({
                    subTitle: 'Anda yakin ingin decline surat ?',
                    cssClass: 'alert',
                    buttons: [
                        {
                            text: 'TIDAK',
                            role: 'cancel',
                            handler: function () {
                            }
                        },
                        {
                            text: 'YA',
                            handler: function () {
                                var loading = _this.loadingCtrl.create({
                                    spinner: 'dots',
                                    content: "Decline surat...",
                                    cssClass: 'transparent',
                                    dismissOnPageChange: true
                                });
                                loading.present();
                                _this.soapService
                                    .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_decline', {
                                    fStream: JSON.stringify({
                                        usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                                        passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                                        nipp: _this.nipp,
                                        iduser: _this.userdataTPK['data']['IDUSER'],
                                        nama: _this.userdataTPK['data']['NAMA'],
                                        id_surat: _this.messageDetail['ID Surat'],
                                        kode_jenis_surat: _this.messageDetail['Kode Jenis Surat'] != 'permohonan' ? _this.messageDetail['Jenis Surat'].toLowerCase() : _this.messageDetail['Kode Jenis Surat'].toLowerCase(),
                                        komentar: _this.keterangan
                                    })
                                }).then(function (result) {
                                    var responData = JSON.parse(String(result));
                                    if (responData['rcmsg'] == "SUCCESS") {
                                        var toast = _this.toastCtrl.create({
                                            message: 'Decline berhasil !',
                                            duration: 3000,
                                            position: 'bottom'
                                        });
                                        toast.present().then(function () {
                                            _this.sendApprovalNotif('decline');
                                            _this.navCtrl.pop();
                                        });
                                    }
                                    else {
                                        var alert_5 = _this.alertCtrl.create({
                                            title: '',
                                            subTitle: 'Gagal Decline Surat, Silahkan Coba Beberapa Saat Lagi.',
                                            buttons: ['OK']
                                        });
                                        alert_5.present();
                                    }
                                    loading.dismiss();
                                })
                                    .catch(function (error) {
                                    var alert = _this.alertCtrl.create({
                                        title: '',
                                        subTitle: 'Gagal Decline Surat, Periksa Koneksi Internet Anda.',
                                        buttons: ['OK']
                                    });
                                    alert.present();
                                    loading.dismiss();
                                });
                            }
                        }
                    ]
                });
                alert_4.present();
            }
            else if (type == 'kembalikan') {
                var alert_6 = this.alertCtrl.create({
                    subTitle: 'Anda yakin ingin kembalikan surat ?',
                    cssClass: 'alert',
                    buttons: [
                        {
                            text: 'TIDAK',
                            role: 'cancel',
                            handler: function () {
                            }
                        },
                        {
                            text: 'YA',
                            handler: function () {
                                var loading = _this.loadingCtrl.create({
                                    spinner: 'dots',
                                    content: "Kembalikan surat...",
                                    cssClass: 'transparent',
                                    dismissOnPageChange: true
                                });
                                loading.present();
                                _this.soapService
                                    .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_kembalikan', {
                                    fStream: JSON.stringify({
                                        usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                                        passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                                        id_surat: atob(_this.messageDetail['ID Surat']),
                                        keterangan: _this.keterangan
                                    })
                                }).then(function (result) {
                                    var responData = JSON.parse(String(result));
                                    if (responData['rcmsg'] == "SUCCESS") {
                                        var toast = _this.toastCtrl.create({
                                            message: 'Kembalikan berhasil !',
                                            duration: 3000,
                                            position: 'bottom'
                                        });
                                        toast.present().then(function () {
                                            _this.sendApprovalNotif('kembalikan');
                                            _this.navCtrl.pop();
                                        });
                                    }
                                    else {
                                        var alert_7 = _this.alertCtrl.create({
                                            title: '',
                                            subTitle: 'Gagal Kembalikan Surat, Silahkan Coba Beberapa Saat Lagi.',
                                            buttons: ['OK']
                                        });
                                        alert_7.present();
                                    }
                                    loading.dismiss();
                                })
                                    .catch(function (error) {
                                    var alert = _this.alertCtrl.create({
                                        title: '',
                                        subTitle: 'Gagal Decline Surat, Periksa Koneksi Internet Anda.',
                                        buttons: ['OK']
                                    });
                                    alert.present();
                                    loading.dismiss();
                                });
                            }
                        }
                    ]
                });
                alert_6.present();
            }
        }
    };
    InboxDetailPage.prototype.sendApprovalNotif = function (type) {
        var _this = this;
        var nippList = [];
        var pesan = "";
        var res = '';
        if (type == "approve") {
            if (this.messageDetail['Kode Jenis Surat'] == 'permohonan') {
                if (this.nipp == this.messageDetail['NIPP Menyetujui']) {
                    if (this.messageDetail['NIPP Mengetahui'] != null) {
                        nippList.push(this.messageDetail['NIPP Mengetahui']);
                        pesan = 'Pengajuan cuti/izin dari ' + this.messageDetail['Nama Pemohon'] + ' membutuhkan persetujuan.';
                        res = 'InboxDetailPage';
                    }
                    else {
                        nippList.push(this.messageDetail['NIPP Pemohon']);
                        pesan = 'Pengajuan cuti/izin anda telah disetujui.';
                        res = 'CutiListPage';
                    }
                }
                else if (this.nipp == this.messageDetail['NIPP Mengetahui']) {
                    nippList.push(this.messageDetail['NIPP Pemohon']);
                    pesan = 'Pengajuan cuti/izin anda telah disetujui.';
                    res = 'CutiListPage';
                }
            }
            else {
                var pemeriksa = [];
                pemeriksa = this.messageDetail['Pemeriksa'].filter(function (x) { return x['nipp_pemeriksa'].includes(_this.userdataTPK['data']['NIPP']); });
                this.pushNotifKeDrafter(this.messageDetail['Drafter'][0]['nipp_drafter'], this.userdataTPK['data']['NAMA']);
                this.pushNotifKePemeriksa(this.messageDetail['Pemeriksa'], this.userdataTPK['data']['NAMA']);
                if (this.messageDetail['Pemeriksa'].indexOf(pemeriksa[0]) != -1) {
                    if (this.messageDetail['Pemeriksa'].indexOf(pemeriksa[0]) != this.messageDetail['Pemeriksa'].length - 1) {
                        nippList.push(this.messageDetail['Pemeriksa'][this.messageDetail['Pemeriksa'].indexOf(pemeriksa[0]) + 1]['nipp_pemeriksa']);
                    }
                    else if (this.messageDetail['Pemeriksa'].indexOf(pemeriksa[0]) == this.messageDetail['Pemeriksa'].length - 1) {
                        nippList.push(this.messageDetail['Pengirim']['NIPP']);
                    }
                    else {
                    }
                }
                pesan = "Surat Dari " + this.messageDetail['Drafter'][0]['nama_drafter'] + " Membutuhkan Approval. \nPerihal : " + this.messageDetail['Perihal'];
                res = 'InboxDetailPage';
            }
        }
        else if (type == "decline") {
            if (this.messageDetail['Kode Jenis Surat'] == 'permohonan') {
                nippList.push(this.messageDetail['NIPP Pemohon']);
                pesan = "Permohonan cuti/izin Anda Telah Ditangguhkan oleh " + this.userdataTPK['data']['NAMA'];
                res = 'CutiListPage';
            }
            else {
                nippList.push(this.messageDetail['Drafter'][0]['nipp_drafter']);
                pesan = "Surat Anda Telah Dibatalkan oleh " + this.userdataTPK['data']['NAMA'] + ". \nPerihal : " + this.messageDetail['Perihal'];
                res = 'InboxDetailPage';
            }
        }
        else if (type == "kembalikan") {
            if (this.messageDetail['Kode Jenis Surat'] == 'permohonan') {
                nippList.push(this.messageDetail['NIPP Pemohon']);
                pesan = "Permohonan cuti/izin Anda Telah Ditangguhkan oleh " + this.userdataTPK['data']['NAMA'];
                res = 'CutiListPage';
            }
            else {
                nippList.push(this.messageDetail['Drafter'][0]['nipp_drafter']);
                pesan = "Surat Anda Dikembalikan oleh " + this.userdataTPK['data']['NAMA'] + ". \nPerihal : " + this.messageDetail['Perihal'];
                res = 'InboxDetailPage';
            }
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_notif_imove_nipp', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                nipp: nippList,
                data: {
                    "res": res,
                    "nipp": this.nipp,
                    "messageData": this.messageData
                },
                content: {
                    "en": pesan
                },
                heading: {
                    "en": "Surat Masuk"
                },
                id_kategori: ""
            })
        }).then(function (result) {
            var hasil = JSON.stringify(result);
            _this.navCtrl.pop();
        }).catch(function (error) {
            _this.navCtrl.pop();
        });
    };
    InboxDetailPage.prototype.pushNotifKeDrafter = function (nippTujuan, namaSession) {
        var _this = this;
        var nippList = [];
        var pesan = 'surat anda telah diapprove oleh ' + namaSession + ". \nPerihal : " + this.messageDetail['Perihal'];
        var res = 'OutboxPage';
        nippList.push(nippTujuan);
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_notif_imove_nipp', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                nipp: nippList,
                data: {
                    "res": res,
                    "nipp": this.nipp,
                    "messageData": this.messageData
                },
                heading: {
                    "en": "Surat Masuk"
                },
                content: {
                    "en": pesan
                },
                id_kategori: ""
            })
        }).then(function (result) {
            var hasil = JSON.stringify(result);
            _this.navCtrl.pop();
        }).catch(function (error) {
            _this.navCtrl.pop();
        });
    };
    InboxDetailPage.prototype.pushNotifKePemeriksa = function (nippPemeriksaList, namaSession) {
        var _this = this;
        var pemeriksa = [];
        pemeriksa = this.messageDetail['Pemeriksa'].filter(function (x) { return x['nipp_pemeriksa'].includes(_this.userdataTPK['data']['NIPP']); });
        var indexSessionPemeriksa = nippPemeriksaList.indexOf(pemeriksa[0]);
        var nippList = [];
        var pesan = 'surat anda telah diapprove oleh ' + namaSession + ". \nPerihal : " + this.messageDetail['Perihal'];
        var res = 'OutboxPage';
        for (var i = 0; i < nippPemeriksaList.length; i++) {
            if (indexSessionPemeriksa != -1) {
                if (i < indexSessionPemeriksa) {
                    nippList.push(nippPemeriksaList[i]['nipp_pemeriksa']);
                }
            }
            else {
                nippList.push(nippPemeriksaList[i]['nipp_pemeriksa']);
            }
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_notif_imove_nipp', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                nipp: nippList,
                data: {
                    "res": res,
                    "nipp": this.nipp,
                    "messageData": this.messageData
                },
                content: {
                    "en": pesan
                },
                heading: {
                    "en": "Surat Masuk"
                },
                id_kategori: ""
            })
        }).then(function (result) {
            var hasil = JSON.stringify(result);
            _this.navCtrl.pop();
        }).catch(function (error) {
            _this.navCtrl.pop();
        });
    };
    InboxDetailPage.prototype.goToLogSurat = function () {
        this.navCtrl.push('LogSuratPage', {
            idSurat: this.messageDetail['ID Surat']
        });
    };
    InboxDetailPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    InboxDetailPage.prototype.replaceNomorSurat = function (noSurat) {
        var result = '';
        result = noSurat.replace(/[-.\/]/g, "_");
        return result + '.pdf';
    };
    InboxDetailPage.prototype.goToPertanggungjawaban = function () {
        var _this = this;
        var modal = this.modalCtrl.create("PertanggungjawabanSppdPage", {
            messageData: this.messageData
        }, {
            enableBackdropDismiss: true,
            showBackdrop: true,
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.navCtrl.pop();
            }
        });
    };
    InboxDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-inbox-detail',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/inbox-detail/inbox-detail.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>\n			<!-- <span ion-text color="light">Detail Surat</span> -->\n		</ion-title>\n\n		<ion-buttons end>\n			<button ion-button (click)="goToLogSurat()">\n				<!-- <ion-icon style="font-size:2.4rem;" name="md-analytics" color="light"></ion-icon> -->\n				<img src="assets/imgs/menu-icon/history.png" style="    max-height: 27px;\n				margin-right: 5px;">\n			</button>\n			<button ion-button (click)="downloadInbox(replaceNomorSurat(messageData[\'No_Surat\']))">\n				<ion-icon style="font-size:2.4rem;" name="md-download" color="light"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content margin-bottom>\n	<div *ngIf="isLoading == true">\n		<ion-item no-lines>\n			<div class="animate-skeleton-background load-2"></div>\n			<div class="animate-skeleton-background load-3"></div>\n			<div class="garis"></div>\n			<div class="animate-skeleton-background load-1"> </div>\n			<div class="animate-skeleton-background load-3"></div>\n			<div class="animate-skeleton-background load-1"> </div>\n			<div class="animate-skeleton-background load-3"></div>\n		</ion-item>\n	</div>\n\n	<div *ngIf="isLoading == false">\n		<div *ngIf="messageDetail[\'Kode Jenis Surat\'] != \'permohonan\'">\n			<ion-card class="header-menu">\n				<ion-item no-padding margin-left>\n					<span ion-text text-wrap style="font-size:1.5rem;">\n						<b>{{ messageDetail[\'Perihal\'] }}</b>\n					</span> <br>\n					<span ion-text text-wrap style="font-size:1.2rem; color:gray;">\n						{{ messageDetail[\'No Surat\'] }}\n					</span>\n					<div style="padding: 10px;" item-end>\n						<button ion-button icon-only clear (click)="show()"> \n							<ion-icon name="ios-arrow-down-outline" *ngIf="!showDetailPesan"></ion-icon>\n							<ion-icon name="ios-arrow-up-outline" *ngIf="showDetailPesan"></ion-icon>\n						</button>\n					</div>\n\n				</ion-item>\n			</ion-card>\n\n			<ion-card class="my-card" style="margin-top:10px !important;" *ngIf="showDetailPesan">\n				<ion-item>\n					<span ion-text text-wrap class="font" color="color4">Tanggal :\n					</span><br />\n					<span ion-text text-wrap color=\'dark\' class="font2">\n						{{ messageDetail[\'Tanggal Surat\'] }}\n					</span> <br>\n\n					<span ion-text text-wrap class="font" color="color4">Pengirim :\n					</span><br />\n					<span ion-text text-wrap color=\'dark\' class="font2">\n						{{ messageDetail[\'Pengirim\'][\'Nama Jabatan\'] }}\n					</span> <br>\n\n					<div *ngIf="messageDetail[\'Kode Jenis Surat\'] == \'surat_perintah\' || messageDetail[\'Kode Jenis Surat\'] == \'undangan\' || messageDetail[\'Kode Jenis Surat\'] == \'surat_dinas\' || messageDetail[\'Kode Jenis Surat\'] == \'nd_undangan\' || messageDetail[\'Kode Jenis Surat\'] == \'nd_sppd\'" >\n						<span ion-text text-wrap class="font" color="color4">Tanggal Mulai :\n						</span><br />\n						<span ion-text text-wrap color=\'dark\' class="font2">\n							{{ messageDetail[\'Agenda\'][\'Tanggal Mulai\'] }}\n						</span> \n						<span ion-text text-wrap *ngIf="messageDetail[\'Agenda\'][\'Tanggal Mulai\'] == null"  color=\'dark\' class="font2">\n							-\n						</span>\n						<br>\n\n						<span ion-text text-wrap class="font" color="color4">Tanggal Akhir :\n						</span><br />\n						<span ion-text text-wrap color=\'dark\' class="font2">\n							{{ messageDetail[\'Agenda\'][\'Tanggal Akhir\'] }}\n						</span> \n						<span ion-text text-wrap *ngIf="messageDetail[\'Agenda\'][\'Tanggal Akhir\'] == null"  color=\'dark\' class="font2">\n							-\n						</span>\n						<br>\n\n						<span ion-text text-wrap class="font" color="color4">Lokasi :\n						</span><br />\n						<span ion-text text-wrap color=\'dark\' class="font2">\n							{{ messageDetail[\'Agenda\'][\'Lokasi\'] }}\n						</span> \n						<span ion-text text-wrap *ngIf="messageDetail[\'Agenda\'][\'Lokasi\'] == null"  color=\'dark\' class="font2">\n							-\n						</span>\n						<br>\n					</div>\n					\n\n					<div *ngIf="messageDetail[\'Penerima Jabatan\'].length > 0">\n						<span ion-text text-wrap class="font" color="color4">Penerima Jabatan :\n						</span>\n						<span ion-text text-wrap class="font" color="primary"\n							*ngIf="messageDetail[\'Penerima Jabatan\'].length > 1" (click)="showMore(1)"\n							style="float:right;">\n							View more\n						</span> <br>\n						<div *ngIf="!showAllPenerimaJabatan">\n							<span ion-text text-wrap color=\'dark\' class="font2">\n								1. {{ messageDetail[\'Penerima Jabatan\'][0] }}\n							</span>\n						</div>\n						<div *ngIf="showAllPenerimaJabatan">\n							<span *ngFor="let p of messageDetail[\'Penerima Jabatan\']; let i = index" ion-text text-wrap\n								color=\'dark\' class="font2">\n								{{ i + 1 }}. {{ p }} <br />\n							</span>\n						</div>\n					</div>\n					<div *ngIf="messageDetail[\'Tembusan Jabatan\'].length > 0">\n						<span ion-text text-wrap class="font" color="color4">Tembusan Jabatan :\n						</span>\n						<span ion-text text-wrap class="font" color="primary"\n							*ngIf="messageDetail[\'Tembusan Jabatan\'].length > 1" (click)="showMore(2)"\n							style="float:right;">\n							View more\n						</span> <br>\n						<div *ngIf="!showAllTembusanJabatan">\n							<span ion-text text-wrap color=\'dark\' class="font2">\n								1. {{ messageDetail[\'Tembusan Jabatan\'][0] }}\n							</span>\n						</div>\n						<div *ngIf="showAllTembusanJabatan">\n							<span *ngFor="let p of messageDetail[\'Tembusan Jabatan\']; let i = index" ion-text text-wrap\n								color=\'dark\' class="font2">\n								{{ i + 1 }}. {{ p }} <br />\n							</span>\n						</div>\n					</div>\n\n					<div *ngIf="messageDetail[\'Penerima Pekerja\'].length > 0">\n						<span ion-text text-wrap class="font" color="color4">Penerima Pekerja :\n						</span>\n						<span ion-text text-wrap class="font" color="primary"\n							*ngIf="messageDetail[\'Penerima Pekerja\'].length > 1" (click)="showMore(3)"\n							style="float:right;">\n							View more\n						</span> <br>\n						<div *ngIf="!showAllPenerimaPekerja">\n							<span ion-text text-wrap color=\'dark\' class="font2">\n								1. {{ messageDetail[\'Penerima Pekerja\'][0] }}\n							</span>\n						</div>\n						<div *ngIf="showAllPenerimaPekerja">\n							<span *ngFor="let p of messageDetail[\'Penerima Pekerja\']; let i = index" ion-text text-wrap\n								color=\'dark\' class="font2">\n								{{ i + 1 }}. {{ p }} <br />\n							</span>\n						</div>\n					</div>\n\n					<div *ngIf="messageDetail[\'Tembusan Pekerja\'].length > 0">\n						<span ion-text text-wrap class="font" color="color4">Tembusan Pekerja :\n						</span>\n						<span ion-text text-wrap class="font" color="primary"\n							*ngIf="messageDetail[\'Tembusan Pekerja\'].length > 1" (click)="showMore(4)"\n							style="float:right;">\n							View more\n						</span> <br>\n						<div *ngIf="!showAllTembusanPekerja">\n							<span ion-text text-wrap color=\'dark\' class="font2">\n								1. {{ messageDetail[\'Tembusan Pekerja\'][0] }}\n							</span>\n						</div>\n						<div *ngIf="showAllTembusanPekerja">\n							<span *ngFor="let p of messageDetail[\'Tembusan Pekerja\']; let i = index" ion-text text-wrap\n								color=\'dark\' class="font2">\n								{{ i + 1 }}. {{ p }} <br />\n							</span>\n						</div>\n					</div>\n\n					<div *ngIf="messageDetail[\'Penerima Non Pekerja\'].length > 0">\n						<span ion-text text-wrap class="font" color="color4">Penerima Non Pekerja\n							: </span>\n						<span ion-text text-wrap class="font" color="primary"\n							*ngIf="messageDetail[\'Penerima Non Pekerja\'].length > 1" (click)="showMore(5)"\n							style="float:right;">\n							View more\n						</span> <br>\n						<div *ngIf="!showAllPenerimaNonPekerja">\n							<span ion-text text-wrap color=\'dark\' class="font2">\n								1. {{ messageDetail[\'Penerima Non Pekerja\'][0] }}\n							</span>\n						</div>\n						<div *ngIf="showAllPenerimaNonPekerja">\n							<span *ngFor="let p of messageDetail[\'Penerima Non Pekerja\']; let i = index" ion-text\n								text-wrap color=\'dark\' class="font2">\n								{{ i + 1 }}. {{ p }} <br />\n							</span>\n						</div>\n					</div>\n\n					<div *ngIf="messageDetail[\'Tembusan Non Pekerja\'].length > 0">\n						<span ion-text text-wrap class="font" color="color4">Tembusan Non Pekerja\n							: </span>\n						<span ion-text text-wrap class="font" color="primary"\n							*ngIf="messageDetail[\'Tembusan Non Pekerja\'].length > 1" (click)="showMore(6)"\n							style="float:right;">\n							View more\n						</span> <br>\n						<div *ngIf="!showAllTembusanNonPekerja">\n							<span ion-text text-wrap color=\'dark\' class="font2">\n								1. {{ messageDetail[\'Tembusan Non Pekerja\'][0] }}\n							</span>\n						</div>\n						<div *ngIf="showAllTembusanNonPekerja">\n							<span *ngFor="let p of messageDetail[\'Tembusan Non Pekerja\']; let i = index" ion-text\n								text-wrap color=\'dark\' class="font2">\n								{{ i + 1 }}. {{ p }} <br />\n							</span>\n						</div>\n					</div>\n\n					<span ion-text text-wrap class="font" style="color:#959595">Attachment :\n					</span><br />\n					<div *ngIf="attachmentList.length > 0">\n						<div *ngFor="let attachment of attachmentList" (click)="downloadAttach(attachment)">\n							<span ion-text text-wrap color=\'dark\' class="font2"\n								color="primary">{{ subStrAttachment(attachment) }}</span> <br>\n						</div>\n					</div>\n					<div *ngIf="attachmentList.length == 0">\n						<span ion-text text-wrap color=\'dark\' class="font2" color="primary">\n							-\n						</span>\n					</div>\n				</ion-item>\n\n			</ion-card>\n\n			<ion-grid no-padding fixed>\n\n				<ion-row>\n					<ion-col col-12>\n						<ion-list>\n							<ion-item *ngIf="messageDetail[\'Jenis Surat\'] == \'Surat Perintah\'" padding-left\n								padding-right text-wrap>\n								<span ion-text text-wrap class="font2" style="color:black;"><b>Dasar</b></span>\n							</ion-item>\n\n							<ion-item *ngIf="messageDetail[\'Jenis Surat\'] == \'Surat Perintah\'" padding-left\n								padding-right text-wrap>\n								<div [innerHTML]="dasarSuratPerintah"></div>\n							</ion-item>\n\n							<ion-item *ngIf="messageDetail[\'Jenis Surat\'] == \'Surat Perintah\'" padding-left\n								padding-right text-wrap>\n								<span ion-text text-wrap class="font2" style="color:black;"><b>Perintah</b></span>\n							</ion-item>\n\n							<ion-item *ngIf="messageDetail[\'Jenis Surat\'] == \'Surat Perintah\'" padding-left\n								padding-right text-wrap>\n								<div [innerHTML]="isiPerintah"></div>\n\n							</ion-item>\n\n							<ion-item *ngIf="messageDetail[\'Jenis Surat\'] != \'Surat Perintah\'" padding-left\n								padding-right margin-bottom text-wrap>\n								<div [innerHTML]="messageDetail[\'Isi Surat\']"></div>\n							</ion-item>\n						</ion-list>\n					</ion-col>\n				</ion-row>\n\n				<ion-row\n					*ngIf="!isLoading && isAtasan && messageDetail[\'Status Surat\'] == \'LIHAT SURAT\' && from_modul != \'sppd\'">\n					<ion-col col-12>\n						<ion-list>\n							<ion-item no-lines padding-left padding-right no-margin>\n								<ion-row class="my-col">\n									<ion-col col-6 align-self-start><b ion-text color="dark" class="font2">Disposisi\n											Jabatan</b> </ion-col>\n									<ion-col col-6 align-self-center padding-right (click)="showDisposisi(\'jabatan\')">\n										<ion-icon name="add" color="primary" class="plus" float-right></ion-icon>\n									</ion-col>\n								</ion-row>\n								<div *ngIf="disposisiJabatanList != null">\n									<ion-row class="my-col" *ngFor="let disposisiJabatan of disposisiJabatanList">\n										<ion-col align-self-start text-wrap>\n											<p ion-text color="primary">{{ disposisiJabatan[\'nama_jabatan\'] }} |\n												{{ disposisiJabatan[\'nama\'] }}</p>\n										</ion-col>\n										<ion-col col-6 align-self-center padding-right>\n											<ion-icon name="md-close" color="danger" class="del-disposisi"\n												(click)="delete(disposisiJabatan,\'jabatan\')" float-right></ion-icon>\n										</ion-col>\n									</ion-row>\n								</div>\n							</ion-item>\n							<ion-item no-lines padding-left padding-right no-margin>\n								<ion-row class="my-col">\n									<ion-col col-6 align-self-start><b ion-text color="dark" class="font2">Disposisi\n											Pekerja</b> </ion-col>\n									<ion-col col-6 align-self-center padding-right (click)="showDisposisi(\'pekerja\')">\n										<ion-icon name="add" color="danger" class="plus" float-right></ion-icon>\n									</ion-col>\n								</ion-row>\n								<div *ngIf="disposisiPekerjaList != null">\n									<ion-row class="my-col" *ngFor="let disposisiPekerja of disposisiPekerjaList">\n										<ion-col align-self-start text-wrap>\n											<p ion-text color="primary">{{ disposisiPekerja[\'nama\'] }} |\n												{{ disposisiPekerja[\'nipp\'] }} | {{\n														disposisiPekerja[\'nama_jabatan\'] }}</p>\n										</ion-col>\n										<ion-col col-6 align-self-center padding-right>\n											<ion-icon name="md-close" color="danger" class="del-disposisi"\n												(click)="delete(disposisiPekerja,\'pekerja\')" float-right></ion-icon>\n										</ion-col>\n									</ion-row>\n								</div>\n							</ion-item>\n						</ion-list>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n\n			<ion-grid\n				*ngIf="isAtasan && messageDetail[\'Status Surat\'].includes(\'LIHAT SURAT\')  && from_modul != \'sppd\' ">\n				<ion-row>\n					<ion-col col-6>\n						<button style="border-radius:5px;" icon-start ion-button block color="danger"\n							(click)="cancel()">\n							<ion-icon name="md-close"></ion-icon>\n							Batal\n						</button>\n					</ion-col>\n					<ion-col col-6>\n						<button style="border-radius:5px;" icon-start ion-button block (click)="sendDisposisi()"\n							color="primary"\n							[disabled]="(disposisiJabatanList.length == 0 && disposisiPekerjaList.length == 0) ? true : false">\n							<ion-icon name="md-checkmark"></ion-icon>\n							Disposisi\n						</button>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n\n			<!-- -------------------------------------- PESERTA SPPD -------------------------------------------------------------- -->\n\n			<div *ngIf="messageDetail[\'Kode Jenis Surat\'] == \'nd_sppd\'">\n\n\n				<ion-item no-padding margin-left margin-right no-lines>\n					<span ion-text text-wrap class="font2">\n						<b>Peserta SPPD</b>\n					</span> <br>\n\n					<div *ngIf=\'pesertaSppdList.length > 0\'>\n						<table width="95%">\n							<tr *ngFor="let peserta of pesertaSppdList;let i = index">\n								<td valign="top" width="10%">{{i+1}}. </td>\n								<td valign="top">\n									<span ion-text text-wrap color=\'dark\' class="font2">\n										{{ peserta[\'NAMA\'] }}\n									</span>\n								</td>\n							</tr>\n						</table>\n					</div>\n\n					<div *ngIf="pesertaSppdList.length == 0">\n						<span ion-text text-wrap color=\'color4\' class="font2">\n							tidak ada peserta SPPD\n						</span>\n					</div>\n\n					<!-- <div *ngIf="attrScanSppd.length > 0 && from_modul == \'sppd\'">						 -->\n					<div *ngIf="messageData[\'KD_STATUS\'] == \'7\' && from_modul == \'sppd\'">\n						<ion-grid>\n							<ion-row>\n								<ion-col col-12>\n									<button style="border-radius:5px;" icon-start ion-button block\n										(click)="goToPertanggungjawaban()" color="primary">\n										<ion-icon name="md-checkmark"></ion-icon>\n										Pertanggungjawabkan\n									</button>\n								</ion-col>\n							</ion-row>\n						</ion-grid>\n					</div>\n\n					<div *ngIf="messageData[\'KD_STATUS\'] == \'9\' && from_modul == \'sppd\'">\n						<ion-grid>\n							<ion-row>\n								<ion-col col-12>\n									<button style="border-radius:5px;" icon-start ion-button block\n										(click)="goToPertanggungjawaban()" color="primary">\n										<ion-icon name="md-checkmark"></ion-icon>\n										Upload Ulang Pertanggungjawabkan\n									</button>\n								</ion-col>\n							</ion-row>\n						</ion-grid>\n					</div>\n\n\n\n				</ion-item>\n\n\n\n\n\n\n			</div>\n\n			<!-- -------------------------------------- PESERTA SPPD -------------------------------------------------------------- -->\n\n			<ion-grid *ngIf="messageDetail[\'Status Surat\'].includes(\'PERIKSA\')  && from_modul != \'sppd\' ">\n				<ion-row>\n					<ion-col col-12>\n						<div class="appForm">\n							<ion-list>\n								<ion-item>\n									<span item-left>\n										<img src="assets/imgs/logo/alasan.png" class="icons">\n									</span>\n									<ion-label stacked>Komentar</ion-label>\n									<ion-input type="text" [(ngModel)]="keterangan" placeholder="" clearInput>\n									</ion-input>\n								</ion-item>\n							</ion-list>\n						</div>\n					</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6>\n						<button style="border-radius:5px;" icon-start ion-button block color="danger"\n							(click)="doPeriksa(\'decline\')">\n							<ion-icon name="md-close"></ion-icon>\n							Decline\n						</button>\n					</ion-col>\n					<ion-col col-6>\n						<button style="border-radius:5px;" icon-start ion-button block (click)="doPeriksa(\'approve\')"\n							color="primary">\n							<ion-icon name="md-checkmark"></ion-icon>\n							Approve\n						</button>\n					</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-12>\n						<button style="border-radius:5px;" icon-start ion-button block (click)="doPeriksa(\'kembalikan\')"\n							color="primary">\n							<ion-icon name="md-refresh"></ion-icon>\n							Kembalikan\n						</button>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n\n		<div *ngIf="messageDetail[\'Kode Jenis Surat\'] == \'permohonan\'">\n			<ion-card class="header-card">\n				<ion-card-content>\n					<span ion-text text-wrap class="font-header">\n						<b>{{ messageDetail[\'Judul Surat\'] }}</b>\n					</span>\n				</ion-card-content>\n			</ion-card>\n\n			<ion-card class="my-card">\n				<ion-item>\n					<span ion-text text-wrap class="font-mini" color="color4">\n						Tanggal Pengajuan\n					</span><br>\n					<span ion-text text-wrap class="font-small">\n						{{ messageDetail[\'Tanggal Pengajuan\'] }}\n					</span><br>\n\n					<span ion-text text-wrap class="font-mini" color="color4">\n						Jenis Pengajuan\n					</span><br>\n					<span ion-text text-wrap class="font-small">\n						{{ messageDetail[\'Jenis Pengajuan\'] }}\n					</span>\n					<br>\n\n					<span ion-text text-wrap class="font-mini" color="color4">\n						tanggal Cuti/Izin\n					</span><br>\n					<span ion-text text-wrap class="font-small">\n						{{ messageDetail[\'Tanggal Mulai Cuti\'] }}\n					</span> <span ion-text text-wrap class="font-small" color="primary"> s/d </span>\n					<span ion-text text-wrap class="font-small">\n						{{ messageDetail[\'Tanggal Selesai Cuti\'] }}\n					</span>\n					<br>\n\n					<span ion-text text-wrap class="font-mini" color="color4">\n						Alamat Selama Cuti/Izin\n					</span><br>\n					<span ion-text text-wrap class="font-small">\n						{{ messageDetail[\'Alamat Cuti\'] }}\n					</span>\n					<br>\n\n					<span ion-text text-wrap class="font-mini" color="color4">\n						Alasan\n					</span><br>\n					<span ion-text text-wrap class="font-small">\n						{{ messageDetail[\'Alasan\'] }}\n					</span>\n					<br>\n				</ion-item>\n			</ion-card>\n\n			<ion-card class="my-card">\n				<ion-item>\n					<div class="header-text">\n						<span ion-text text-wrap>\n							<img src="assets/imgs/logo/nipp.png" class="icons">\n						</span>\n						<span ion-text text-wrap class="font-small">\n							<b>Biodata Pemohon</b>\n						</span>\n					</div>\n					<div class="garis"></div>\n					<span ion-text text-wrap class="font-mini" color="color4">\n						NIPP\n					</span><br>\n					<span ion-text text-wrap class="font-small">\n						{{ messageDetail[\'NIPP Pemohon\'] }}\n					</span><br>\n\n					<span ion-text text-wrap class="font-mini" color="color4">\n						Nama\n					</span><br>\n					<span ion-text text-wrap class="font-small">\n						{{ messageDetail[\'Nama Pemohon\'] }}\n					</span>\n					<br>\n\n					<span ion-text text-wrap class="font-mini" color="color4">\n						Menyetujui\n					</span><br>\n					<span ion-text text-wrap class="font-small" color="primary">\n						<b>{{ messageDetail[\'NIPP Menyetujui\'] }}</b>\n					</span> <br>\n					<span ion-text text-wrap class="font-small">\n						{{ messageDetail[\'Nama Menyetujui\'] }} |\n						{{ messageDetail[\'Jabatan Menyetujui\'] }}\n					</span>\n					<br>\n\n					<span ion-text text-wrap class="font-mini" color="color4">\n						Mengetahui\n					</span><br>\n					<span *ngIf="messageDetail[\'NIPP Mengetahui\'] == \'\' || messageDetail[\'NIPP Mengetahui\'] == null"\n						ion-text text-wrap class="font-small" color="primary">\n						-\n					</span>\n					<span *ngIf="messageDetail[\'NIPP Mengetahui\'] != \'\' || messageDetail[\'NIPP Mengetahui\'] != null"\n						ion-text text-wrap class="font-small" color="primary">\n						<b>{{ messageDetail[\'NIPP Mengetahui\'] }}</b>\n					</span> <br>\n					<span *ngIf="messageDetail[\'Nama Mengetahui\'] != \'\' || messageDetail[\'Nama Mengetahui\'] != null"\n						ion-text text-wrap class="font-small">\n						{{ messageDetail[\'Nama Mengetahui\'] }} |\n						{{ messageDetail[\'Jabatan Mengetahui\'] }}\n					</span>\n				</ion-item>\n			</ion-card>\n\n			<ion-list\n				*ngIf="!isLoading && isAtasan && messageDetail[\'Kode Status Surat\'] == \'4\' && from_modul != \'sppd\'">\n				<ion-item no-lines padding-left padding-right no-margin>\n					<ion-row class="my-col">\n						<ion-col col-6 align-self-start><b ion-text color="dark" class="font2">Disposisi\n								Jabatan</b> </ion-col>\n						<ion-col col-6 align-self-center padding-right (click)="showDisposisi(\'jabatan\')">\n							<ion-icon name="add" color="primary" class="plus" float-right></ion-icon>\n						</ion-col>\n					</ion-row>\n					<div *ngIf="disposisiJabatanList != null">\n						<ion-row class="my-col" *ngFor="let disposisiJabatan of disposisiJabatanList">\n							<ion-col align-self-start text-wrap>\n								<p ion-text color="primary">{{ disposisiJabatan[\'nama_jabatan\'] }} |\n									{{ disposisiJabatan[\'nama\'] }}</p>\n							</ion-col>\n							<ion-col col-6 align-self-center padding-right>\n								<ion-icon name="md-close" color="danger" class="del-disposisi"\n									(click)="delete(disposisiJabatan,\'jabatan\')" float-right></ion-icon>\n							</ion-col>\n						</ion-row>\n					</div>\n				</ion-item>\n				<ion-item no-lines padding-left padding-right no-margin>\n					<ion-row class="my-col">\n						<ion-col col-6 align-self-start><b ion-text color="dark" class="font2">Disposisi\n								Pekerja</b> </ion-col>\n						<ion-col col-6 align-self-center padding-right (click)="showDisposisi(\'pekerja\')">\n							<ion-icon name="add" color="danger" class="plus" float-right></ion-icon>\n						</ion-col>\n					</ion-row>\n					<div *ngIf="disposisiPekerjaList != null">\n						<ion-row class="my-col" *ngFor="let disposisiPekerja of disposisiPekerjaList">\n							<ion-col align-self-start text-wrap>\n								<p ion-text color="primary">{{ disposisiPekerja[\'nama\'] }} |\n									{{ disposisiPekerja[\'nipp\'] }} | {{\n											disposisiPekerja[\'nama_jabatan\'] }}</p>\n							</ion-col>\n							<ion-col col-6 align-self-center padding-right>\n								<ion-icon name="md-close" color="danger" class="del-disposisi"\n									(click)="delete(disposisiPekerja,\'pekerja\')" float-right></ion-icon>\n							</ion-col>\n						</ion-row>\n					</div>\n				</ion-item>\n			</ion-list>\n\n			<ion-grid\n				*ngIf="isAtasan && messageDetail[\'Kode Status Surat\'] == \'4\'  && from_modul != \'sppd\' ">\n				<ion-row>\n					<ion-col col-6>\n						<button style="border-radius:5px;" icon-start ion-button block color="danger"\n							(click)="cancel()">\n							<ion-icon name="md-close"></ion-icon>\n							Batal\n						</button>\n					</ion-col>\n					<ion-col col-6>\n						<button style="border-radius:5px;" icon-start ion-button block (click)="sendDisposisi()"\n							color="primary"\n							[disabled]="(disposisiJabatanList.length == 0 && disposisiPekerjaList.length == 0) ? true : false">\n							<ion-icon name="md-checkmark"></ion-icon>\n							Disposisi\n						</button>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n\n			<ion-grid *ngIf="isAtasan && messageDetail[\'Kode Status Surat\'] == \'2\'">\n				<ion-row>\n					<ion-col col-12>\n						<div class="appForm">\n							<ion-list>\n								<ion-item>\n									<span item-left>\n										<img src="assets/imgs/logo/alasan.png" class="icons">\n									</span>\n									<ion-label stacked>Komentar</ion-label>\n									<ion-input type="text" [(ngModel)]="keterangan" placeholder="" clearInput>\n									</ion-input>\n								</ion-item>\n							</ion-list>\n						</div>\n					</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6>\n						<button style="border-radius:5px;" icon-start ion-button block color="danger"\n							(click)="doPeriksa(\'decline\')">\n							<ion-icon name="md-close"></ion-icon>\n							Ditangguhkan\n						</button>\n					</ion-col>\n					<ion-col col-6>\n						<button style="border-radius:5px;" icon-start ion-button block (click)="doPeriksa(\'approve\')"\n							color="primary">\n							<ion-icon name="md-checkmark"></ion-icon>\n							Setujui\n						</button>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n\n\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/inbox-detail/inbox-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], InboxDetailPage);
    return InboxDetailPage;
}());

//# sourceMappingURL=inbox-detail.js.map

/***/ })

});
//# sourceMappingURL=22.js.map