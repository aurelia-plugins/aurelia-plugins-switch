define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _class, _temp;

  var Utilities = exports.Utilities = (_temp = _class = function () {
    function Utilities() {
      _classCallCheck(this, Utilities);
    }

    Utilities.random = function random(length) {
      var characters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.allCharacters;

      var result = new Array(length);
      for (var i = 0; i < length; i++) {
        result[i] = characters[Math.floor(Math.random() * characters.length)];
      }return result.join('');
    };

    return Utilities;
  }(), _class.allCharacters = 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789', _temp);
});