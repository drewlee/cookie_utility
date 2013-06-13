(function(factory){
  if (typeof define === 'function' && define.amd){
    define(factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object'){
    module.exports = factory();
  } else {
    this.randomize = factory();
  }
}).call(this, function(){
  'use strict';

  var chars = {};

  chars.num      = '0123456789';
  chars.alphalc  = 'abcdefghijklmnopqrstuvwxyz';
  chars.alphauc  = chars.alphalc.toUpperCase();
  chars.alpha    = chars.alphalc + chars.alphauc;
  chars.alphanum = chars.alpha + chars.num;
  chars.special  = '!@#$%^&*()-_=+`~[]{}\\|;:\'"<>.,/?';
  chars.all      = chars.alphanum + chars.special;

  var randomize = function genrs(type, max, fixed){
    type = type in genrs._chars ? type : 'all';
    
    var str = '',
        len = fixed ? max : Math.ceil(Math.random() * (max || 10)),
        idx = genrs._chars[type].length;
    
    for (var i=0; i<len; i++){
      str += genrs._chars[type][Math.floor(Math.random() * idx)];
    }
    
    return str;
  };

  randomize._chars = chars;

  return randomize;
});