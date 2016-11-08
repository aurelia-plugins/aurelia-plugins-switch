// IMPORTS
import {inject} from 'aurelia-dependency-injection';
import {bindable, customElement} from 'aurelia-templating';

import {Utils} from './aurelia-plugins-switch-utils';


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
