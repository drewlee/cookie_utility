function generateRandomCookie(){
	var chars = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0,!,@,#,$,%,^,&,*,(,),-,_,+,`,~,[,],{,},:,\',",<,>,?,.,/,\\,|'.split(',');
	var charsLen = chars.length;
	
	// how many key/value pairs?
	var pairs = Math.ceil(Math.random() * 10);
	var keys = [];
	var values = [];
	
	var chLength;
	var str = '';
	
	for(var i=0; i<pairs; i++){
		chLength = Math.ceil(Math.random() * 30);
		
		for(var j=0; j<chLength; j++){
			str += chars[Math.floor(Math.random() * charsLen)];
		}
		
		keys.push(str);
		str = '';
		
		chLength = Math.ceil(Math.random() * 30);
		
		for(var j=0; j<chLength; j++){
			str += chars[Math.floor(Math.random() * charsLen)];
		}
		
		values.push(str);
	}
	
	var keysValues = [];
	for(var i=0; i<pairs; i++){
		keysValues.push(keys[i] + '=' + values[i]);
	}
	
	var cookie = keysValues.join('; ');
	
	return {
		keys: keys,
		values: values,
		cookie: cookie
	};
}

describe('get key', function(){
	var idx = 0;
	for(var i=0; i<30; i++){
		it('retrieves key value', function(){
			var obj = generateRandomCookie();
			var keyIdx = Math.floor(Math.random() * obj.keys.length);
			
			console.log('index: ' + idx++, '\n', 'key index: ' + keyIdx, '\n', 'key:   ' + obj.keys[keyIdx], '\n', 'value: ' + obj.values[keyIdx]);
			
			expect(getValue(obj.keys[keyIdx], obj.cookie)).toEqual(obj.values[keyIdx]);
		});
	}
});