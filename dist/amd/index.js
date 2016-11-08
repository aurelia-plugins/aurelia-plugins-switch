define(['exports', './aurelia-plugins-switch'], function (exports, _aureliaPluginsSwitch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaPluginsSwitch).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaPluginsSwitch[key];
      }
    });
  });
});