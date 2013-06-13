----------
BACKGROUND
----------

Working with cookies on the client side is short of being straight forward. As such, it is
helpful to use utility functions to abstract some of the JavaScript cookie management methodoligies.
I wrote this utility as an exercise to gain a deeper understanding of cookies and the result is
a great set of methods that I hope others will also find useful.


-----
USAGE
-----

Create Cookie
-------------

boolean Cookie.set(str name, str value[, obj opts])

arguments:
  name - the name of the cookie specified as a string
  value - the value the named cookie will store as a string
  opts - an object that allows for addition settings:
    expires - date object specifying when the cookie expires
    path - the url path the cookie can be accessed from
    domain - domain on which the cookie can be accessed from
    secure - if the cookie is being set over a secure connection, specify as boolean true to enable
  
a boolean value is returned based on whether or not the cookie was successfully created

basic example:
Cookie.set('useremail', 'john@johnny.com');

example with options:
Cookie.set('useremail', 'john@johnny.com', {
    expires: new Date(new Date().getTime() + (1000*60*60*24)), // expires in 24 hours
    path: '/',
    domain: 'mail.mysite.com'
});


Retrieve Cookie Value
---------------------

mixed Cookie.get(str name)

arguments:
  name - the name of the cookie to retrieve the value for, specified as a string

if a cookie with the specified name cannot be found, boolean false is returned
otherwise the value of the cookie is returned as a string

example:
var email = Cookie.get('useremail');


Delete Cookie
-------------

boolean Cookie.remove(str name[, obj opts])

arguments:
  name - the name of the cookie to delete, specified as a string
  opts - an object that allows for the specification of additional settings, as setting should match the
         options that are specified when the cookie was created
    path - the url path from which the cookie is accessed from
	domain - the domain from which the cookie is accessed from

If the cookie is successfully deleted, true is returned. Otherwise, the method returns boolean false.

basic example:
Cookie.remove('useremail');

example with options:
Cookie.remove('useremail', {
    path: '/',
    domain: 'mail.mysite.com'
});


See the included index.html file for additional examples of usage.