
//1. ES5

function doubleES5(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  //ES2015 Refactor the above code to use two arrow functions. Turn it into a one-liner.


const doubleES2015=arr => arr.map(val => val*2) 


//Replace ALL functions with arrow functions:

// function squareAndFindEvens(numbers){
//   var squares = numbers.map(function(num){
//     return num ** 2;
//   });
//   var evens = squares.filter(function(square){
//     return square % 2 === 0;
//   });
//   return evens;
// }

//works but could be shorter
const squareAndFindEvens= (numbers) => {
    const squares=numbers.map(num => num **2);
    const evens=squares.filter(square => square %2===0);
return evens 
    }
//shorter
 const squareAndFindEvensv2= numbers => numbers.map(num => num **2).filter(square => square %2===0);

        
    