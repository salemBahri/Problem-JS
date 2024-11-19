/* */
function EvenOrOdd(number){
    if(number>=0){
        if(number%2 ==0){
            return "Even"
        }else{
            return "Odd"
        }
    }else{
        return "Positive Number Please !"
    }
}

console.log(EvenOrOdd(3453456))

/* */
function EvenOrOdd2(number){
    return (number%2==0) ? "Even": "Odd"
}
console.log(EvenOrOdd2(3453456))

/* */
const EvenOrOdd2=(number)=> (number%2==0) ? "Even": "Odd"

console.log(EvenOrOdd2(5567))
