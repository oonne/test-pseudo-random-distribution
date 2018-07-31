let C2P = require('./C2P');
let P2C = (p) => {
  let high = p;
  let low = 0;
  let c = p;
  let PE = C2P(c);

  while ( Math.abs(PE-p)>0.00001 ) {
    c = (high+low)/2;
    PE = C2P(c);
    if (PE > p) {
      high = c
    } else {
      low = c
    }
  }

  return c;
}

module.exports = P2C;

