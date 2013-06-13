describe('Cookie life cycle.', function(){
  var key,
      value;

  function generate(){
    var str;

    while (true){
      str = randomize('all', 30);

      if (str.indexOf('=') === -1 && str.indexOf(';') === -1){
        break;
      }
    }

    return str;
  }

  key = generate();
  value = generate();

  //console.log(key);
  //console.log(value);

  it('should create a cookie', function(){
    expect(
      Cookie.set(
        key,
        value,
        { expires: new Date( Date.now() + (1000 * 60) ) }
      )
    ).toEqual(true);
    //console.log(document.cookie);
  });
  
  it('should retrieve a cookie value', function(){
    expect( Cookie.get(key) ).toEqual( value );
  });
  
  it('should delete the cookie', function(){
    expect( Cookie.remove(key) ).toEqual(true);
  });
});
