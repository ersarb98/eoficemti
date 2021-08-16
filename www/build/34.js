webpackJsonp([34],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsenTeamHadirkoePageModule", function() { return AbsenTeamHadirkoePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__absen_team_hadirkoe__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AbsenTeamHadirkoePageModule = /** @class */ (function () {
    function AbsenTeamHadirkoePageModule() {
    }
    AbsenTeamHadirkoePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__absen_team_hadirkoe__["a" /* AbsenTeamHadirkoePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__absen_team_hadirkoe__["a" /* AbsenTeamHadirkoePage */]),
            ],
        })
    ], AbsenTeamHadirkoePageModule);
    return AbsenTeamHadirkoePageModule;
}());

//# sourceMappingURL=absen-team-hadirkoe.module.js.map

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

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsenTeamHadirkoePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(201);
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
 * Generated class for the AbsenTeamHadirkoePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AbsenTeamHadirkoePage = /** @class */ (function () {
    function AbsenTeamHadirkoePage(navCtrl, navParams, soapService, storage, datepipe, http, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.storage = storage;
        this.datepipe = datepipe;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.isLoading = false;
        this.fakeUsers = new Array(5);
        this.absenList = [];
        this.notAbsenList = [];
        this.isPageAbsen = true;
        this.isPageNotAbsen = false;
        this.isAtasan = false;
        this.idUser = navParams.get('idUser');
        this.date = navParams.get('date');
        var split = this.date.split("-");
        this.dateConvert = new Date(split[2], split[1], split[0]);
        var weekday = new Array(7);
        weekday[0] = "Minggu";
        weekday[1] = "Senin";
        weekday[2] = "Selasa";
        weekday[3] = "Rabu";
        weekday[4] = "Kamis";
        weekday[5] = "Jumat";
        weekday[6] = "Sabtu";
        var month = new Array();
        month[0] = "Januari";
        month[1] = "Februari";
        month[2] = "Maret";
        month[3] = "April";
        month[4] = "Mei";
        month[5] = "Juni";
        month[6] = "Juli";
        month[7] = "Agustus";
        month[8] = "September";
        month[9] = "Oktober";
        month[10] = "November";
        month[11] = "Desember";
        console.log('get day : ' + this.dateConvert.getDay());
        console.log('get month : ' + this.dateConvert.getMonth());
        this.dayConvert = weekday[this.dateConvert.getDay()];
        this.monthConvert = month[this.dateConvert.getMonth()];
        this.dateConvert = split[0];
        this.yearConvert = split[2];
        console.log(this.dayConvert + ", " + this.dateConvert + " " + this.monthConvert + " " + this.yearConvert);
        console.log("dateconvert : " + this.dateConvert);
        this.getList(this.idUser, this.date);
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            console.log(_this.userdataTPK);
            if (_this.isEmptyObject(_this.userdataTPK['data']['LISTOFFICER'][0]) && _this.isEmptyObject(_this.userdataTPK['data']['DATA_BAWAHAN'][0]) && _this.isEmptyObject(_this.userdataTPK['data']['DATA_BAWAHAN_TNO'][0])) {
                _this.isAtasan = false;
            }
            else {
                _this.isAtasan = true;
            }
        });
    }
    AbsenTeamHadirkoePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbsenTeamHadirkoePage');
    };
    AbsenTeamHadirkoePage.prototype.getList = function (idUser, mydate) {
        var _this = this;
        this.isLoading = true;
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["c" /* api_res */] + 'am8_team.php', {
            usernameEDI: __WEBPACK_IMPORTED_MODULE_2__config__["d" /* api_user */],
            passwordEDI: __WEBPACK_IMPORTED_MODULE_2__config__["b" /* api_pass */],
            id_user: idUser,
            tgl: mydate
        }).subscribe(function (data) {
            console.log(data);
            //var responData = JSON.parse(data); 
            if (data['rcmsg'] == 'SUCCESS') {
                _this.absenList = data['data']['ABSEN'];
                _this.notAbsenList = data['data']['NOT_ABSEN'];
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: '',
                    subTitle: 'Gagal mendapatkan data, coba kembali.',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            _this.isLoading = false;
        });
    };
    AbsenTeamHadirkoePage.prototype.openFilter = function () {
        this.navCtrl.push('SearchTeamAbsenPage');
    };
    AbsenTeamHadirkoePage.prototype.goToAbsenMobileDetail = function (absen) {
        this.navCtrl.push('AbsenMobileDetailPage', {
            id_user: absen['ID_USER'],
            nipp: absen['NIPP'],
            nama: absen['NAMA'],
            shift: "",
            date: absen['SHIFT_DATE'],
            fromPage: "AbsenListPage"
        });
    };
    AbsenTeamHadirkoePage.prototype.openAddressPage = function () {
        this.navCtrl.push('AddressBawahanPage', {});
    };
    AbsenTeamHadirkoePage.prototype.openSudahAbsen = function () {
        this.isPageAbsen = true;
        this.isPageNotAbsen = false;
    };
    AbsenTeamHadirkoePage.prototype.openBelumAbsen = function () {
        this.isPageAbsen = false;
        this.isPageNotAbsen = true;
    };
    AbsenTeamHadirkoePage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    AbsenTeamHadirkoePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-absen-team-hadirkoe',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/absen-team-hadirkoe/absen-team-hadirkoe.html"*/'<!--\n  Generated template for the AbsenTeamHadirkoePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light" class="fw500">Team</span>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="openAddressPage()" *ngIf=\'isAtasan == true\' >\n        <!-- <ion-icon style="font-size:2.4rem;" name="md-analytics" color="light"></ion-icon> -->\n        <img src="assets/flat-icon/address.png" style="    max-height: 27px;\n				margin-right: 5px;">\n      </button>\n      <button ion-button (click)="openFilter()">\n        <!-- <ion-icon style="font-size:2.4rem;" name="md-analytics" color="light"></ion-icon> -->\n        <img src="assets/imgs/menu-icon/absensi_white.png" style="    max-height: 27px;\n				margin-right: 5px;">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="isLoading == false" style="margin-top: 16px;margin-bottom: 10px;">\n    <table width="100%">\n      <tr>\n        <td width="100%" align="center">          \n          <table>\n            <tr>\n              <td valign="center" style="vertical-align: middle;">\n                <img style="width: 20px;\n                height: auto;          \n                margin-right: 5px;" src="assets/imgs/menu-icon/jumHari.png" />              \n              </td>\n              <td valign="center" style="vertical-align: middle;">\n                <span *ngIf="absenList.length != 0" ion-text text-wrap class="font2">{{ absenList[0][\'DATE\'] }}</span>\n                <span *ngIf="absenList.length == 0" ion-text text-wrap class="font2">{{ dayConvert }}, {{this.dateConvert}} {{monthConvert}} {{yearConvert}}</span>\n              </td>\n            </tr>\n          </table>          \n        </td>\n      </tr>    \n    </table>\n\n    <table width="100%">\n      <tr>\n        <td align="right">\n          <button ion-button outline class="my-button" color="secondary" (click)="openSudahAbsen()">\n            Sudah Absen            \n          </button>\n        </td> \n        <td align="left">\n          <button ion-button outline class="my-button" color="danger" (click)="openBelumAbsen()">\n            Belum Absen       \n          </button>\n        </td>        \n      </tr>   \n    </table>\n      \n    \n  </div>\n  <ion-list class="dining_List" *ngIf="absenList.length == 0  && isLoading == false && isPageAbsen == true">\n    <ion-card class="primary-bg">\n      <ion-card-content>\n        <span style="font-size:1.3rem">Tidak ada data absen.</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <ion-list class="dining_List" *ngIf="notAbsenList.length == 0  && isLoading == false && isPageNotAbsen == true">\n    <ion-card class="primary-bg">\n      <ion-card-content>\n        <span style="font-size:1.3rem">Tidak ada data belum absen.</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <ion-list class="dining_List" *ngIf="absenList.length != 0 && isLoading == false && isPageAbsen == true">\n    <ion-card *ngFor="let absen of absenList" class="my-card" (click)="goToAbsenMobileDetail(absen)">\n      <!-- <img *ngIf="absen[\'CHECK_IN\'] != null && absen[\'CHECK_OUT\'] == null" src="{{absen[\'CHECK_IN_PHOTO\']}}" class="foto">\n      <img *ngIf="absen[\'CHECK_IN\'] == null && absen[\'CHECK_OUT\'] != null" src="{{absen[\'CHECK_OUT_PHOTO\']}}" class="foto">\n      <img *ngIf="absen[\'CHECK_IN\'] != null && absen[\'CHECK_OUT\'] != null" src="{{absen[\'CHECK_IN_PHOTO\']}}" class="foto"> -->\n      <ion-item>\n        <img *ngIf="absen[\'CHECK_IN\'] != null && absen[\'CHECK_OUT\'] == null" src="{{absen[\'CHECK_IN_PHOTO\']}}"\n          class="foto-2" item-start>\n        <img *ngIf="absen[\'CHECK_IN\'] == null && absen[\'CHECK_OUT\'] != null" src="{{absen[\'CHECK_OUT_PHOTO\']}}"\n          class="foto-2" item-start>\n        <img *ngIf="absen[\'CHECK_IN\'] != null && absen[\'CHECK_OUT\'] != null" src="{{absen[\'CHECK_IN_PHOTO\']}}"\n          class="foto-2" item-start>\n        <span ion-text text-wrap class="font2"><b>{{ absen[\'NAMA\'] }}</b></span><br>\n        <span ion-text text-wrap style="font-size:1.2rem; color:gray;">\n          {{ absen[\'NM_JABATAN\'] }}\n        </span><br>\n        <table width="100%">\n          <tr>\n            <td width="50%">\n              <span ion-text text-wrap style="font-size:1.2rem; color:gray;">In :</span>\n              <!-- <div class="box" >\n                <img style="width: 25px;\n                  height: auto;          \n                  margin-right: 5px;" src="assets/flat-icon/checkin.png" /> \n                  <span ion-text text-wrap *ngIf="absen[\'CHECK_IN\'] == null" class="font2"><b>-</b></span>  \n                  <span ion-text text-wrap *ngIf="absen[\'CHECK_IN\'] != null" class="font2"><b>{{ absen[\'CHECK_IN\'] }}</b></span>  \n              </div> -->\n              <!-- <div class="box" >\n                <img style="width: 25px;\n                  height: auto;          \n                  margin-right: 5px;" src="assets/flat-icon/type_checkin.png" /> \n                  <span ion-text text-wrap *ngIf="absen[\'CHECK_IN_TYPE\'] == null" class="font2"><b>-</b></span>  \n                  <span ion-text text-wrap *ngIf="absen[\'CHECK_IN_TYPE\'] != null" class="font2"><b>{{ absen[\'CHECK_IN_TYPE\'] }}</b></span>  \n              </div> -->\n              <div>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_IN_TYPE\'] != null" class="font2"\n                  style="color:#00AF80;"><b>{{ absen[\'CHECK_IN_TYPE\'] }}</b></span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_IN\'] == null" class="font2">-</span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_IN\'] != null"\n                  class="font2"><b>{{ absen[\'CHECK_IN\'] }}</b></span>\n              </div>\n            </td>\n            <td width="50%">\n              <span ion-text text-wrap style="font-size:1.2rem; color:gray;">Out :</span>\n              <!-- <div class="box">\n                <img style="width: 25px;\n                height: auto;          \n                margin-right: 5px;" src="assets/flat-icon/checkout.png" /> \n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT\'] == null" class="font2"><b>-</b></span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT\'] != null" class="font2"><b>{{ absen[\'CHECK_OUT\'] }}</b></span>\n              </div> -->\n              <!-- <div class="box">\n                <img style="width: 25px;\n                height: auto;          \n                margin-right: 5px;" src="assets/flat-icon/type_checkout.png" /> \n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT_TYPE\'] == null" class="font2"><b>-</b></span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT_TYPE\'] != null" class="font2"><b>{{ absen[\'CHECK_OUT_TYPE\'] }}</b></span>\n              </div> -->\n              <div>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT_TYPE\'] != null" class="font2"\n                  style="color:#FB5252;"><b>{{ absen[\'CHECK_OUT_TYPE\'] }}</b></span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT\'] == null" class="font2">-</span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT\'] != null"\n                  class="font2"><b>{{ absen[\'CHECK_OUT\'] }}</b></span>\n              </div>\n            </td>\n          </tr>\n        </table>\n        <!-- <span ion-text text-wrap class="font">\n          {{ absen[\'Tanggal Mulai\'] }} <span ion-text text-wrap color="primary"><b>s/d</b></span>\n          {{ absen[\'Tanggal Selesai\'] }}\n        </span>\n        <span ion-text text-wrap style="font-size: 1.2rem;" color="primary" item-end><b>{{ absen[\'Status\'] }}</b></span> -->\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-list class="dining_List" *ngIf="notAbsenList.length != 0 && isLoading == false && isPageNotAbsen == true">\n    <ion-card *ngFor="let absen of notAbsenList" class="my-card">      \n      <ion-item>\n        <img *ngIf="absen[\'CHECK_IN\'] != null && absen[\'CHECK_OUT\'] == null" src="{{absen[\'CHECK_IN_PHOTO\']}}"\n          class="foto-2" item-start>\n        <img *ngIf="absen[\'CHECK_IN\'] == null && absen[\'CHECK_OUT\'] != null" src="{{absen[\'CHECK_OUT_PHOTO\']}}"\n          class="foto-2" item-start>\n        <img *ngIf="absen[\'CHECK_IN\'] != null && absen[\'CHECK_OUT\'] != null" src="{{absen[\'CHECK_IN_PHOTO\']}}"\n          class="foto-2" item-start>\n        <span ion-text text-wrap class="font2"><b>{{ absen[\'NAMA\'] }}</b></span><br>\n        <span ion-text text-wrap style="font-size:1.2rem; color:gray;">\n          {{ absen[\'NM_JABATAN\'] }}\n        </span><br>\n        <table width="100%">\n          <tr>\n            <td width="50%">\n              <span ion-text text-wrap style="font-size:1.2rem; color:gray;">In :</span>               \n              <div>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_IN_TYPE\'] != null" class="font2"\n                  style="color:#00AF80;"><b>{{ absen[\'CHECK_IN_TYPE\'] }}</b></span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_IN\'] == null" class="font2">-</span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_IN\'] != null"\n                  class="font2"><b>{{ absen[\'CHECK_IN\'] }}</b></span>\n              </div>\n            </td>\n            <td width="50%">\n              <span ion-text text-wrap style="font-size:1.2rem; color:gray;">Out :</span>             \n              <div>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT_TYPE\'] != null" class="font2"\n                  style="color:#FB5252;"><b>{{ absen[\'CHECK_OUT_TYPE\'] }}</b></span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT\'] == null" class="font2">-</span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT\'] != null"\n                  class="font2"><b>{{ absen[\'CHECK_OUT\'] }}</b></span>\n              </div>\n            </td>\n          </tr>\n        </table>        \n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-list *ngIf=\'absenList.length == 0 && isLoading == true\'>\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n      <ion-item>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-1"> </div>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher> -->\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/absen-team-hadirkoe/absen-team-hadirkoe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AbsenTeamHadirkoePage);
    return AbsenTeamHadirkoePage;
}());

//# sourceMappingURL=absen-team-hadirkoe.js.map

/***/ })

});
//# sourceMappingURL=34.js.map