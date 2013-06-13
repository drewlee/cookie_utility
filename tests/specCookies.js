describe('get key', function(){
	// create random cookie values
	var chars = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0,!,@,#,$,%,^,&,*,(,),-,_,+,`,~,[,],{,},:,\',",<,>,?,.,/,\\,|'.split(',');
	var charsLen = chars.length;
	var chLength;
	var key = '';
	var value = '';
	
	chLength = Math.ceil(Math.random() * 30);
	for(var j=0; j<chLength; j++){
		key += chars[Math.floor(Math.random() * charsLen)];
	}
		
	chLength = Math.ceil(Math.random() * 30);		
	for(var j=0; j<chLength; j++){
		value += chars[Math.floor(Math.random() * charsLen)];
	}
	
	
	it('should create a cookie successfully', function(){
		expect(Cookie.set(key, value, {expires: new Date(new Date().getTime() + (1000*60))})).toEqual(true);
		console.log(document.cookie);
	});
	
	it('should retrieve a cookie value', function(){
		expect(Cookie.get(key)).toEqual(value);
	});
	
	it('should delete the cookie', function(){
		expect(Cookie.remove(key)).toEqual(true);
	});
});
