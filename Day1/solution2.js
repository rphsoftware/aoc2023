const a = require('fs').readFileSync('input.txt', 'utf-8').split('\n')
.map(
    a => a.split('').map(a => [a]).map((v, vi) =>
            [
                /one/g,
                /two/g,
                /three/g,
                /four/g,
                /five/g,
                /six/g,
                /seven/g,
                /eight/g,
                /nine/g
            ].map(
                re => Array.from(a.matchAll(re))
            ).map(
                (r, mindex) => r.map(
                    ({ index }) => index == vi ? v.push(mindex + 1) : null
                )
            ) ^ 0 || v
        ).flat().join('')
).map(
    a => a.split('').filter(a => /^[0-9]$/.test(a))
).map(
    a => (parseInt(a.at(0)) * 10) + parseInt(a.at(-1))
).filter(a=>!!a).reduce((a,b) =>a+b,0);

console.log(a);