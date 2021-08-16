webpackJsonp([0],{

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateAbsensiPageModule", function() { return RateAbsensiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rate_absensi__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RateAbsensiPageModule = /** @class */ (function () {
    function RateAbsensiPageModule() {
    }
    RateAbsensiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rate_absensi__["a" /* RateAbsensiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rate_absensi__["a" /* RateAbsensiPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], RateAbsensiPageModule);
    return RateAbsensiPageModule;
}());

//# sourceMappingURL=rate-absensi.module.js.map

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

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);


var noop = function () {
};
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return Ionic2Rating; }),
    multi: true
};
var Ionic2Rating = (function () {
    function Ionic2Rating() {
        this._max = 5;
        this._readOnly = false;
        this._emptyStarIconName = 'star-outline';
        this._halfStarIconName = 'star-half';
        this._starIconName = 'star';
        this._nullable = false;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(Ionic2Rating.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (val) {
            this._max = this.getNumberPropertyValue(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (val) {
            this._readOnly = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "emptyStarIconName", {
        get: function () {
            return this._emptyStarIconName;
        },
        set: function (val) {
            this._emptyStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "halfStarIconName", {
        get: function () {
            return this._halfStarIconName;
        },
        set: function (val) {
            this._halfStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "starIconName", {
        get: function () {
            return this._starIconName;
        },
        set: function (val) {
            this._starIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "nullable", {
        get: function () {
            return this._nullable;
        },
        set: function (val) {
            this._nullable = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.ngOnInit = function () {
        // ngFor needs an array
        this.starIndexes = Array(this.max).fill(1).map(function (x, i) { return i; });
    };
    Ionic2Rating.prototype.getStarIconName = function (starIndex) {
        if (this.value === undefined) {
            return this.emptyStarIconName;
        }
        if (this.value > starIndex) {
            if (this.value < starIndex + 1) {
                return this.halfStarIconName;
            }
            else {
                return this.starIconName;
            }
        }
        else {
            return this.emptyStarIconName;
        }
    };
    Object.defineProperty(Ionic2Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue) {
                this.innerValue = value;
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Ionic2Rating.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    Ionic2Rating.prototype.registerOnTouched = function (fn) {
    };
    Ionic2Rating.prototype.onKeyDown = function (event) {
        if (/(37|38|39|40)/.test(event.which)) {
            event.preventDefault();
            event.stopPropagation();
            var newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
            return this.rate(newValue);
        }
    };
    Ionic2Rating.prototype.rate = function (value) {
        if (this.readOnly || value < 0 || value > this.max) {
            return;
        }
        if (value === this.value && this.nullable) {
            value = null;
        }
        this.value = value;
    };
    Ionic2Rating.prototype.isTrueProperty = function (val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on');
        }
        return !!val;
    };
    Ionic2Rating.prototype.getNumberPropertyValue = function (val) {
        if (typeof val === 'string') {
            return parseInt(val.trim());
        }
        return val;
    };
    Ionic2Rating.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'rating',
                    styles: ["\n    ul.rating li {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 10px;\n    }\n    ul.rating li i {\n      font-size: 30px;\n    }\n  "],
                    template: "\n    <ul class=\"rating\" (keydown)=\"onKeyDown($event)\">\n      <li *ngFor=\"let starIndex of starIndexes\" tappable (click)=\"rate(starIndex + 1)\">\n        <ion-icon [name]=\"getStarIconName(starIndex)\">\n        </ion-icon>\n      </li>\n    </ul>",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Ionic2Rating.ctorParameters = [];
    Ionic2Rating.propDecorators = {
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'readOnly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'emptyStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'halfStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'starIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'nullable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    };
    return Ionic2Rating;
}());
//# sourceMappingURL=ionic2-rating.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__ = __webpack_require__(345);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic2_rating__ = __webpack_require__(343);
/* unused harmony reexport Ionic2Rating */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2RatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__ = __webpack_require__(343);




var Ionic2RatingModule = (function () {
    function Ionic2RatingModule() {
    }
    Ionic2RatingModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */]
                    ],
                    schemas: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ionic2RatingModule.ctorParameters = [];
    return Ionic2RatingModule;
}());
//# sourceMappingURL=ionic2-rating.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateAbsensiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__soap_service__ = __webpack_require__(341);
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
 * Generated class for the RateAbsensiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RateAbsensiPage = /** @class */ (function () {
    function RateAbsensiPage(navCtrl, navParams, viewCtrl, http, storage, soapService, loadingCtrl, toastCtrl, datepipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.storage = storage;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.datepipe = datepipe;
        this.rate = '';
        this.activity = '';
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            console.log(_this.userdataTPK);
        });
        this.type = navParams.get('type');
        this.data = navParams.get('data');
        this.shiftDate = navParams.get('shiftDate');
        // this.shiftDate = datepipe.transform(this.shiftDate,'dd/MM/yyyy');
        this.rateFor = navParams.get('rateFor');
        this.fromPage = navParams.get('fromPage');
        console.log(this.data);
        if (this.data['CHECK_IN_ACTIVITY_SPV'] != '') {
            this.activity = this.data['CHECK_IN_ACTIVITY_SPV'];
        }
        console.log(this.data);
    }
    RateAbsensiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RateAbsensiPage');
    };
    RateAbsensiPage.prototype.onModelChange = function () {
        console.log(this.rate);
    };
    RateAbsensiPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    RateAbsensiPage.prototype.isDisable = function () {
        if (this.type == 'rate' && this.fromPage == 'AbsenMobileDetailPage') {
            if (this.rateFor == 'bawahan') {
                if (this.rate == '' || this.rate == null || this.activity == '' || this.activity == null) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else if (this.rateFor == 'atasan') {
                if (this.rate == '' || this.rate == null) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else if (this.type == 'rate' && this.fromPage == 'InsertNoteAttendancePage') {
            if (this.rate == '' || this.rate == null) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (this.type == 'task' && this.fromPage == 'AbsenMobileDetailPage') {
            if (this.activity == '' || this.activity == null) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    RateAbsensiPage.prototype.doInsert = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Mohon tunggu...",
            spinner: 'dots',
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        loader.present();
        var rate = '0';
        var rate_spv = '0';
        var activity_spv = '';
        var check_type = '';
        var pesan = '';
        // if (this.fromPage == 'AbsenMobileDetailPage') {
        //   if (this.type == 'rate') {
        //     rate_spv = this.rate;
        //     rate = (this.data['CHECK_IN_RATE'] == '') ? '0' : this.data['CHECK_IN_RATE'];
        //     this.activity = this.data['CHECK_IN_ACTIVITY_SPV'];
        //   } else if (this.type == 'task') {
        //     rate_spv = this.rate;
        //     rate = (this.data['CHECK_IN_RATE'] == '') ? '0' : this.data['CHECK_IN_RATE'];        
        //   }    
        // } else if (this.fromPage == 'InsertNoteAttendancePage') {
        //   rate = this.rate;
        //   rate_spv = (this.data['CHECK_IN_RATE_SPV'] == '') ? '0' : this.data['CHECK_IN_RATE_SPV'];
        // }
        if (this.type == 'rate' && this.fromPage == 'AbsenMobileDetailPage') {
            if (this.rateFor == 'bawahan') {
                rate_spv = this.rate;
                activity_spv = this.activity;
                check_type = 'OUT';
                pesan = 'Evaluasi';
            }
            else if (this.rateFor == 'atasan') {
                rate = this.rate;
                activity_spv = this.data['CHECK_IN_ACTIVITY_SPV'];
                check_type = 'IN';
                pesan = 'Evaluasi';
            }
        }
        else if (this.type == 'rate' && this.fromPage == 'InsertNoteAttendancePage') {
            rate = this.rate;
            activity_spv = this.data['CHECK_IN_ACTIVITY_SPV'];
            check_type = 'IN';
            pesan = 'Evaluasi';
        }
        else if (this.type == 'task' && this.fromPage == 'AbsenMobileDetailPage') {
            check_type = 'IN';
            activity_spv = this.activity;
            pesan = 'Arahan';
        }
        else {
            return true;
        }
        var date = new Date();
        var formattedDate = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
        var rand = Math.floor((Math.random() * 100000000) + 1);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': "*/*",
            //'Access-Control-Allow-Origin':'http://localhost:8100',
            // 'x-ibm-client-id': client_id,
            // 'x-ibm-client-secret': client_secret,
            'username': __WEBPACK_IMPORTED_MODULE_2__config__["d" /* api_user */],
            'password': __WEBPACK_IMPORTED_MODULE_2__config__["b" /* api_pass */],
            'externalId': rand.toString(),
            'timestamp': formattedDate,
            'Content-Type': 'application/json'
        });
        // this.http.post(api_base_url_apim_absensi + 'absen', {        
        //   "nipp": this.data['NIPP'],
        //   "photo": '',
        //   "lat": '',
        //   "long": '',
        //   "attendance_type": '',
        //   "geo": '',
        //   "check_type": check_type,
        //   'activity': '',
        //   'activity_spv': activity_spv,
        //   'rate': rate.toString(),
        //   'rate_spv': rate_spv.toString(),
        //   'act_type': '3'      
        // }, {
        //   // headers
        // }).subscribe(data => {
        //   console.log(data);
        //   if (data['status'] == "SUCCESS") {
        //     let toast = this.toastCtrl.create({
        //       message: "Berhasil menambahkan " + pesan + " .",
        //       duration: 4000,
        //       position: 'bottom'
        //     });
        //     loader.dismiss();
        //     toast.present();
        //     this.viewCtrl.dismiss({
        //       isSubmit: true
        //     });
        //   } else {
        //     let toast = this.toastCtrl.create({
        //       message: "gagal menambahkan " + pesan + ", coba kembali.",
        //       duration: 3000,
        //       position: 'bottom'
        //     });
        //     toast.present();
        //     loader.dismiss();
        //     this.navCtrl.setRoot('HomePage');
        //   }
        // }, err => {
        //   console.log(err);
        //   let toast = this.toastCtrl.create({
        //     message: "gagal menambahkan "  +  pesan + ", coba kembali.",
        //     duration: 3000,
        //     position: 'bottom'
        //   });
        //   toast.present();
        //   loader.dismiss();
        //   this.navCtrl.setRoot('HomePage');
        // });
        if (this.type == 'task' && this.fromPage == 'AbsenMobileDetailPage') {
            var tgl_awal = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
            this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["c" /* api_res */] + "am7_activity.php", {
                "usernameEDI": "EDI-USERNAME",
                "passwordEDI": "RURJLVBBU1NXT1JE",
                "id_user": this.data['ID_USER'],
                "nipp": this.data['NIPP'],
                "arr_param": [
                    {
                        'att_activity_id': '',
                        'activity': '(Arahan Atasan) ' + activity_spv,
                        'status': '',
                        'tgl_awal': tgl_awal,
                        'tgl_akhir': '',
                    }
                ],
                "action": 'INSERT',
                "tgl": "",
            }, {}).subscribe(function (data) {
                console.log(data);
                if (data['rcmsg'] == "SUCCESS") {
                    // this.pushNotif();
                    var toast = _this.toastCtrl.create({
                        message: "Berhasil menambahkan " + pesan + " .",
                        duration: 4000,
                        position: 'bottom'
                    });
                    loader.dismiss();
                    toast.present();
                    _this.viewCtrl.dismiss({
                        isSubmit: true
                    });
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "gagal menambahkan " + pesan + ", coba kembali.",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    loader.dismiss();
                    // this.navCtrl.setRoot('HomePage');
                    _this.viewCtrl.dismiss({
                        isSubmit: false
                    });
                }
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: "gagal menambahkan " + pesan + ", coba kembali.",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loader.dismiss();
                // this.navCtrl.setRoot('HomePage');
                _this.viewCtrl.dismiss({
                    isSubmit: false
                });
            });
        }
        else {
            this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["c" /* api_res */] + "am1_insert_absen_res.php", {
                "usernameEDI": "EDI-USERNAME",
                "passwordEDI": "RURJLVBBU1NXT1JE",
                "nipp": this.data['NIPP'],
                "photo": '',
                "lat": '',
                "long": '',
                "attendance_type": '',
                "geo": '',
                "check_type": check_type,
                'activity': '',
                'activity_spv': activity_spv,
                'rate': rate.toString(),
                'rate_spv': rate_spv.toString(),
                'act_type': '3',
                'shift_date': this.shiftDate
            }, {}).subscribe(function (data) {
                console.log(data);
                if (data['rcmsg'] == "SUCCESS") {
                    var toast = _this.toastCtrl.create({
                        message: "Berhasil menambahkan " + pesan + " .",
                        duration: 4000,
                        position: 'bottom'
                    });
                    loader.dismiss();
                    toast.present();
                    _this.viewCtrl.dismiss({
                        isSubmit: true
                    });
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "gagal menambahkan " + pesan + ", coba kembali.",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    loader.dismiss();
                    // this.navCtrl.setRoot('HomePage');
                    _this.viewCtrl.dismiss({
                        isSubmit: false
                    });
                }
            }, function (err) {
                console.log(err);
                var toast = _this.toastCtrl.create({
                    message: "gagal menambahkan " + pesan + ", coba kembali.",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loader.dismiss();
                // this.navCtrl.setRoot('HomePage');
                _this.viewCtrl.dismiss({
                    isSubmit: false
                });
            });
        }
    };
    RateAbsensiPage.prototype.pushNotif = function () {
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_2__config__["c" /* api_res */], 'eoffice_notif_imove_nipp', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_2__config__["d" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_2__config__["b" /* api_pass */],
                nipp: [this.data['NIPP']],
                data: {
                    "res": "HomePage"
                },
                content: {
                    "en": "Anda mendapat arahan/tugas tambahan dari Atasan."
                },
                heading: {
                    "en": "Arahan/Tugas Tambahan dari Atasan"
                },
                id_kategori: ''
            }) }).then(function (result) {
            var hasil = JSON.parse(String(result));
            console.log("push notif : " + hasil);
        }).catch(function (error) {
            console.log(error);
        });
    };
    RateAbsensiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rate-absensi',
            providers: [__WEBPACK_IMPORTED_MODULE_6__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/rate-absensi/rate-absensi.html"*/'<!--\n  Generated template for the IpcContactRatingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content style="background-color:white">\n  <div class="my-header">\n    <span style="font-size:1.4rem"\n      *ngIf="type == \'rate\' && fromPage == \'AbsenMobileDetailPage\' && rateFor == \'bawahan\'">Nilai Kinerja Bawahan</span>\n    <span style="font-size:1.4rem"\n      *ngIf="type == \'rate\' && fromPage == \'AbsenMobileDetailPage\' && rateFor == \'atasan\'">Evaluasi Arahan/Dukungan\n      Atasan</span>\n    <span style="font-size:1.4rem" *ngIf="type == \'rate\' && fromPage == \'InsertNoteAttendancePage\'">Evaluasi\n      Arahan/Dukungan Atasan</span>\n    <span style="font-size:1.4rem"\n      *ngIf="type == \'task\' && fromPage == \'AbsenMobileDetailPage\'">Arahan Tambahan</span>\n    <br>\n    <div style="background-color:#FFF;margin-top:5px">\n      <hr class="hr" />\n    </div>\n  </div>\n\n  <div *ngIf="type == \'rate\' && fromPage == \'AbsenMobileDetailPage\'">\n    <rating [(ngModel)]="rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"\n      starIconName="star" nullable="true" (ngModelChange)="onModelChange()">\n    </rating>\n\n    <span *ngIf="rate == \'1\'" style="color: red;font-size:1.6rem;font-weight: 500;"><i>Kurang</i></span>\n    <span *ngIf="rate == \'2\'" style="color: red;font-size:1.6rem;font-weight: 500;"><i>Cukup</i></span>\n    <span *ngIf="rate == \'3\'" style="color: orange;font-size:1.6rem;font-weight: 500;"><i>Baik</i></span>\n    <span *ngIf="rate == \'4\'" style="color: green;font-size:1.6rem;font-weight: 500;"><i>Memuaskan</i></span>\n    <span *ngIf="rate == \'5\'" style="color: green;font-size:1.6rem;font-weight: 500;"><i>Sangat Memuaskan</i></span>\n\n    <ion-item padding *ngIf="rateFor == \'bawahan\'">\n      <ion-label stacked>Komentar</ion-label>\n      <ion-textarea [(ngModel)]="activity" #myInput id="myInput" rows="4">\n      </ion-textarea>\n    </ion-item>\n  </div>\n\n  <div *ngIf="type == \'rate\' && fromPage == \'InsertNoteAttendancePage\'">\n    <rating *ngIf="type == \'rate\'" [(ngModel)]="rate" readOnly="false" max="5" emptyStarIconName="star-outline"\n      halfStarIconName="star-half" starIconName="star" nullable="true" (ngModelChange)="onModelChange()">\n    </rating>\n\n    <span *ngIf="rate == \'1\'" style="color: red;font-size:1.6rem;font-weight: 500;"><i>Kurang</i></span>\n    <span *ngIf="rate == \'2\'" style="color: red;font-size:1.6rem;font-weight: 500;"><i>Cukup</i></span>\n    <span *ngIf="rate == \'3\'" style="color: orange;font-size:1.6rem;font-weight: 500;"><i>Baik</i></span>\n    <span *ngIf="rate == \'4\'" style="color: green;font-size:1.6rem;font-weight: 500;"><i>Memuaskan</i></span>\n    <span *ngIf="rate == \'5\'" style="color: green;font-size:1.6rem;font-weight: 500;"><i>Sangat Memuaskan</i></span>\n  </div>\n\n  <div *ngIf="type == \'task\' && fromPage == \'AbsenMobileDetailPage\'">\n    <ion-item padding *ngIf="type == \'task\'">\n      <ion-label stacked>Arahan</ion-label>\n      <ion-textarea [(ngModel)]="activity" #myInput id="myInput" rows="4">\n      </ion-textarea>\n    </ion-item>\n  </div>\n\n\n  <br>\n</ion-content>\n\n\n\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button style="border-radius:8px;" ion-button block (click)="doInsert()" [disabled]="isDisable()"\n          color="secondary">Submit</button>\n      </ion-col>\n      <ion-col col-6>\n        <button style="border-radius:8px;" ion-button block color="danger" (click)="cancel()">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/rate-absensi/rate-absensi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* DatePipe */]])
    ], RateAbsensiPage);
    return RateAbsensiPage;
}());

//# sourceMappingURL=rate-absensi.js.map

/***/ })

});
//# sourceMappingURL=0.js.map