'use strict';

// Complete this algo
const minJumps = arr => {

  // //counter
  // let jumps = 1;
  // let index = 0;
  // let totalIndex = 0;

  // while(totalIndex < arr.length){
  //   if(arr[index] >= arr.length - 1) {

  //     return jumps;
  //   } else {

  //     const choices = arr.slice(index +1 , index +1 + arr[index])

  //     let currMax = 0;
  //     let newIndex = 0;
  //     choices.forEach((e,i) => {
  //       if(e > currMax){
  //         newIndex = i;
  //         currMax = e;
  //       }
  //     });

  //     index = index + newIndex + 1;
  //     totalIndex += index;
  //     jumps++;
  //     console.log('index', index, 'newIndex', newIndex, 'jumps', jumps)
  //   }
  // }

  // console.log("finished")

  // return jumps;

  let jumps = [];
  jumps[0] = 0;

  for (let i = 1; i <= arr.length - 1; i++) {
    jumps[i] = Infinity; //jumps[0, Infinity]
    for (let j = 0; j < i; j++) {
        if (i <= j + arr[j] && jumps[j] != Infinity) { //i = 1 , j = 0
            jumps[i] = Math.min(jumps[i], jumps[j] + 1);
            break;
        }
    }
  }

  return jumps[arr.length - 1]

};

module.exports = minJumps
