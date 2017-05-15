'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var Utilities;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Utilities', Utilities = function () {
        function Utilities() {
          _classCallCheck(this, Utilities);
        }

        Utilities.random = function random(length, values) {
          var result = new Array(length);
          var characters = values || 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789';
          for (var i = 0, j = length; i < j; i += 1) {
            result[i] = characters[Math.floor(Math.random() * characters.length)];
          }return result.join('');
        };

        return Utilities;
      }());

      _export('Utilities', Utilities);
    }
  };
});