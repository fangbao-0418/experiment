(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  var a = [1, 2, 3];
  if (a.includes(2)) {
      console.log(a);
  }

})));
