/**
 * 
 * Write a program that takes the following nested matrix and flattens it 
 * (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...
 * 
 */


// let multiDimension = [0, 1, [2, [3, [4, 5]]]];
// console.log('Matriz concatenada: '+ multiDimension.flat(Infinity));

  const multiDimension = [0, 1, [2, [3, [4, 5]]]];

  function flatArray(multiDimension) {
    const container = [];
  
    function recursiveFlat(arrayOneD) {
      for (const element of arrayOneD) {
        if (Array.isArray(element)) {
          recursiveFlat(element);
        } else {
          container.push(element);
        }
      }
    }
    recursiveFlat(multiDimension);
    return container;

  }
  
