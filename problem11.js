function countPositivesSumNegatives(array){
        let sumNegative=0
        let countPositive=[]
    for (let i = 0; i < array.length; i++) {
        
        (array[i]<0)?sumNegative+=array[i]:countPositive+=1;
    }
    return sumNegative+" "+countPositive

}
console.log(countPositivesSumNegatives([1,2,3,-4,-4,4]));









function countPositivesSumNegatives(array){
    if (array==null|| input.length === 0) {
        return []
    }
   return [array.filter((x)=>x>0).length,array.filter((x)=>x<0).reduce((acc,current)=>acc+current,0)]
   }
console.log(countPositivesSumNegatives([0,0,0,0,0]));
