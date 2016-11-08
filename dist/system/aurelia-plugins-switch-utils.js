'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var Utils;

  

  return {
    setters: [],
    execute: function () {
      _export('Utils', Utils = function () {
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
      }());

      _export('Utils', Utils);
    }
  };
});