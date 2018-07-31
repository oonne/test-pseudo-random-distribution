let C2P = require('./C2P');
let P2C = (p) => {
  let high = p;
  let low = 0;
  let c = p;
  let PE = C2P(c);

  while ( Math.abs(PE-p)>0.001 ) {
    c = (high+low)/2;
    PE = C2P(c);
    if (PE > p) {
      high = c
    } else {
      low = c
    }
    // console.log(`high:${high}, low:${low}, c:${c}, PE:${PE},`)
  }

  return c;
}

module.exports = P2C;

