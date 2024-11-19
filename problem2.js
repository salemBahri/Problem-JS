// return sum of positive number in array


function SumPosNumOfArray(array){
    let sum=0
    for (let i = 0; i < array.length; i++) {
        if (array[i]>0) {
            sum+=array[i];
        }else{
            continue;
        }
    }
    return sum
}
console.log(SumPosNumOfArray([1,2,3,4,-6,9,-4]));



function SumPosNumOfArray2(array){
    let sum=0
    for (let i = 0; i < array.length; i++) {
        if (array[i]>0) {
            sum+=array[i];
        }
    }
    return sum
}
console.log(SumPosNumOfArray2([1,2,3,4,-6,9,-4,-3]));



function SumPosNumOfArray3(array){
    return array.filter((x)=>x>0).reduce((acc,current)=>acc+current,0)
}
console.log(SumPosNumOfArray3([1,2,3,4,-6,9,-4,-3]));

