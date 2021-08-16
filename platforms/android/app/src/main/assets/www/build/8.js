webpackJsonp([8],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInboxPageModule", function() { return SearchInboxPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_inbox__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchInboxPageModule = /** @class */ (function () {
    function SearchInboxPageModule() {
    }
    SearchInboxPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_inbox__["a" /* SearchInboxPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_inbox__["a" /* SearchInboxPage */]),
            ],
        })
    ], SearchInboxPageModule);
    return SearchInboxPageModule;
}());

//# sourceMappingURL=search-inbox.module.js.map

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

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchInboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soap_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(199);
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
 * Generated class for the SearchInboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchInboxPage = /** @class */ (function () {
    function SearchInboxPage(navCtrl, navParams, viewCtrl, storage, loadingCtrl, soapService, alertCtrl, datePipe, datePicker, platform, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.soapService = soapService;
        this.alertCtrl = alertCtrl;
        this.datePipe = datePipe;
        this.datePicker = datePicker;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.perihal = "";
        this.namaPengirim = "";
        this.noSurat = "";
        this.startDate = "";
        this.endDate = "";
        this.statusBaca = "";
        this.messages = [];
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.isLoading = false;
        this.fakeUsers = new Array(5);
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
        });
    }
    SearchInboxPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchInboxPage');
    };
    SearchInboxPage.prototype.showDatePicker = function (type) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            maxDate: new Date().valueOf(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            if (type == 1) {
                _this.startDate = _this.datePipe.transform(date, 'dd-MM-yyyy');
            }
            else if (type == 2) {
                _this.endDate = _this.datePipe.transform(date, 'dd-MM-yyyy');
            }
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    SearchInboxPage.prototype.doSearch = function () {
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.messages = [];
        if (this.startDate == '' && this.endDate != '') {
            this.startDate = this.endDate;
        }
        else if (this.endDate == '' && this.startDate != '') {
            this.endDate = this.startDate;
        }
        this.getmessages('first', '');
    };
    SearchInboxPage.prototype.getmessages = function (type, functionName) {
        var _this = this;
        if (type == 'first' && functionName == '') {
            this.isLoading = true;
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* api_base_url */], 'eoffice_search_inbox', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_6__config__["d" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_6__config__["b" /* api_pass */],
                iduser: this.userdataTPK['data']['IDUSER'],
                idjabatan: this.userdataTPK['data']['IDJABATAN'],
                pengirim: this.namaPengirim,
                no_surat: this.noSurat,
                perihal: this.perihal,
                tanggalawal: this.startDate == '' && this.endDate != '' ? this.endDate : this.startDate,
                tanggalakhir: this.endDate == '' && this.startDate != '' ? this.startDate : this.endDate,
                status_baca: this.statusBaca,
                page: this.batasAtas,
                jmlpage: this.batasBawah,
                sorting: '1'
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.messages = [];
                }
                if (responData['data']['List_Inbox'].length > 0 && !_this.isEmptyObject(responData['data']['List_Inbox'][0])) {
                    for (var i = 0; i < responData['data']['List_Inbox'].length; i++) {
                        _this.messages.push(responData['data']['List_Inbox'][i]);
                    }
                }
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
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
            _this.isLoading = false;
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            if (type == 'first' && functionName == '') {
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
            _this.isLoading = false;
        });
    };
    SearchInboxPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SearchInboxPage.prototype.goToDetail = function (message) {
        this.navCtrl.push("InboxDetailPage", {
            messageData: message,
            userdataTPK: this.userdataTPK,
            nipp: this.userdataTPK['data']['NIPP']
        });
    };
    SearchInboxPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.messages.length >= 20) {
            this.batasAtas++;
            this.getmessages('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
    };
    SearchInboxPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    SearchInboxPage.prototype.clearField = function () {
        this.perihal = "";
        this.namaPengirim = "";
        this.noSurat = "";
        this.startDate = "";
        this.endDate = "";
        this.statusBaca = "";
    };
    SearchInboxPage.prototype.checkFocus = function (data) {
        this.showDatePicker(data);
    };
    SearchInboxPage.prototype.doArsip = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mengarsip Surat...",
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        loading.present();
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* api_base_url */], 'eoffice_arsip_add', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_6__config__["d" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_6__config__["b" /* api_pass */],
                id_surat: data['id_surat'],
                keterangan: data['Status'],
                id_user: this.userdataTPK.data.IDUSER,
                id_jab: this.userdataTPK.data.IDJABATAN,
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            var toast = _this.toastCtrl.create({
                message: 'Surat Berhasil Diarsipkan.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.batasAtas = 1;
            _this.batasBawah = 20;
            _this.messages = [];
            _this.getmessages('first', '');
            loading.dismiss();
        }).catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            loading.dismiss();
        });
    };
    SearchInboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-inbox',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-inbox/search-inbox.html"*/'<!--\n  Generated template for the SearchOutboxPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><span style="color:#FFF">Search Surat Masuk</span></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()">\n        <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="my-padding">\n    <ion-item no-padding>\n      <span item-left>\n        <img src="assets/imgs/search-inbox/pengirim.png" class="icons">\n      </span>\n      <ion-label stacked>Dari</ion-label>\n      <ion-input type="text" [(ngModel)]="namaPengirim" placeholder=""></ion-input>\n    </ion-item>\n\n    <ion-item no-padding>\n      <span item-left>\n        <img src="assets/imgs/search-inbox/no_surat.png" class="icons">\n      </span>\n      <ion-label stacked>No. Surat</ion-label>\n      <ion-input type="text" [(ngModel)]="noSurat" placeholder=""></ion-input>\n    </ion-item>\n\n    <ion-item no-padding>\n      <span item-left>\n        <img src="assets/imgs/search-inbox/perihal.png" class="icons">\n      </span>\n      <ion-label stacked>Perihal</ion-label>\n      <ion-input type="text" [(ngModel)]="perihal" placeholder=""></ion-input>\n    </ion-item>\n\n    <ion-item no-padding>\n      <span item-left>\n        <img src="assets/imgs/search-inbox/start_date.png" class="icons">\n      </span>\n      <ion-label stacked>Start Date</ion-label>\n      <ion-input type="text" [readonly]="true" [(ngModel)]="startDate" (ionFocus)="checkFocus(1)"\n        (click)="showDatePicker(1)" placeholder=""></ion-input>\n    </ion-item>\n\n    <ion-item no-padding>\n      <span item-left>\n        <img src="assets/imgs/search-inbox/end_date.png" class="icons">\n      </span>\n      <ion-label stacked>End Date</ion-label>\n      <ion-input type="text" [readonly]="true" [(ngModel)]="endDate" (ionFocus)="checkFocus(2)"\n        (click)="showDatePicker(2)" placeholder=""></ion-input>\n    </ion-item>\n\n    <ion-item no-padding>\n      <span item-left>\n        <img src="assets/imgs/search-inbox/status_baca.png" class="icons">\n      </span>\n      <ion-label stacked>Status Baca</ion-label>\n      <ion-select [(ngModel)]="statusBaca" placeholder="">\n        <ion-option value="0">Belum Dibaca</ion-option>\n        <ion-option value="1">Sudah Dibaca</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <div class="row">\n      <div class="col">\n        <button ion-button icon-start full color="danger" style="border-radius: 5px;" (click)="clearField()" margin-top>\n          <ion-icon name="md-close"></ion-icon>\n          Clear\n        </button>\n      </div>\n      <div class="col">\n        <button ion-button icon-start full color="primary" style="border-radius: 5px;" (click)="doSearch()" margin-top\n          [disabled]="namaPengirim == \'\' && noSurat == \'\' && perihal == \'\' && startDate == \'\' && endDate == \'\' && statusBaca == \'\' ? true :false">\n          <ion-icon name="ios-search"></ion-icon>\n          Cari\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <ion-grid *ngIf="isEmptyObject(messages[0])  && isLoading == false" fixed>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card class="primary-bg">\n          <ion-card-content>\n            <span style="font-size:1.3rem">Tidak Ada Pesan.</span>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list *ngIf=\'!isEmptyObject(messages[0])\'>\n    <ion-card *ngFor=\'let message of messages\' class="my-card">\n      <ion-item-sliding>\n        <ion-item (click)="goToDetail(message)" [ngClass]="{\'item-belum-baca\' : !message[\'IsBaca\']}">\n          <span [ngClass]="{\'fw700\': !message[\'IsBaca\']}" style="text-align: center;" item-start>\n            <ion-icon name="mail" color="danger" class="msg-icon" *ngIf="message[\'IsBaca\'] == \'0\'">\n            </ion-icon>\n            <ion-icon name="mail-open" class="msg-icon" color="danger" *ngIf="message[\'IsBaca\'] == \'1\'">\n            </ion-icon> <br>\n            <!-- <span ion-text text-wrap *ngIf="!message[\'Disposisi\']" color="color3" >D</span>\n              <span ion-text text-wrap *ngIf="message[\'Disposisi\']" color="ptpBlue" >D</span> -->\n          </span>\n          <!-- <span ion-text text-wrap class="font-header" color="danger">\n              <b *ngIf="message.No_Surat != null">{{message.No_Surat}}</b>\n              <span *ngIf="message.No_Surat == null"> - </span>\n            </span><br> -->\n\n          <span ion-text text-wrap class="font-small">\n            <b>{{message.Dari}}</b>\n          </span><br>\n          <span color="black" ion-text text-wrap class="font-mini">\n            {{message[\'Perihal\'].substring(0,80) }}\n            <span *ngIf="message[\'Perihal\'].length > 80"> ... </span>\n          </span><br>\n          <span ion-text text-wrap class="font-mini" color="primary">\n            {{message.Tanggal_Surat}}\n          </span>\n          <span item-end>\n            <span color="primary" ion-text text-wrap class="font-mini">\n              <b>{{message.Status}}</b>\n            </span>\n          </span>\n        </ion-item>\n        <ion-item-options side="end" (click)="doArsip(message)">\n          <button ion-button color="primary" style="text-transform: none !important;">\n            <ion-icon name="md-filing"></ion-icon>\n            Arsipkan\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-card>\n  </ion-list>\n\n  <ion-list *ngIf=\'isEmptyObject(messages[0]) && isLoading == true\'>\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n      <ion-item>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-1 "> </div>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-inbox/search-inbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], SearchInboxPage);
    return SearchInboxPage;
}());

//# sourceMappingURL=search-inbox.js.map

/***/ })

});
//# sourceMappingURL=8.js.map