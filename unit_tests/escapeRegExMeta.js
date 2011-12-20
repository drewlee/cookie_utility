function escapeRegExMeta(str){
	str = str.replace(/[\\^[\].${}*()+|?<>]/g, function(s){
		return '\\'+s; 
	});
	
	return str;
}

function getValue(key, str){
	key = escapeRegExMeta(key);
	var value = str.match(new RegExp('(^'+key+'|; '+key+')=([^;]+)'));
	
	if(value){value = value.pop();}
	
	return value;
}