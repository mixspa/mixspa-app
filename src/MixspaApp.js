class MixspaApp {
  static define(options) {
    window.customElements.define(options.name, class extends HTMLElement {
      constructor() {
        super();
        options.init && options.init();
      }

      connectedCallback() {
        options.render && options.render(this.getAttributes());
      }

      disconnectedCallback() {
        options.unmount && options.unmount();
      }

      attributeChangedCallback() {
        options.update && options.update(this.getAttributes());
      }

      getAttributes() {
        return this.getAttributeNames().reduce((nextName, currentObj) => {
          currentObj[nextName] = this.getAttribute(nextName);
          return currentObj;
        }, {});
      }
    });
  }
}

export default MixspaApp;
