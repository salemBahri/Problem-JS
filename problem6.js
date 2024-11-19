// function mapping(array){
//     return array.map((x)=>x==3?x=true:x=false)
// }
// console.log(mapping([4,3,5,4,3,6,3,3,3,3,3,3]));


function countSheeps(sheep) {
 let count=0
  sheep.map((x)=>{
    if (x==true || typeof(x)==Boolean) {
      count+=1
    }
  })
  return count

     
  }

  console.log(countSheeps([true,false,true,false,false,true,true,false,2]));
  
