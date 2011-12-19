/*
 * JavaScript Cookie Utility v1.2
 *
 * Copyright (c) 2011 Andrew A. Lee
 *
 * Dual licensed under the MIT and GPL licenses, located in
 * MIT-LICENSE.txt and GPL-LICENSE.txt respectively.
 *
 * Sun Dec 18 2011 22:26:46 GMT-0600 (CST)
 */
var Cookie = (function(){
	function escapeRegExMeta(str){
		str = str.replace(/[\\^[\].${}*(+)|?<>]/g, function(s){
			return '\\'+s; 
		});
	
		return str;
	}
	
	function getValue(key){
		key = escapeRegExMeta(key);
		var value = document.cookie.match(new RegExp('(^'+key+'|; '+key+')=([^;]+)'));
		
		if(value){value = value.pop();}
		
		return value;
	}
	
	return {
		set: function(name, value, opts){
			var a = [name + "=" + escape(value)];
			opts = opts || {};
			
			if('expires' in opts){a.push("expires=" + opts.expires.toUTCString())};
			if('path' in opts){a.push("path=" + escape(opts.path))};
			if('domain' in opts){a.push("domain=" + escape(opts.domain))};
			if('secure' in opts){a.push("secure")};
			
			document.cookie = a.join("; ");
			
			if(getValue(name)){return true;}
			
			return false;
		},
		
		get: function(name){
			var value = getValue(name);
			return !value ? false : unescape(value);
		},
		
		remove: function(name, opts){
			if(getValue(name)){
				opts = opts || {};
				
				var a = [name + "=null", "expires=" + new Date(new Date().getTime() - (1000*60*60*24*30) - 1).toUTCString()];
				
				if('path' in opts){a.push("path=" + escape(opts.path))};
				if('domain' in opts){a.push("domain=" + escape(opts.domain))};
				
				document.cookie = a.join("; ");
				
				if(!getValue(name)){return true;}
			}
			
			return false;
		}
	};
})();