const a = require('fs').readFileSync('input.txt', 'utf-8').split("\n").map(a => [
    parseInt(a.split("Game ")[1].split(":")[0]),
    a.split(": ")[1].split(";").map(a => a.split(",").map(a => a.trim().split(" ").reduce(
        (_, __, ___, a) => ({ [a[1]]: parseInt(a[0]) })
    )).reduce((prev, curr) => 
        (prev[Object.keys(curr)[0]] = curr[Object.keys(curr)[0]]) ? prev : prev
    , {}))
    .map(e => ((e.red = e.red || 0) & 0) || ((e.green = e.green || 0) & 0) || ((e.blue = e.blue || 0) & 0) || e)
    .map(e => e.red <= 12 && e.green <= 13 && e.blue <= 14)
    .reduce((p, c) => p || !c, false)
]).filter(a => !a[1]).map(a => a[0]).reduce((a,b)=>a+b,0);

console.log(a);