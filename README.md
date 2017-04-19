# aurelia-plugins-switch

A switch plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-switch --save
```

**JSPM**

```shell
jspm install aurelia-plugins-switch
```

**Bower**

```shell
bower install aurelia-plugins-switch
```

## Configuration

Inside of your `main.js` or `main.ts` file simply load the plugin inside of the configure method using `.plugin()`.

```javascript
export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use
    .plugin('aurelia-plugins-switch');

    await aurelia.start();
    aurelia.setRoot('app');
}
```

## Usage

Once the switch plugin is configured, to use it simply add the custom element `<aup-switch></aup-switch>` in your view.
 
There are 2 usable attributes, `checked` and `id`. Use the `checked` value to set the state of the switch (OFF=false / ON=true). The `id` attribute can useful when using multiple switches. If you don't add the `id` attribute, the switch will automatically generate a random id behind the scene.

```html
<aup-switch checked.bind="checked" id.bind="id"></aup-switch>
```

```javascript
export class App {
  constructor() {}  

  checked = false;
  id = 'mySwitch';
}
```

### Change delegate

Add a delegate function to control what happens when the state is changed from one to another. You can retrieve the `checked` state and the `id` from the `event` property.

```html
<aup-switch change.delegate="onChange($event)" checked.bind="checked" id.bind="id"></aup-switch>
```

```javascript
export class App {
  constructor() {}  

  checked = false;
  id = 'mySwitch';
  
  onChange(event) {
    console.log(`The current state of the switch with id ${event.detail.id} is ${event.detail.checked}.`);
  }
}
```

## Styling

The switch doesn't come with styling. If you use the CSS Framework [`Faceman`](<http://faceman.io>), styling is provided automatically. Otherwise copy and paste the below styling to your SCSS stylesheet. Use the variables to change the look-and-feel.

```scss
// VARIABLES
$switch-active-background: #ffffff !default;
$switch-active-color: #2ecc71 !default;
$switch-active-text: 'ON' !default;
$switch-border-width: 2px !default;
$switch-inactive-background: #ffffff !default;
$switch-inactive-color: #ecf0f1 !default;
$switch-inactive-text: 'OFF' !default;
$switch-padding: 2px !default;
$switch-font-size: 13.6px !default;
$switch-width: 80px !default;

// STYLING
.switch {
  input { margin-left: -9999px; position: absolute; visibility: hidden; }
  input + label {
    background: $switch-inactive-color; border-radius: $switch-width / 2; cursor: pointer;
    font-size: $switch-font-size; height: $switch-width / 2; padding: $switch-border-width; position: relative;
    transition: background 0.4s; user-select: none; width: $switch-width;
    &:after, &:before { content: ''; display: block; position: absolute; }
    &:after {
      background: $switch-inactive-color; border-radius: ($switch-width / 2) - 2 * ($switch-border-width + $switch-padding);
      bottom: $switch-border-width + $switch-padding; left: $switch-border-width + $switch-padding;
      top: $switch-border-width + $switch-padding; transition: margin 0.4s, background 0.4s;
      width: ($switch-width / 2) - 2 * ($switch-border-width + $switch-padding);
    }
    &:before {
      background: $switch-inactive-background; border-radius: $switch-width / 2; bottom: $switch-border-width; content: $switch-inactive-text;
      left: $switch-border-width; line-height: $switch-width / 2 - 2 * $switch-border-width; padding-left: ($switch-width / 2) - 2 * ($switch-border-width + $switch-padding);
      right: $switch-border-width; text-align: center; transition: background 0.4s; top: $switch-border-width;
    }
  }
  input:checked + label {
    background: $switch-active-color;
    &:after { background: $switch-active-color; margin-left: $switch-width / 2; }
    &:before {
      background: $switch-active-background; content: $switch-active-text;
      padding-left: 0; padding-right: ($switch-width / 2) - 2 * ($switch-border-width + $switch-padding);
    }
  }
}
```