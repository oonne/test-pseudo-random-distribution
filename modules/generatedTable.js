const fs = require('fs');
const P2C = require('./P2C');

let table = [];
for (let i = 1; i<=30; i++) {
  table.push({
    p: i/100,
    c: P2C(i/100),
  })
}
fs.writeFileSync('./table.json', JSON.stringify(table)); 

