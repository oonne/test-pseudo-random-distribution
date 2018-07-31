// 概率和攻击次数
const p = 0.15;
const times = 100;


// 查表找到C值
const table = require('./table.json');
let pc = table.find(pc => pc.p == p)
let c = pc.c;

console.log(c)
