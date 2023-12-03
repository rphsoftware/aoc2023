const a = require('fs').readFileSync('input.txt', 'utf-8').split('\n')
    .map(a => a.split('').filter(a => /^[0-9]$/.test(a)))
    .map(a => (parseInt(a.at(0)) * 10) + parseInt(a.at(-1)))
    .filter(a=>!!a)
    .reduce((a,b) =>a+b,0);

console.log(a);