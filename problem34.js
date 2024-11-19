// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.




function xor(a, b) {
    if (a==true && b==true) {
        return false
    }else if (a==false && b==false) {
        return false
    } else {
        return true
    }
  }

  console.log(xor(true,true));
  

  //other sollution
  //return a===b?false:true