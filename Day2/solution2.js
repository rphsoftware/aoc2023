const a = require('fs').readFileSync('input.txt', 'utf-8').split("\n").map(a => 
    a.split(": ")[1].split(";").map(a => a.split(",").map(a => a.trim().split(" ").reduce(
        (_, __, ___, a) => ({ [a[1]]: parseInt(a[0]) })
    )).reduce((prev, curr) => 
        (prev[Object.keys(curr)[0]] = curr[Object.keys(curr)[0]]) ? prev : prev
    , {}))
    .map(e => ((e.red = e.red || 0) & 0) || ((e.green = e.green || 0) & 0) || ((e.blue = e.blue || 0) & 0) || e)
    .reduce((prev, curr) =>
        (Object.keys(prev).map(key => prev[key] = Math.max(prev[key], curr[key])) & 0) || prev
    , {red:0,green:0,blue:0})
).map(a => a.red * a.green * a.blue).reduce((a,b)=>a+b,0);

console.log(a);