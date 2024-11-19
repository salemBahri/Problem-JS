function doubleChar(str) {
    return str.split("").map((x)=>x+x).join("")
  }
   console.log(doubleChar("hello").toUpperCase());
   

// //   I can change this map((x)=>x+x) with map((x)=>x.repeat(2))



// let array=['s','a','l','e','m']
// console.log(array);

// let name=array.join("")
// console.log(name);
