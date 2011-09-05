/*
 * JavaScript Cookie Utility v1.1
 *
 * Copyright (c) 2011 Andrew A. Lee
 *
 * Dual licensed under the MIT and GPL licenses, located in
 * MIT-LICENSE.txt and GPL-LICENSE.txt respectively.
 *
 * Mon Sep 05 2011 17:26:05 GMT-0500 (CDT)
 */
var Cookie = {
	setCookie: function(name, value, opts){
		var a = [escape(name) + "=" + escape(value)];
		if(opts){
			if(opts.expires)a.push("expires=" + opts.expires.toUTCString());
			if(opts.path)a.push("path=" + escape(opts.path));
			if(opts.domain)a.push("domain=" + escape(opts.domain));
			if(opts.secure)a.push("secure");
		}
		document.cookie = a.join("; ");
		if(document.cookie.indexOf(escape(name)) > -1)return true;
		return false;
	},
	getCookie: function(name){
		name += '=';
		var c = document.cookie, pos = c.indexOf(name);
		if(pos > -1){
			var semi = c.indexOf(';', pos);
			var value = c.substring(pos + name.length, semi > -1 ? semi : c.length);
			return unescape(value);
		}
		return null;
	},
	deleteCookie: function(name, opts){
		name = escape(name);
		if(document.cookie.indexOf(name) > -1){
			var a = [name + "=null", "expires=" + new Date(new Date().getTime() - (1000*60*60*24*360) - 20).toUTCString()];
			if(opts){
				if(opts.path)a.push("path=" + escape(opts.path));
				if(opts.domain)a.push("domain=" + escape(opts.domain));
			}
			document.cookie = a.join("; ");
			if(document.cookie.indexOf(name) < 0)return true;
		}
		return false;
	}
};