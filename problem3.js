
// //Sum without highest and lowest number
// function SumLessMinMax(array) {
//     if (array.length<=1 || array==null) {
//         return 0 
//     }
//     let min=Infinity
//     let max=0
//     let sum=0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]>max) {
//             max=array[i];
//         }
//         if (array[i]<min) {
//             min=array[i];
//         }
//         sum+=array[i]
        
//     }
//     return sum-=min+max
// }
// console.log(SumLessMinMax([1,1,2,3,4,5,6,7,8,9,9]))


function SumLessMinMax(array) {

    return array.sort((a,b)=>a-b).slice(1,-1).reduce((acc,curent)=>acc+curent,0)
}
console.log(SumLessMinMax([1,33,4,2,3]))


