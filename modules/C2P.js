let C2P = (c) => {
  let currentP = 0;
  let successP = 0;
  let PE = 0;
  let nMaxFail = 1/c;
  for (let i = 1; i <= nMaxFail; ++i) {
      currentP = Math.min(1, i*c) * (1 - successP);
      successP += currentP;
      PE += i * currentP;
  }
  return ( 1 / PE );
}

module.exports = C2P;

