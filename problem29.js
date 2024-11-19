// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


// function test (string) {
    
//     return string.length
//   }
//   console.log(test("ali"));
  

  function remove (string) {
    let newarray= string.split("")
        if (newarray[string.length-1]=="!") {
          newarray.pop() 
        }
    return newarray.join("")
  }
    console.log(remove("ali!"));
  


  //   function removeEnd(str){
  //     return str.endsWith("!")?true:false
  // }
  
  // console.log(removeEnd("wedwdwe;lk;!d!"));