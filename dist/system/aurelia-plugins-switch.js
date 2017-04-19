System.register([], function (_export, _context) {
  "use strict";

  function configure(aurelia) {
    aurelia.globalResources('./aurelia-plugins-switch-element');
  }

  _export('configure', configure);

  return {
    setters: [],
    execute: function () {}
  };
});