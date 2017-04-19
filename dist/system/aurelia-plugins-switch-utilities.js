System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      let Utilities = class Utilities {
        static random(length, values) {
          const result = new Array(length);
          const characters = values || 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789';
          for (let i = 0, j = length; i < j; i += 1) result[i] = characters[Math.floor(Math.random() * characters.length)];
          return result.join('');
        }
      };

      _export('Utilities', Utilities);
    }
  };
});