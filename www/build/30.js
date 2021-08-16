webpackJsonp([30],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRestitusiPageModule", function() { return AddRestitusiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_restitusi__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddRestitusiPageModule = /** @class */ (function () {
    function AddRestitusiPageModule() {
    }
    AddRestitusiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_restitusi__["a" /* AddRestitusiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_restitusi__["a" /* AddRestitusiPage */]),
            ],
        })
    ], AddRestitusiPageModule);
    return AddRestitusiPageModule;
}());

//# sourceMappingURL=add-restitusi.module.js.map

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

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRestitusiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(201);
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









/**
 * Generated class for the AddRestitusiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddRestitusiPage = /** @class */ (function () {
    function AddRestitusiPage(navCtrl, navParams, viewCtrl, datePicker, platform, datePipe, toastCtrl, soapService, storage, loadingCtrl, oneSignal, alertCtrl, modalCtrl) {
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
        this.modalCtrl = modalCtrl;
        this.jenisRestitusi = 'kesehatan';
        this.dataList = [];
        oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_5__config__["e" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_5__config__["g" /* sender_id */]);
        oneSignal.endInit();
        this.tglPengajuan = new Date();
        this.tglPengajuan = this.datePipe.transform(this.tglPengajuan, 'dd/MM/yyyy');
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
        });
    }
    AddRestitusiPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddRestitusiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddRestitusiPage');
    };
    AddRestitusiPage.prototype.addNota = function (param, index) {
        var _this = this;
        //console.log(index);
        var modal = this.modalCtrl.create("AddNotaRestitusiPage", {
            dataPasien: param
        }, {
            enableBackdropDismiss: true,
            showBackdrop: true,
        });
        modal.present();
        modal.onDidDismiss(function (res) {
            //console.log(res);
            if (res['data'] != null) {
                if (index == null) {
                    //console.log('tambah baru');
                    _this.dataList.push({
                        tglNota: res['data']['tglNota'],
                        namaPasien: res['data']['namaPasien'],
                        statusKeluarga: res['data']['statusKeluarga'],
                        biayaDokter: res['data']['biayaDokter'],
                        biayaObat: res['data']['biayaObat'],
                        biayaTindakan: res['data']['biayaTindakan'],
                        biayaPerawatan: res['data']['biayaPerawatan'],
                        biayaAdministrasi: res['data']['biayaAdministrasi'],
                        biayaKacamata: res['data']['biayaKacamata'],
                        biayaLain: res['data']['biayaLain']
                    });
                }
                else {
                    //console.log('edit');
                    _this.dataList[index]['tglNota'] = res['data']['tglNota'],
                        _this.dataList[index]['namaPasien'] = res['data']['namaPasien'],
                        _this.dataList[index]['statusKeluarga'] = res['data']['statusKeluarga'],
                        _this.dataList[index]['biayaDokter'] = res['data']['biayaDokter'],
                        _this.dataList[index]['biayaObat'] = res['data']['biayaObat'],
                        _this.dataList[index]['biayaTindakan'] = res['data']['biayaTindakan'],
                        _this.dataList[index]['biayaPerawatan'] = res['data']['biayaPerawatan'],
                        _this.dataList[index]['biayaAdministrasi'] = res['data']['biayaAdministrasi'],
                        _this.dataList[index]['biayaKacamata'] = res['data']['biayaKacamata'],
                        _this.dataList[index]['biayaLain'] = res['data']['biayaLain'];
                }
            }
            //console.log(this.dataList);
        });
    };
    AddRestitusiPage.prototype.delete = function (index) {
        this.presentConfirm('del', 'Apakah anda yakin ingin menghapus nota ini ?', index);
    };
    AddRestitusiPage.prototype.presentConfirm = function (type, msg, index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: msg,
            cssClass: 'alert',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                        if (type == 'clean') {
                            if (_this.jenisRestitusiLama == 'kesehatan') {
                                _this.jenisRestitusi = 'kacamata';
                            }
                            else if (_this.jenisRestitusiLama == 'kacamata') {
                                _this.jenisRestitusi = 'kesehatan';
                            }
                        }
                    }
                },
                {
                    text: 'Ya',
                    handler: function () {
                        //console.log('Buy clicked');
                        if (type == 'clean') {
                            _this.dataList = [];
                        }
                        if (type == 'del') {
                            _this.dataList.splice(index, 1);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    AddRestitusiPage.prototype.onChangeJenis = function (event) {
        // console.log(event);
        // this.jenisRestitusiLama = this.jenisRestitusi;
        // if (this.dataList.length > 0) {
        //   this.presentConfirm('clean','Mengganti tipe pengajuan akan menghapus nota yang sudah diinput, apakah anda yakin ?','');
        // } 
        this.dataList = [];
    };
    AddRestitusiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-restitusi',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-restitusi/add-restitusi.html"*/'<!--\n  Generated template for the AddRestitusiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light">Pengajuan Restitusi</span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <span item-left>\n      <img src="assets/imgs/menu-icon/start_date.png" class="icons">\n    </span>\n    <ion-label stacked>Tanggal Pengajuan</ion-label>\n    <ion-input type="text" [readonly]="true" [(ngModel)]="tglPengajuan"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <span item-left>\n      <img src="assets/imgs/menu-icon/jenis_cuti.png" class="icons">\n    </span>\n    <ion-label stacked>Jenis Pengajuan</ion-label>\n    <ion-select [(ngModel)]="jenisRestitusi" placeholder="" (ionChange)="onChangeJenis($event)" >\n      <ion-option value="kacamata">kacamata</ion-option>\n      <ion-option value="kesehatan">kesehatan</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <br>\n\n  <div class="my-card" *ngFor="let data of dataList;let i = index" >        \n\n    <table width="100%">\n      <tr>\n        <td width="45%">\n          <span ion-text text-wrap class="font-small" color="danger">\n            Tanggal Nota\n          </span>\n        </td>\n        <td width="5%">\n          <span ion-text text-wrap class="font-small" color="danger">\n            :\n          </span>\n        </td>\n        <td width="50%">\n          <span ion-text text-wrap class="font-small" color="danger">\n            {{ data[\'tglNota\'] }}\n          </span>\n        </td>\n      </tr>\n\n      <tr>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            Nama Pasien\n          </span>\n        </td>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            :\n          </span>\n        </td>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            {{ data[\'namaPasien\'] }}\n          </span>\n        </td>\n      </tr>\n\n      <tr>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            Status Keluarga\n          </span>\n        </td>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            :\n          </span>\n        </td>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            {{ data[\'statusKeluarga\'] }}\n          </span>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            Rincian Biaya\n          </span>\n        </td>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            :\n          </span>\n        </td>\n        <td>\n          <span ion-text text-wrap class="font-small">\n\n          </span>\n        </td>\n      </tr>\n    </table>\n\n    <div class="row">\n      <div class="col">\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Biaya Dokter\n        </span><br>       \n        <span ion-text text-wrap class="font-small">\n          {{ data[\'biayaDokter\'] }}\n        </span>\n      </div>\n      <div class="col">\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Biaya Obat\n        </span><br>\n       \n        <span ion-text text-wrap class="font-small">\n          {{ data[\'biayaObat\'] }}\n        </span>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col">\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Biaya Tindakan\n        </span><br>\n        \n        <span ion-text text-wrap class="font-small">\n          {{ data[\'biayaTindakan\'] }}\n        </span>\n      </div>\n      <div class="col">\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Biaya Perawatan\n        </span><br>      \n        <span ion-text text-wrap class="font-small">\n          {{ data[\'biayaPerawatan\'] }}\n        </span>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col">\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Biaya Administrasi\n        </span><br>        \n        <span ion-text text-wrap class="font-small">\n          {{ data[\'biayaAdministrasi\'] }}\n        </span>\n      </div>\n      <div class="col">\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Biaya Lain-lain\n        </span><br>       \n        <span ion-text text-wrap class="font-small">\n          {{ data[\'biayaLain\'] }}\n        </span>\n      </div>\n    </div> \n    \n    <div class="row" >\n      <div class="col" style="padding: 0 !important;" >\n        <button ion-button icon-start style="width: 95% !important;" outline (click)="addNota(data, i)" >\n          <ion-icon name="md-create"></ion-icon>\n          Ubah\n        </button>\n      </div>\n        <div class="col" style="padding: 0 !important;" >\n          <button ion-button icon-start style="width: 95% !important;" outline color="danger" (click)="delete(i)" >\n            <ion-icon name="md-close"></ion-icon>\n            Hapus\n          </button>\n        </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer style="padding:5px;">\n  <table width="100%">\n    <tr>\n      <td width="50%" align="center" (click)="addNota(\'\',null)">\n        <button ion-button icon-start style="width: 95% !important;">\n          <ion-icon name="ios-add"></ion-icon>\n          Tambah\n        </button>\n      </td>\n      <td width="50%" align="center">\n        <button ion-button icon-start style="width: 95% !important;" color="secondary" (click)="submit()" [disabled]=\'dataList.length == 0\' >\n          <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n          Submit\n        </button>\n      </td>\n    </tr>\n  </table>\n</ion-footer>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-restitusi/add-restitusi.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], AddRestitusiPage);
    return AddRestitusiPage;
}());

//# sourceMappingURL=add-restitusi.js.map

/***/ })

});
//# sourceMappingURL=30.js.map