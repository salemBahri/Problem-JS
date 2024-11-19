function digitize(n){

    return n.toString().split("").map((x)=>Number(x)).reverse()
}
console.log(digitize(23452345));
