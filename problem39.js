
function position(letter){
    let position
    let alphapet=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i = 0; i < alphapet.length; i++) {
        if (letter==alphapet[i]) {
            position=i+1
           return "Position of alphabet: "+position
        }
    }
  }

console.log(position("z"));
