define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var Utils = exports.Utils = function () {
    function Utils() {
      
    }

    Utils.random = function random(length, characters) {
      var result = new Array(length);
      characters = characters || 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789';
      for (var i = 0, j = length; i < j; i++) {
        result[i] = characters[Math.floor(Math.random() * characters.length)];
      }return result.join('');
    };

    return Utils;
  }();
});