describe('WebComponent instance', () => {
  let el;

  beforeEach(() => {
    document.body.innerHTML = '';
    el = document.createElement('wc-component');
  });

  describe('Custom Elements spec behavior', () => {
    it('Check element create', () => {
      expect(el).to.be.ok;
    });

    it('calls connectedCallback when attached to DOM', () => {
      //    expect(el.connected).not.to.be.ok;
    //  expect(el.innerHTML).to.be.empty;
      document.body.appendChild(el);
      expect(el.innerHTML).to.be.equal('Eureka!');
    });
  });
});
