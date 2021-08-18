webpackJsonp([9],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCutiPageModule", function() { return SearchCutiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_cuti__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchCutiPageModule = /** @class */ (function () {
    function SearchCutiPageModule() {
    }
    SearchCutiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_cuti__["a" /* SearchCutiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_cuti__["a" /* SearchCutiPage */]),
            ],
        })
    ], SearchCutiPageModule);
    return SearchCutiPageModule;
}());

//# sourceMappingURL=search-cuti.module.js.map

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCutiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(26);
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
 * Generated class for the SearchCutiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more in fo on
 * Ionic pages and navigation.
 */
var SearchCutiPage = /** @class */ (function () {
    function SearchCutiPage(navCtrl, navParams, viewCtrl, storage, loadingCtrl, soapService, datePicker, alertCtrl, datePipe, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.soapService = soapService;
        this.datePicker = datePicker;
        this.alertCtrl = alertCtrl;
        this.datePipe = datePipe;
        this.toastCtrl = toastCtrl;
        this.cutiType = "";
        this.approvalStatus = "";
        this.startDate = "";
        this.endDate = "";
        this.cutiList = [];
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.isLoading = false;
        this.fakeUsers = new Array(5);
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
        });
    }
    SearchCutiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchCutiPage');
    };
    SearchCutiPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SearchCutiPage.prototype.showDatePicker = function (type) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
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
    SearchCutiPage.prototype.getCutiList = function (type, functionName) {
        var _this = this;
        if (type == 'first' && functionName == '') {
            this.isLoading = true;
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_cuti_list', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["d" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["b" /* api_pass */],
                id_user: this.userdataTPK['data']['IDUSER'],
                search_jenis: this.cutiType,
                search_tgl_pengajuan: "",
                search_tgl_mulai: this.startDate,
                search_tgl_selesai: this.endDate,
                search_alasan: "",
                search_status: this.approvalStatus,
                atas: this.batasAtas,
                bawah: this.batasBawah
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.cutiList = [];
                }
                if (responData['data']['Cuti Personal'].length > 0) {
                    for (var i = 0; i < responData['data']['Cuti Personal'].length; i++) {
                        _this.cutiList.push(responData['data']['Cuti Personal'][i]);
                    }
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Gagal mendapatkan data cuti, silahkan coba kembali.',
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
                message: 'Gagal mendapatkan data cuti, periksa koneksi internet anda.',
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
    SearchCutiPage.prototype.doSearch = function () {
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.cutiList = [];
        this.getCutiList('first', '');
    };
    SearchCutiPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.cutiList.length >= 20) {
            this.batasAtas = this.batasBawah + 1;
            this.batasBawah = this.batasBawah + 20;
            this.getCutiList('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
    };
    SearchCutiPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    SearchCutiPage.prototype.clearField = function () {
        this.approvalStatus = "";
        this.cutiType = "";
        this.startDate = "";
        this.endDate = "";
    };
    SearchCutiPage.prototype.checkFocus = function (data) {
        this.showDatePicker(data);
    };
    SearchCutiPage.prototype.goToDetail = function (data) {
        this.navCtrl.push("CutiDetailPage", {
            "data": data,
            "nipp": this.userdataTPK['data']['NIPP'],
            "userdataTPK": this.userdataTPK
        });
    };
    SearchCutiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-cuti',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"D:\Project\pos-ppi\src\pages\search-cuti\search-cuti.html"*/'<!--\n\n  Generated template for the SearchCutiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title><span style="color:#FFF">Search Cuti</span></ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()">\n\n                <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-item no-padding>\n\n        <span item-left>\n\n            <img src="assets/imgs/logo/jenis_cuti.png" class="icons">\n\n        </span>\n\n        <ion-label stacked>Jenis Cuti</ion-label>\n\n        <ion-select [(ngModel)]="cutiType" placeholder="">\n\n            <ion-option value="Izin">Izin</ion-option>\n\n            <ion-option value="Izin Dispensasi">Izin Dispensasi</ion-option>\n\n            <ion-option value="Izin Perjam">Izin Perjam</ion-option>\n\n            <ion-option value="Cuti Bersalin">Cuti Bersalin/Gugur Kandungan</ion-option>\n\n            <ion-option value="Cuti Tahunan">Cuti Tahunan</ion-option>\n\n            <ion-option value="Cuti Besar">Cuti Besar</ion-option>\n\n            <ion-option value="Cuti Penting">Cuti Karena Alasan Penting</ion-option>\n\n            <ion-option value="Cuti Diluar">Cuti Diluar Tanggungan Perusahaan</ion-option>\n\n            <ion-option value="Cuti Sakit">Cuti Sakit</ion-option>\n\n            <ion-option value="Izin Haid">Masa Haid</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item no-padding>\n\n        <span item-left>\n\n            <img src="assets/imgs/logo/alasan.png" class="icons">\n\n        </span>\n\n        <ion-label stacked>Approval Status</ion-label>\n\n        <ion-select [(ngModel)]="approvalStatus" placeholder="">\n\n            <ion-option value="KIRIM">Kirim</ion-option>\n\n            <ion-option value="PERIKSA">Periksa</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item no-padding>\n\n        <span item-left>\n\n            <img src="assets/imgs/logo/start_date.png" class="icons">\n\n        </span>\n\n        <ion-label stacked>Start Date</ion-label>\n\n        <ion-input type="text" [readonly]="true" [(ngModel)]="startDate" (ionFocus)="checkFocus(1)"\n\n            (click)="showDatePicker(1)" placeholder=""></ion-input>\n\n    </ion-item>\n\n    <ion-item no-padding>\n\n        <span item-left>\n\n            <img src="assets/imgs/logo/end_date.png" class="icons">\n\n        </span>\n\n        <ion-label stacked>End Date</ion-label>\n\n        <ion-input type="text" [readonly]="true" [(ngModel)]="endDate" (ionFocus)="checkFocus(2)"\n\n            (click)="showDatePicker(2)" placeholder=""></ion-input>\n\n    </ion-item>\n\n\n\n    <div class="row">\n\n        <div class="col">\n\n            <button ion-button icon-start full color="danger" style="border-radius: 5px;" (click)="clearField()"\n\n                margin-top>\n\n                <ion-icon name="md-close"></ion-icon>\n\n                clear\n\n            </button>\n\n        </div>\n\n        <div class="col">\n\n            <button ion-button icon-start full color="primary" style="border-radius: 5px;" margin-top\n\n                (click)="doSearch()"\n\n                [disabled]="cutiType == \'\' && approvalStatus == \'\' && startDate == \'\' && endDate == \'\' ? true : false">\n\n                <ion-icon name="md-checkmark"></ion-icon>\n\n                Cari\n\n            </button>\n\n        </div>\n\n    </div>\n\n\n\n    <ion-list class="dining_List" *ngIf="cutiList.length == 0  && isLoading == false">\n\n        <ion-card class="primary-bg">\n\n            <ion-card-content>\n\n                <span style="font-size:1.3rem">Tidak ada data izin/cuti.</span>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </ion-list>     \n\n\n\n    <ion-list class="dining_List" *ngIf="cutiList.length != 0 && isLoading == false">\n\n        <ion-card *ngFor="let cuti of cutiList" class="my-card" (click)="goToDetail(cuti)">\n\n            <ion-item>\n\n              <span item-start>\n\n                <img src="assets/imgs/menu-icon/cuti.png" class="icons">\n\n              </span>\n\n              <span ion-text text-wrap class="font3" color="danger"><b>{{ cuti[\'Jumlah\'] }} hari</b></span><br />\n\n              <span ion-text text-wrap class="font2"><b>{{ cuti[\'Jenis\'] }}</b></span><br>\n\n              <span ion-text text-wrap class="font">\n\n                {{ cuti[\'Tanggal Mulai\'] }} <span ion-text text-wrap color="primary"><b>s/d</b></span> {{ cuti[\'Tanggal Selesai\'] }}\n\n              </span>\n\n              <span ion-text text-wrap style="font-size: 1.2rem;" color="primary"  item-end><b>{{ cuti[\'Status\'] }}</b></span>\n\n            </ion-item>\n\n          </ion-card>\n\n    </ion-list>\n\n\n\n    <ion-list *ngIf=\'cutiList.length == 0 && isLoading == true\'>\n\n        <ion-card *ngFor=\'let fake of fakeUsers\'>\n\n            <ion-item>\n\n              <div class="animate-skeleton-background load-2"></div>\n\n              <div class="animate-skeleton-background load-3"></div>\n\n              <div class="animate-skeleton-background load-1"> </div>\n\n            </ion-item>\n\n          </ion-card>\n\n    </ion-list>\n\n\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n        <ion-infinite-scroll-content>\n\n\n\n        </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Project\pos-ppi\src\pages\search-cuti\search-cuti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], SearchCutiPage);
    return SearchCutiPage;
}());

//# sourceMappingURL=search-cuti.js.map

/***/ })

});
//# sourceMappingURL=9.js.map