webpackJsonp([12],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboxDetailPageModule", function() { return OutboxDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__outbox_detail__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OutboxDetailPageModule = /** @class */ (function () {
    function OutboxDetailPageModule() {
    }
    OutboxDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__outbox_detail__["a" /* OutboxDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__outbox_detail__["a" /* OutboxDetailPage */]),
            ],
        })
    ], OutboxDetailPageModule);
    return OutboxDetailPageModule;
}());

//# sourceMappingURL=outbox-detail.module.js.map

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

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutboxDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(206);
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
 * Generated class for the OutboxDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OutboxDetailPage = /** @class */ (function () {
    function OutboxDetailPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, inAppBrowser, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.inAppBrowser = inAppBrowser;
        this.toastCtrl = toastCtrl;
        this.isLoading = true;
        this.showAllPenerima = false;
        this.penerima = [];
        this.attachmentList = [];
        this.showDetailPesan = false;
        this.showAllPenerimaJabatan = false;
        this.showAllTembusanJabatan = false;
        this.showAllPenerimaPekerja = false;
        this.showAllTembusanPekerja = false;
        this.showAllPenerimaNonPekerja = false;
        this.showAllTembusanNonPekerja = false;
    }
    OutboxDetailPage.prototype.show = function () {
        this.showDetailPesan = !this.showDetailPesan;
    };
    OutboxDetailPage.prototype.ionViewWillLoad = function () {
        this.messageData = this.navParams.get('messageData');
        this.nipp = this.navParams.get('nipp');
        this.getDetail();
    };
    OutboxDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OutboxDetailPage');
    };
    OutboxDetailPage.prototype.getDetail = function () {
        var _this = this;
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_viewmail', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["d" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_pass */],
                nipp: this.nipp,
                linkSurat: this.messageData['Location'],
                from_modul: 'outbox'
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                _this.messageDetail = responData['data'];
                if (_this.messageDetail['Jenis Surat'] == 'Surat Perintah') {
                    _this.dasarSuratPerintah = _this.messageDetail['Isi Surat'].split('xxdasaxx_').pop().split('_xxperintxx_')[0] + '<br>';
                    _this.dasarSuratPerintah = _this.dasarSuratPerintah.replace(/_/gi, "<br><br>");
                    _this.isiPerintah = _this.messageDetail['Isi Surat'].split('_xxperintxx_')[1];
                    _this.isiPerintah = _this.isiPerintah.replace(/_/gi, "<br><br>");
                }
                _this.attachmentList = _this.messageDetail['Attachment'];
                _this.getPenerima();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
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
            _this.isLoading = false;
        });
    };
    // showMore() {
    //   this.showAllPenerima = !this.showAllPenerima;
    // }
    OutboxDetailPage.prototype.showMore = function (type) {
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
    OutboxDetailPage.prototype.getPenerima = function () {
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
    OutboxDetailPage.prototype.subStrAttachment = function (data) {
        var str = data;
        var n = str.lastIndexOf('/');
        return str.substring(n + 1);
    };
    OutboxDetailPage.prototype.goToLogSurat = function () {
        this.navCtrl.push('LogSuratPage', {
            idSurat: this.messageDetail['ID Surat']
        });
    };
    OutboxDetailPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    OutboxDetailPage.prototype.downloadInbox = function (data) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "mohon tunggu...",
            cssClass: 'transparent',
        });
        this.loading.present();
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'find_file', {
            fStream: JSON.stringify(
            // {
            //   usernameEDI: api_user,
            //   passwordEDI: api_pass,
            //   fileName: data
            // }
            {
                "usernameEDI": __WEBPACK_IMPORTED_MODULE_4__config__["d" /* api_user */],
                "passwordEDI": __WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_pass */],
                "fileName": data,
                "id_surat": this.messageDetail['ID Surat'],
                "jenis_surat": this.messageDetail['Kode Jenis Surat'],
                "no_surat": this.messageData['No_Surat']
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            _this.loading.dismiss();
            var options = {
                zoom: 'no'
            };
            var browser = _this.inAppBrowser.create(responData['data']['LINK'], '_system', options);
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.loading.dismiss();
        });
    };
    OutboxDetailPage.prototype.downloadAttach = function (data) {
        var options = {
            zoom: 'no'
        };
        var browser = this.inAppBrowser.create(data, '_system', options);
    };
    OutboxDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-outbox-detail',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/outbox-detail/outbox-detail.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title></ion-title>\n		<ion-buttons end>\n			<button ion-button (click)="goToLogSurat()">\n				<!-- <ion-icon style="font-size:2.4rem;" name="md-analytics" color="light"></ion-icon> -->\n				<img src="assets/imgs/logo/history.png" style="    max-height: 27px;\n				margin-right: 5px;">\n			</button>\n			<button ion-button (click)="downloadInbox(messageData[\'DOWNLOAD_SURAT\'])">\n				<ion-icon style="font-size:2.4rem;" name="md-download" color="light"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<div *ngIf="isLoading == true && isEmptyObject(messageDetail)">\n		<ion-item no-lines>\n			<div class="animate-skeleton-background load-2"></div>\n			<div class="animate-skeleton-background load-3"></div>\n			<div class="garis"></div>\n			<div class="animate-skeleton-background load-1"> </div>\n			<div class="animate-skeleton-background load-3"></div>\n			<div class="animate-skeleton-background load-1"> </div>\n			<div class="animate-skeleton-background load-3"></div>\n		</ion-item>\n	</div>\n	<div *ngIf="isLoading == false && !isEmptyObject(messageDetail)">\n			<ion-card class="header-menu">\n					<ion-item no-padding margin-left>\n						<span ion-text text-wrap style="font-size:1.5rem;">\n							<b>{{ messageDetail[\'Perihal\'] }}</b>\n						</span> <br>\n						<span ion-text text-wrap style="font-size:1.2rem; color:gray;">\n							{{ messageDetail[\'No Surat\'] }}\n						</span>\n						<span item-end (click)="show()">\n							<button ion-button icon-only clear >\n								<ion-icon name="ios-arrow-down-outline" *ngIf="!showDetailPesan"></ion-icon>\n								<ion-icon name="ios-arrow-up-outline" *ngIf="showDetailPesan"></ion-icon>\n							</button>\n						</span>\n					</ion-item>\n				</ion-card>\n		\n				<ion-card class="my-card" style="margin-top:10px !important;" *ngIf="showDetailPesan">\n					<ion-item>\n						<span ion-text text-wrap class="font" color="color4">Tanggal :\n						</span><br />\n						<span ion-text text-wrap color=\'dark\' class="font2">\n							{{ messageDetail[\'Tanggal Surat\'] }}\n						</span> <br>\n		\n						<span ion-text text-wrap class="font" color="color4">Pengirim :\n						</span><br />\n						<span ion-text text-wrap color=\'dark\' class="font2">\n							{{ messageDetail[\'Pengirim\'][\'Nama Jabatan\'] }}\n						</span> <br>\n\n						<div *ngIf="messageDetail[\'Kode Jenis Surat\'] == \'surat_perintah\' || messageDetail[\'Kode Jenis Surat\'] == \'undangan\' || messageDetail[\'Kode Jenis Surat\'] == \'surat_dinas\' || messageDetail[\'Kode Jenis Surat\'] == \'nd_undangan\' || messageDetail[\'Kode Jenis Surat\'] == \'nd_sppd\'" >\n							<span ion-text text-wrap class="font" color="color4">Tanggal Mulai :\n							</span><br />\n							<span ion-text text-wrap color=\'dark\' class="font2">\n								{{ messageDetail[\'Agenda\'][\'Tanggal Mulai\'] }}\n							</span> \n							<span ion-text text-wrap *ngIf="messageDetail[\'Agenda\'][\'Tanggal Mulai\'] == null"  color=\'dark\' class="font2">\n								-\n							</span>\n							<br>\n	\n							<span ion-text text-wrap class="font" color="color4">Tanggal Akhir :\n							</span><br />\n							<span ion-text text-wrap color=\'dark\' class="font2">\n								{{ messageDetail[\'Agenda\'][\'Tanggal Akhir\'] }}\n							</span> \n							<span ion-text text-wrap *ngIf="messageDetail[\'Agenda\'][\'Tanggal Akhir\'] == null"  color=\'dark\' class="font2">\n								-\n							</span>\n							<br>\n	\n							<span ion-text text-wrap class="font" color="color4">Lokasi :\n							</span><br />\n							<span ion-text text-wrap color=\'dark\' class="font2">\n								{{ messageDetail[\'Agenda\'][\'Lokasi\'] }}\n							</span> \n							<span ion-text text-wrap *ngIf="messageDetail[\'Agenda\'][\'Lokasi\'] == null"  color=\'dark\' class="font2">\n								-\n							</span>\n							<br>\n						</div>\n		\n						<div *ngIf="messageDetail[\'Penerima Jabatan\'].length > 0">\n							<span ion-text text-wrap class="font" color="color4">Penerima Jabatan :\n							</span>\n							<span ion-text text-wrap class="font" color="primary"\n								*ngIf="messageDetail[\'Penerima Jabatan\'].length > 1" (click)="showMore(1)" style="float:right;">\n								View more\n							</span> <br>\n							<div *ngIf="!showAllPenerimaJabatan">\n								<span ion-text text-wrap color=\'dark\' class="font2">\n									1. {{ messageDetail[\'Penerima Jabatan\'][0] }}\n								</span>\n							</div>\n							<div *ngIf="showAllPenerimaJabatan">\n								<span *ngFor="let p of messageDetail[\'Penerima Jabatan\']; let i = index" ion-text text-wrap\n									color=\'dark\' class="font2">\n									{{ i + 1 }}. {{ p }} <br />\n								</span>\n							</div>\n						</div>\n						<div *ngIf="messageDetail[\'Tembusan Jabatan\'].length > 0">\n							<span ion-text text-wrap class="font" color="color4">Tembusan Jabatan :\n							</span>\n							<span ion-text text-wrap class="font" color="primary"\n								*ngIf="messageDetail[\'Tembusan Jabatan\'].length > 1" (click)="showMore(2)" style="float:right;">\n								View more\n							</span> <br>\n							<div *ngIf="!showAllTembusanJabatan">\n								<span ion-text text-wrap color=\'dark\' class="font2">\n									1. {{ messageDetail[\'Tembusan Jabatan\'][0] }}\n								</span>\n							</div>\n							<div *ngIf="showAllTembusanJabatan">\n								<span *ngFor="let p of messageDetail[\'Tembusan Jabatan\']; let i = index" ion-text text-wrap\n									color=\'dark\' class="font2">\n									{{ i + 1 }}. {{ p }} <br />\n								</span>\n							</div>\n						</div>\n		\n						<div *ngIf="messageDetail[\'Penerima Pekerja\'].length > 0">\n							<span ion-text text-wrap class="font" color="color4">Penerima Pekerja :\n							</span>\n							<span ion-text text-wrap class="font" color="primary"\n								*ngIf="messageDetail[\'Penerima Pekerja\'].length > 1" (click)="showMore(3)" style="float:right;">\n								View more\n							</span> <br>\n							<div *ngIf="!showAllPenerimaPekerja">\n								<span ion-text text-wrap color=\'dark\' class="font2">\n									1. {{ messageDetail[\'Penerima Pekerja\'][0] }}\n								</span>\n							</div>\n							<div *ngIf="showAllPenerimaPekerja">\n								<span *ngFor="let p of messageDetail[\'Penerima Pekerja\']; let i = index" ion-text text-wrap\n									color=\'dark\' class="font2">\n									{{ i + 1 }}. {{ p }} <br />\n								</span>\n							</div>\n						</div>\n		\n						<div *ngIf="messageDetail[\'Tembusan Pekerja\'].length > 0">\n							<span ion-text text-wrap class="font" color="color4">Tembusan Pekerja :\n							</span>\n							<span ion-text text-wrap class="font" color="primary"\n								*ngIf="messageDetail[\'Tembusan Pekerja\'].length > 1" (click)="showMore(4)" style="float:right;">\n								View more\n							</span> <br>\n							<div *ngIf="!showAllTembusanPekerja">\n								<span ion-text text-wrap color=\'dark\' class="font2">\n									1. {{ messageDetail[\'Tembusan Pekerja\'][0] }}\n								</span>\n							</div>\n							<div *ngIf="showAllTembusanPekerja">\n								<span *ngFor="let p of messageDetail[\'Tembusan Pekerja\']; let i = index" ion-text text-wrap\n									color=\'dark\' class="font2">\n									{{ i + 1 }}. {{ p }} <br />\n								</span>\n							</div>\n						</div>\n		\n						<div *ngIf="messageDetail[\'Penerima Non Pekerja\'].length > 0">\n							<span ion-text text-wrap class="font" color="color4">Penerima Non Pekerja\n								: </span>\n							<span ion-text text-wrap class="font" color="primary"\n								*ngIf="messageDetail[\'Penerima Non Pekerja\'].length > 1" (click)="showMore(5)"\n								style="float:right;">\n								View more\n							</span> <br>\n							<div *ngIf="!showAllPenerimaNonPekerja">\n								<span ion-text text-wrap color=\'dark\' class="font2">\n									1. {{ messageDetail[\'Penerima Non Pekerja\'][0] }}\n								</span>\n							</div>\n							<div *ngIf="showAllPenerimaNonPekerja">\n								<span *ngFor="let p of messageDetail[\'Penerima Non Pekerja\']; let i = index" ion-text text-wrap\n									color=\'dark\' class="font2">\n									{{ i + 1 }}. {{ p }} <br />\n								</span>\n							</div>\n						</div>\n		\n						<div *ngIf="messageDetail[\'Tembusan Non Pekerja\'].length > 0">\n							<span ion-text text-wrap class="font" color="color4">Tembusan Non Pekerja\n								: </span>\n							<span ion-text text-wrap class="font" color="primary"\n								*ngIf="messageDetail[\'Tembusan Non Pekerja\'].length > 1" (click)="showMore(6)"\n								style="float:right;">\n								View more\n							</span> <br>\n							<div *ngIf="!showAllTembusanNonPekerja">\n								<span ion-text text-wrap color=\'dark\' class="font2">\n									1. {{ messageDetail[\'Tembusan Non Pekerja\'][0] }}\n								</span>\n							</div>\n							<div *ngIf="showAllTembusanNonPekerja">\n								<span *ngFor="let p of messageDetail[\'Tembusan Non Pekerja\']; let i = index" ion-text text-wrap\n									color=\'dark\' class="font2">\n									{{ i + 1 }}. {{ p }} <br />\n								</span>\n							</div>\n						</div>\n		\n						<span ion-text text-wrap class="font" style="color:#959595">Attachment :\n						</span><br />\n						<div *ngIf="attachmentList.length > 0">\n							<span ion-text text-wrap color=\'dark\' *ngFor="let attachment of attachmentList"\n								(click)="downloadAttach(attachment)" class="font2" color="primary">\n								{{ subStrAttachment(attachment) }}\n								<br>\n							</span>\n						</div>\n						<div *ngIf="attachmentList.length == 0">\n							<span ion-text text-wrap color=\'dark\' class="font2" color="primary">\n								-\n							</span>\n						</div>\n					</ion-item>\n		\n				</ion-card>\n		\n				<br>\n\n		<ion-grid no-padding fixed>		\n\n			<ion-row>\n				<ion-col col-12>\n					<ion-list>\n						<ion-item no-lines *ngIf="messageDetail[\'Jenis Surat\'] == \'Surat Perintah\'" padding-left padding-right\n							text-wrap>\n							<span ion-text text-wrap class="font2" style="color:black;"><b>Dasar</b></span>\n						</ion-item>\n\n						<ion-item *ngIf="messageDetail[\'Jenis Surat\'] == \'Surat Perintah\'" padding-left padding-right\n							text-wrap >\n							<div [innerHtml]="dasarSuratPerintah"></div>\n						</ion-item>\n\n						<ion-item no-lines *ngIf="messageDetail[\'Jenis Surat\'] == \'Surat Perintah\'" padding-left padding-right\n							text-wrap>\n							<span ion-text text-wrap class="font2" style="color:black;"><b>Perintah</b></span>\n						</ion-item>\n\n						<ion-item *ngIf="messageDetail[\'Jenis Surat\'] == \'Surat Perintah\'" padding-left padding-right\n							text-wrap >\n							<div [innerHtml]="isiPerintah"></div>\n						</ion-item>\n\n						<ion-item *ngIf="messageDetail[\'Jenis Surat\'] != \'Surat Perintah\'" padding-left padding-right\n							margin-bottom text-wrap>\n							<div [innerHtml]="messageDetail[\'Isi Surat\']"></div>\n						</ion-item>\n					</ion-list>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/outbox-detail/outbox-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], OutboxDetailPage);
    return OutboxDetailPage;
}());

//# sourceMappingURL=outbox-detail.js.map

/***/ })

});
//# sourceMappingURL=12.js.map