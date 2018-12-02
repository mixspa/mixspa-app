class MixspaApp {
  static define(options) {
    window.customElements.define(options.name, class extends HTMLElement {
      constructor() {
        super();
        options.init && options.init(this);
      }

      connectedCallback() {
        options.render && options.render(this);
      }

      disconnectedCallback() {
        options.unmount && options.unmount(this);
      }

      attributeChangedCallback() {
        options.update && options.update(this);
      }
    });
  }
}

export default MixspaApp;
