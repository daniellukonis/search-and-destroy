'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  // runner 1
  // runner 2
  const breadCrumb = [];
  let currentStep = linkedlist.head;
  while(currentStep){

    if(breadCrumb.includes(currentStep.value)){
      return currentStep.value;
    }

    breadCrumb.push(currentStep.value)

    currentStep = currentStep.next;

  }
  return false;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
