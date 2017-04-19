// IMPORTS
import {inject} from 'aurelia-dependency-injection';
import {bindable, customElement} from 'aurelia-templating';

import {Utilities} from './aurelia-plugins-switch-utilities';


// CLASS ATTRIBUTES
@customElement('aup-switch')
@inject(Element)


// PUBLIC CLASS
export class Switch {
  // PRIVATE PROPERTIES (DI)
  _element;

  // BINDABLE PROPERTIES
  @bindable checked;
  @bindable id = Utilities.random(32);

  // CONSTRUCTOR
  constructor(element) {
    this._element = element;
  }

  // PUBLIC METHODS
  toggle() {
    let toggleEvent;
    if (window.CustomEvent)
      toggleEvent = new CustomEvent('change', { bubbles: true, detail: { checked: this.checked, id: this.id } });
    else {
      toggleEvent = document.createEvent('CustomEvent');
      toggleEvent.initCustomEvent('change', true, true, { data: { checked: this.checked, id: this.id } });
    }
    this._element.dispatchEvent(toggleEvent);
  }
}