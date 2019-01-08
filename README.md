# mixspa-app
mixspa-app is used to define a app that can be load in another spa.

## Current Status:

[![NPM Version](https://img.shields.io/npm/v/@mixspa/app.svg)](https://npmjs.org/package/@mixspa/app)
[![NPM Downloads](https://img.shields.io/npm/dm/@mixspa/app.svg)](https://npmjs.org/package/@mixspa/app)
[![Build Status](https://circleci.com/gh/mixspa/mixspa-app.svg?style=svg)](https://circleci.com/gh/mixspa/mixspa-app)

[![NPM](https://nodei.co/npm/@mixspa/app.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@mixspa/app/)

## How to use?

According the following to define a app. The `name` & `render` must exist.

```js
import MixspaApp from '@mixspa/app';

MixspaApp.define({
  tag: 'app-demo', /* This name will be used for tag name */
  init: function(element) {
    /* will be call when custom element has been created */
  },
  render: function(element) {
    let attrName = element.getAttribute('data-name'); //
    /* will be call after custom element has been rendered */
  },
  unmount: function(element) {
    /* will be call when custom element has been removed */
  },
  update: function(element) {
    /* will be call when attribute has been changed */
  }
});
```

The MixspaApp will create a custom element for use.
About more details & the api of parameter `element` please reference here:
[CustomElement](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry)

## License

mixspa-app is released under the [MIT license](https://github.com/mixspa/mixspa-app/blob/master/LICENSE).
