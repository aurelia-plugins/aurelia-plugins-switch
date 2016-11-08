'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', './aurelia-plugins-switch-utils'], function (_export, _context) {
  "use strict";

  var inject, bindable, customElement, Utils, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, Switch;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaPluginsSwitchUtils) {
      Utils = _aureliaPluginsSwitchUtils.Utils;
    }],
    execute: function () {
      _export('Switch', Switch = (_dec = customElement('aup-switch'), _dec2 = inject(Element), _dec(_class = _dec2(_class = (_class2 = function () {
        function Switch(element) {
          

          _initDefineProp(this, 'checked', _descriptor, this);

          _initDefineProp(this, 'id', _descriptor2, this);

          this._element = element;
        }

        Switch.prototype.toggle = function toggle() {
          var toggleEvent;
          if (window.CustomEvent) toggleEvent = new CustomEvent('change', { bubbles: true, detail: { checked: this.checked, id: this.id } });else {
            toggleEvent = document.createEvent('CustomEvent');
            toggleEvent.initCustomEvent('change', true, true, { data: { checked: this.checked, id: this.id } });
          }
          this._element.dispatchEvent(toggleEvent);
        };

        return Switch;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'checked', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'id', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return Utils.random(32);
        }
      })), _class2)) || _class) || _class));

      _export('Switch', Switch);
    }
  };
});