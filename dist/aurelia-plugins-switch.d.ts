import {
  inject
} from 'aurelia-dependency-injection';
import {
  bindable,
  customElement
} from 'aurelia-templating';

// PUBLIC METHODS
export declare function configure(aurelia?: any): any;

// PUBLIC CLASS
export declare class Utils {
  
  // STATIC METHODS
  static random(length?: any, characters?: any): any;
}

// PUBLIC CLASS

// IMPORTS
// CLASS ATTRIBUTES
export declare class Switch {
  checked: any;
  id: any;
  
  // CONSTRUCTOR
  constructor(element?: any);
  
  // PUBLIC METHODS
  toggle(): any;
}