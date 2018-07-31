let assert = require('assert');
let {C2P, P2C} = require('../modules/index');

describe('Pseudo Random Distribution', function() {

  describe('根据C值求数学期望', function() {
    it('5%', function() {
      let P = C2P(0.003802);
      assert.ok(Math.abs(P-0.05)<0.0001);
    });
    it('10%', function() {
      let P = C2P(0.014746);
      assert.ok(Math.abs(P-0.10)<0.0001);
    });
    it('15%', function() {
      let P = C2P(0.032221);
      assert.ok(Math.abs(P-0.15)<0.0001);
    });
    it('20%', function() {
      let P = C2P(0.055704);
      assert.ok(Math.abs(P-0.20)<0.0001);
    });
  });

  describe('根据P值求C值', function() {
    it('5%', function() {
      let C = P2C(0.05);
      assert.ok(Math.abs(C-0.003802)<0.0001);
    });
    it('10%', function() {
      let C = P2C(0.10);
      assert.ok(Math.abs(C-0.014746)<0.0001);
    });
    it('15%', function() {
      let C = P2C(0.15);
      assert.ok(Math.abs(C-0.032221)<0.0001);
    });
    it('20%', function() {
      let C = P2C(0.20);
      assert.ok(Math.abs(C-0.055704)<0.0001);
    });
  });

});