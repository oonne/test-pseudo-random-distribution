// 概率和攻击次数
const p = 0.15;
const times = 100;


// 查表找到C值
const table = require('./table.json');
let pc = table.find(pc => pc.p == p)
let c = pc.c;

let Crit = 0;

let attack = (c) => {
  let currentP = 0;

  return function () {
    currentP = currentP+c;

    let random = Math.random();
    if (random<currentP) {
      console.log('Crit');
      Crit++;
      currentP = 0;
    } else {
      console.log('normal');
    }
  }
}
let a = attack(c);

for (let i=1; i<=1000; i++) {
  a(c);
}

console.log(`Crit times: ${Crit}`);