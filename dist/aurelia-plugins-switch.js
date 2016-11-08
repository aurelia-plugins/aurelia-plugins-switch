import {inject} from 'aurelia-dependency-injection';
import {bindable,customElement} from 'aurelia-templating';

// PUBLIC METHODS
export function configure(aurelia) {
  aurelia.globalResources('./aurelia-plugins-switch-element');
}

// PUBLIC CLASS
export class Utils {
  // STATIC METHODS
  static random(length, characters) {
    var result = new Array(length);
    characters = characters || 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789';
    for (var i = 0, j = length; i < j; i++)
      result[i] = characters[Math.floor(Math.random() * characters.length)];
    return result.join('');
  };
}

// IMPORTS
// CLASS ATTRIBUTES
@customElement('aup-switch')
@inject(Element)


// PUBLIC CLASS
export class Switch {
  // PRIVATE PROPERTIES (DI)
  _element;

  // BINDABLE PROPERTIES
  @bindable checked;
  @bindable id = Utils.random(32);

  // CONSTRUCTOR
  constructor(element) {
    this._element = element;
  }

  // PUBLIC METHODS
  toggle() {
    var toggleEvent;
    if (window.CustomEvent)
      toggleEvent = new CustomEvent('change', { bubbles: true, detail: { checked: this.checked, id: this.id } });
    else {
      toggleEvent = document.createEvent('CustomEvent');
      toggleEvent.initCustomEvent('change', true, true, { data: { checked: this.checked, id: this.id } });
    }
    this._element.dispatchEvent(toggleEvent);
  }
}
