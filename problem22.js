// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.



function findAverage(array) {
    if (array==null||array.length==0) {
        return 0;
    }
    return array.reduce((acc,current)=>(acc+current),0)/array.length
  }
  console.log(findAverage());
  