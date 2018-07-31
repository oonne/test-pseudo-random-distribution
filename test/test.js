let assert = require('assert');
let {C2P, P2C} = require('../modules/index');
let table = require('./table');

describe('Pseudo Random Distribution', function() {

  describe('根据C值求数学期望', function() {
    table.map((pc)=>{
      it(pc.title, function() {
        let P = C2P(pc.c);
        assert.ok(Math.abs(P-pc.p)<0.001);
      });
    });
  });

  describe('根据P值求C值', function() {
    table.map((pc)=>{
      it(pc.title, function() {
        let C = P2C(pc.p);
        assert.ok(Math.abs(C-pc.c)<0.001);
      });
    });
  });

});