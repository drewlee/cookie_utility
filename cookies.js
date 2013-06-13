var Cookie = (function(){
  function escapeRegExMeta(str){
    var meta = /[\\\^\[\].${}*()+|?<>]/g;

    str = str.replace(meta, function(match){
      return '\\' + match; 
    });
  
    return str;
  }
  
  function getValue(key){
    key = escapeRegExMeta(key);

    var regex = new RegExp('(^' + key + '|;\\s?' + key + ')=([^;]+)'),
        value = document.cookie.match(regex);
    
    if (value){
      value = value.pop();
    }
    
    return value;
  }
  
  return {
    _escapeRegExMeta: escapeRegExMeta,
    _getValue: getValue,

    set: function(name, value, opts){
      var a = [name + "=" + escape(value)];
      opts = opts || {};
      
      if ('expires' in opts){
        a.push("expires=" + opts.expires.toUTCString());
      }

      if ('path' in opts){
        a.push("path=" + escape(opts.path));
      }

      if ('domain' in opts){
        a.push("domain=" + escape(opts.domain));
      }

      if ('secure' in opts){
        a.push("secure");
      }
      
      document.cookie = a.join("; ");
      
      if (getValue(name)){
        return true;
      }
      
      return false;
    },
    
    get: function(name){
      var value = getValue(name);
      return !value ? false : unescape(value);
    },
    
    remove: function(name, opts){
      if (getValue(name)){
        opts = opts || {};
        
        var a = [name + "=null", "expires=" + new Date(new Date().getTime() - (1000*60*60*24*30)).toUTCString()];
        
        if ('path' in opts){
          a.push("path=" + escape(opts.path));
        }

        if ('domain' in opts){
          a.push("domain=" + escape(opts.domain));
        }
        
        document.cookie = a.join("; ");
        
        if (!getValue(name)){
          return true;
        }
      }
      
      return false;
    }
  };
})();