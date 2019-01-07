import MixspaApp from './MixspaApp';

describe('MixspaApp', () => {
  let elementClass;
  let initCallBack = jest.fn();

  beforeEach(() => {
    MixspaApp.define({
      tag: 'app-name',
      appInit: initCallBack
    });
    elementClass = window.customElements.get('app-name');
  });

  it('should create custome element in global', () => {
    expect(elementClass).toBeDefined();
  });
});
