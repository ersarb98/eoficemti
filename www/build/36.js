webpackJsonp([36],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsenListPageModule", function() { return AbsenListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__absen_list__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AbsenListPageModule = /** @class */ (function () {
    function AbsenListPageModule() {
    }
    AbsenListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__absen_list__["a" /* AbsenListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__absen_list__["a" /* AbsenListPage */]),
            ],
        })
    ], AbsenListPageModule);
    return AbsenListPageModule;
}());

//# sourceMappingURL=absen-list.module.js.map

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

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsenListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(199);
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
 * Generated class for the AbsenListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AbsenListPage = /** @class */ (function () {
    function AbsenListPage(navCtrl, navParams, actionSheetCtrl, loadingCtrl, alertCtrl, soapService, storage, datepipe, popoverCtrl, modalCtrl, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.soapService = soapService;
        this.storage = storage;
        this.datepipe = datepipe;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.bulanList = [];
        this.tahunList = [];
        this.isLoadingBadges = true;
        this.isLoading = true;
        this.fakeUsers = new Array(5);
        this.isHadirkoe = false;
    }
    AbsenListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var date = new Date();
        var currentYear = date.getFullYear();
        // let lastYear = date.getFullYear() - 1;
        var currentMonth = date.getMonth();
        this.bulan = (currentMonth + 1).toString();
        this.tahun = currentYear;
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.getBadges();
            _this.newSession();
            _this.getAbsen(currentMonth + 1, currentYear);
            _this.getValidasi();
        });
        for (var i = 0; i < 10; i++) {
            this.tahunList.push(currentYear - i);
        }
        for (var i = 1; i <= this.bulan; i++) {
            var myMonth = this.getMonth(i);
            this.bulanList.push({ 'val': i, 'bulan': myMonth });
        }
    };
    AbsenListPage.prototype.onChangeYear = function () {
        var date = new Date();
        var currentYear = date.getFullYear();
        var currentMonth = date.getMonth();
        var bulan = (currentMonth + 1).toString();
        if (currentYear > this.tahun) {
            this.bulanList = [];
            for (var i = 1; i <= 12; i++) {
                var myMonth = this.getMonth(i);
                this.bulanList.push({ 'val': i, 'bulan': myMonth });
            }
        }
        else if (currentYear == this.tahun) {
            this.bulan = bulan;
            this.bulanList = [];
            for (var i = 1; i <= parseInt(bulan); i++) {
                var myMonth = this.getMonth(i);
                this.bulanList.push({ 'val': i, 'bulan': myMonth });
            }
        }
    };
    AbsenListPage.prototype.getMonth = function (i) {
        if (i == 1) {
            return 'Januari';
        }
        else if (i == 2) {
            return 'Februari';
        }
        else if (i == 3) {
            return 'Maret';
        }
        else if (i == 4) {
            return 'April';
        }
        else if (i == 5) {
            return 'Mei';
        }
        else if (i == 6) {
            return 'Juni';
        }
        else if (i == 7) {
            return 'Juli';
        }
        else if (i == 8) {
            return 'Agustus';
        }
        else if (i == 9) {
            return 'September';
        }
        else if (i == 10) {
            return 'Oktober';
        }
        else if (i == 11) {
            return 'November';
        }
        else if (i == 12) {
            return 'Desember';
        }
        else {
            //console.log('error disini');
        }
    };
    AbsenListPage.prototype.newSession = function () {
        var _this = this;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_get_user_data', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["d" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_pass */],
                username: this.userdataTPK['data']['NIPP'],
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
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
                    _this.storage.set('userdataTPK', responData).then(function () {
                    });
                }
            }
            else {
            }
        })
            .catch(function (error) {
            //console.log(error);
        });
    };
    AbsenListPage.prototype.showOption = function (type, absen) {
        var _this = this;
        var buttonList = [];
        buttonList.push({
            text: 'Koreksi Jam Datang',
            role: 'koreksiDatang',
            cssClass: absen['IS_KOREKSI_DATANG'] ? '' : 'action-sheet-disable',
            handler: function () {
                var modal = _this.modalCtrl.create("KoreksiAbsenPersonalPage", {
                    userdataTPK: _this.userdataTPK,
                    dataAbsen: absen,
                    jenisAbsen: '1'
                }, {
                    enableBackdropDismiss: true,
                    showBackdrop: true,
                    cssClass: 'my-modal2'
                });
                if (absen['IS_KOREKSI_DATANG']) {
                    modal.present();
                }
                modal.onDidDismiss(function (data) {
                    if (!data.isCancel) {
                        _this.selectVal(_this.bulan, _this.tahun);
                    }
                });
            }
        });
        buttonList.push({
            text: 'Koreksi Jam Pulang',
            role: 'koreksiPulang',
            cssClass: absen['IS_KOREKSI_PULANG'] ? '' : 'action-sheet-disable',
            handler: function () {
                var modal = _this.modalCtrl.create("KoreksiAbsenPersonalPage", {
                    userdataTPK: _this.userdataTPK,
                    dataAbsen: absen,
                    jenisAbsen: '2'
                }, {
                    enableBackdropDismiss: true,
                    showBackdrop: true,
                    cssClass: 'my-modal2'
                });
                if (absen['IS_KOREKSI_PULANG']) {
                    modal.present();
                }
                modal.onDidDismiss(function (data) {
                    if (!data.isCancel) {
                        _this.selectVal(_this.bulan, _this.tahun);
                    }
                });
            }
        });
        buttonList.push({
            text: 'Tutup',
            role: 'cancel',
            handler: function () {
            }
        });
        if (type == 1) {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Pilih Proses',
                cssClass: "my-action-sheet",
                buttons: buttonList
            });
            actionSheet.present();
        }
        else if (type == 2) {
            var actionSheet = this.actionSheetCtrl.create({
                //title: 'Choose Action',
                buttons: [
                    {
                        text: 'Koreksi Jam Datang',
                        role: 'koreksiDatang',
                        handler: function () {
                            //console.log('koreksiDatang clicked');
                        }
                    },
                    {
                        text: 'Koreksi Jam Pulang',
                        handler: function () {
                            //console.log('koreksiPulang clicked');
                        }
                    },
                    {
                        text: 'Tutup',
                        role: 'cancel',
                        handler: function () {
                            //console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        }
    };
    AbsenListPage.prototype.selectVal = function (bln, thn) {
        //this.getAbsen(this.bulan.split('_')[0], this.bulan.split('_')[1]);
        this.getAbsen(bln, thn);
    };
    AbsenListPage.prototype.getAbsen = function (bulan, tahun) {
        var _this = this;
        // let loading = this.loadingCtrl.create({
        //   spinner: 'dots',
        //   content: "Mohon Tunggu...",       
        //   cssClass: 'transparent',
        //   dismissOnPageChange:true
        // });
        // loading.present();
        this.isLoading = true;
        this.soapService.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_absen_list', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["d" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_pass */],
                nipp: this.userdataTPK.data.NIPP,
                bulan: bulan,
                tahun: tahun
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            //console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.absenList = responData['data'];
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            // loading.dismiss();
            _this.isLoading = false;
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            // loading.dismiss();
            _this.isLoading = false;
        });
    };
    AbsenListPage.prototype.getBadges = function () {
        var _this = this;
        this.isLoadingBadges = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_countbadges', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["d" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_pass */],
                iduser: this.userdataTPK['data']['IDUSER'],
                idjabatan: this.userdataTPK['data']['IDJABATAN'],
                nipp: this.userdataTPK['data']['NIPP']
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                _this.badgesList = responData['data'];
            }
            else {
                // let toast = this.toastCtrl.create({
                //   message: 'Gagal Mendapatkan Notifikasi',
                //   duration: 3000,
                //   position: 'bottom'
                // });
                //toast.present();
            }
            _this.isLoadingBadges = false;
        })
            .catch(function (error) {
            //console.log(error);
            // let toast = this.toastCtrl.create({
            //   message: 'Gagal Mendapatkan Notifikasi, Periksa Koneksi Internet Anda.',
            //   duration: 3000,
            //   position: 'bottom'
            // });
            //toast.present();    
            _this.isLoadingBadges = false;
        });
    };
    AbsenListPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create("MenuAbsenPage", {}, { cssClass: "my-popover" });
        popover.present({
            ev: myEvent
        });
    };
    AbsenListPage.prototype.convertMonths = function () {
        switch (this.bulan.split('_')[0]) {
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
    AbsenListPage.prototype.convertMonths2 = function (val) {
        switch (val) {
            case 1:
                return "Januari";
            case 2:
                return "Februari";
            case 3:
                return "Maret";
            case 4:
                return "April";
            case 5:
                return "Mei";
            case 6:
                return "Juni";
            case 7:
                return "Juli";
            case 8:
                return "Agustus";
            case 9:
                return "September";
            case 10:
                return "Oktober";
            case 11:
                return "November";
            case 12:
                return "Desember";
            default:
                return "false";
        }
    };
    AbsenListPage.prototype.subTanggal = function (val) {
        //console.log(val.split(" - "));
        //return val.split(" ", 1);
    };
    AbsenListPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    AbsenListPage.prototype.parse = function (val) {
        var intValue = parseInt(val);
        if (intValue > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    AbsenListPage.prototype.goToAbsenMobileDetail = function (absen) {
        console.log(absen);
        var tgl = absen['TANGGAL'].split(" - ");
        var date = tgl[0];
        if (tgl[0] < 10) {
            date = '0' + tgl[0];
        }
        console.log(date + "-" + this.bulan + "-" + this.tahun);
        // console.log(this.datepipe.transform(date + "-" + this.bulan + "-" + this.tahun, 'dd-MM-yyyy'));
        this.navCtrl.push('AbsenMobileDetailPage', {
            id_user: this.userdataTPK['data']['IDUSER'],
            nipp: this.userdataTPK['data']['NIPP'],
            nama: this.userdataTPK['data']['NAMA'],
            shift: "",
            date: date + "-" + this.bulan + "-" + this.tahun,
            fromPage: "AbsenListPage"
        });
    };
    AbsenListPage.prototype.getValidasi = function () {
        var _this = this;
        var date = new Date();
        var formattedDate = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
        var rand = Math.floor((Math.random() * 100000000) + 1);
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_res */] + 'am3_check_shift.php', {
            usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["d" /* api_user */],
            passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_pass */],
            nipp: this.userdataTPK['data']['NIPP'],
            id_user: this.userdataTPK['data']['IDUSER']
        }).subscribe(function (data) {
            console.log(data);
            if (data['rcmsg'] == 'SUCCESS') {
                _this.dataValidasi = data['data'];
                _this.isHadirkoe = _this.dataValidasi['HADIRKOE'];
            }
            else {
                _this.isHadirkoe = false;
            }
        }, function (err) {
            console.log(err);
            _this.isHadirkoe = false;
        });
    };
    AbsenListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-absen-list',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"D:\Project\pos-ppi\src\pages\absen-list\absen-list.html"*/'<!--\n\n  Generated template for the CutiListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <span ion-text color="light" class="fw500">Absensi</span>\n\n        </ion-title>\n\n        <ion-buttons end *ngIf="isAtasan" style="padding-right:5px;">\n\n            <button ion-button (click)="presentPopover($event)">\n\n                <ion-icon style="font-size:2.4rem;padding-right:16px;" name="more" color="light"></ion-icon>\n\n                <ion-badge class="my-badges"\n\n                    *ngIf="!isLoadingBadges  && !isEmptyObject(badgesList) && parse(badgesList[\'JUMLAH_ABSEN_BELUM_KOREKSI\'])"\n\n                    color="danger">{{ badgesList[\'JUMLAH_ABSEN_BELUM_KOREKSI\'] }}</ion-badge>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="divs">\n\n        <ion-item no-lines style="padding-left:8px !important">\n\n            <ion-select [(ngModel)]="bulan" placeholder="Pilih Bulan">\n\n                <ion-option *ngFor="let bulan of bulanList" value="{{ bulan[\'val\'] }}">{{ bulan[\'bulan\'] }}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item no-lines style="padding-left:8px !important">\n\n            <ion-select [(ngModel)]="tahun" placeholder="Pilih Tahun" (ionChange)="onChangeYear()">\n\n                <ion-option *ngFor="let tahun of tahunList" value="{{tahun}}">{{tahun}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <button ion-button block icon-start class="button" margin-top (click)="selectVal(bulan,tahun)">\n\n            <ion-icon name="md-search"></ion-icon>\n\n            Lihat\n\n        </button>\n\n    </div>\n\n\n\n\n\n    <ion-grid fixed no-padding *ngIf=\'isLoading == false\'>\n\n        <ion-row>\n\n            <ion-col col-12 no-padding>\n\n                <ion-list class="dining_List">\n\n                    <ion-item tapplable *ngFor="let absen of absenList" >\n\n                        <span item-start>\n\n                            <img src="assets/imgs/menu-icon/absensi.png" class="icons">\n\n                        </span>\n\n                        <div class="overlay" (click)="showOption(1,absen)"></div>\n\n\n\n                        <div style="display: table;width:100%;">\n\n                            <div style="display: table-cell;">\n\n                                <span ion-text wrap-text style="font-size:1.3rem;"><b>Tanggal\n\n                                        {{absen.TANGGAL}}</b></span>\n\n                            </div>\n\n\n\n                            <div style="display: table-cell;text-align: right;">\n\n                                <span ion-text text-wrap class="font" color="danger"\n\n                                    *ngIf="absen.KETERANGAN == \'Mangkir\'">{{ absen.KETERANGAN }}\n\n                                </span>\n\n                                <span ion-text text-wrap class="font" color="secondary"\n\n                                    *ngIf="absen.KETERANGAN == \'Hadir\'">{{ absen.KETERANGAN }}\n\n                                </span>\n\n                                <span ion-text text-wrap class="font" color="primary"\n\n                                    *ngIf="absen.KETERANGAN == \'Sabtu\' || absen.KETERANGAN == \'Minggu\' ">\n\n                                    {{ absen.KETERANGAN }}</span>\n\n                                    <span ion-text text-wrap class="font" color="secondary"\n\n                                    *ngIf="absen.KET_HADIRKOE != \'\'">\n\n                                    <br>\n\n                                    {{ absen.KET_HADIRKOE }}\n\n                                </span>\n\n                                <br>\n\n                                <div style="width: 100%;" (click)="goToAbsenMobileDetail(absen)" *ngIf="isHadirkoe">\n\n                                    <img src="assets/flat-icon/absen_mobile.png" class="icons-absen-mobile">\n\n                                </div>   \n\n                            </div>\n\n                        </div>\n\n\n\n                        <span ion-text wrap-text class="font" color="color4">Datang : </span>\n\n                        <span *ngIf="absen.JAM_DATANG == \'\' || absen.JAM_DATANG == null">&nbsp; - </span>\n\n                        <span ion-text wrap-text class="font"><b>{{absen.JAM_DATANG}}</b></span>\n\n                        <span ion-text wrap-text class="font" color="color4"\n\n                            *ngIf="absen.STATUS_DATANG!=\'\' || absen.STATUS_DATANG!=null">&nbsp; | &nbsp; Status :\n\n                        </span>\n\n                        <span ion-text wrap-text class="font" color="primary"\n\n                            *ngIf="absen.STATUS_DATANG!=\'\' || absen.STATUS_DATANG!=null">{{ absen.STATUS_DATANG }}</span>\n\n                        <br>\n\n                        <span ion-text wrap-text class="font" color="color4">Ket. Datang :</span> <br>\n\n                        <span *ngIf="absen.KETERANGAN_MASUK == \'\' || absen.KETERANGAN_MASUK == null">&nbsp; -\n\n                            &nbsp;</span>\n\n                        <span ion-text text-wrap>{{absen.KETERANGAN_MASUK}}</span> <br><br>\n\n\n\n\n\n                        <span ion-text wrap-text class="font" color="color4">Pulang : </span>\n\n                        <span *ngIf="absen.JAM_PULANG == \'\' || absen.JAM_PULANG == null">&nbsp; - </span>\n\n                        <span ion-text wrap-text class="font"><b>{{absen.JAM_PULANG}}</b></span>\n\n                        <span ion-text wrap-text class="font" color="color4"\n\n                            *ngIf="absen.STATUS_PULANG!=\'\' || absen.STATUS_PULANG!=null">&nbsp; | &nbsp; Status :\n\n                        </span>\n\n                        <span ion-text wrap-text class="font" color="primary"\n\n                            *ngIf="absen.STATUS_PULANG!=\'\' || absen.STATUS_PULANG!=null">{{ absen.STATUS_PULANG }}</span>\n\n                        <br>\n\n                        <span ion-text wrap-text class="font" color="color4">Ket. Pulang :</span> <br>\n\n                        <span *ngIf="absen.KETERANGAN_PULANG == \'\' || absen.KETERANGAN_PULANG == null">&nbsp; -\n\n                            &nbsp;</span>\n\n                        <span ion-text text-wrap>{{absen.KETERANGAN_PULANG}}</span> <br>\n\n\n\n                        <span ion-text text-wrap class="text-sm bold keterangan"\n\n                            *ngIf="absen.KETERANGAN != \'Hadir\' && absen.KETERANGAN != \'Mangkir\' && absen.KETERANGAN != \'Sabtu\' && absen.KETERANGAN != \'Minggu\'">\n\n                            <b>{{ absen.KETERANGAN }}</b>\n\n                        </span>\n\n\n\n                    </ion-item>\n\n\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-list *ngIf=\'isLoading == true\'>\n\n        <ion-card *ngFor=\'let fake of fakeUsers\'>\n\n            <ion-item>\n\n                <h2 class="animate-skeleton-background"></h2>\n\n                <h3 class="animate-skeleton-background"></h3>\n\n                <p class="animate-skeleton-background"> </p>\n\n            </ion-item>\n\n        </ion-card>\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Project\pos-ppi\src\pages\absen-list\absen-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], AbsenListPage);
    return AbsenListPage;
}());

//# sourceMappingURL=absen-list.js.map

/***/ })

});
//# sourceMappingURL=36.js.map