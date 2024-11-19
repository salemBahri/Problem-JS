// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"



function reverse(string){
    return string.split(" ").reverse().join(" ")
  } 
  console.log(reverse("Hi There."));
  