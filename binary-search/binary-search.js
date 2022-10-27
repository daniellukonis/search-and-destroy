'use strict';

// const test1 = [1,3,4,5,10,15,20,22,23,98,1000];   10
// const test2 = [-3,-2,0, 9, 10, 11, 12, 15, 17, 18, 19, 20];  -3

// Complete this algo
// const binarySearch = (array, target) => {


// 	if(array.length === 0) {
// 		return false;
// 	}

// 	//take array and split into 2
// 	const half = Math.floor(array.length / 2);
// 	const left = array.slice(0 , half);
// 	const right = array.slice(half + 1);

// 	if(target === array[half]){
// 		return true;

// 	} else {

// 		if(target < array[half]){
// 			//call recurse left
// 			return binarySearch(left, target)
// 		} else {
// 			//call recurse right
// 			return binarySearch(right, target)
// 		}

// 		}
// };

const binarySearch = (array, target) => {
	let start = 0;
	let end = array.length - 1;

	while (start <= end) {
		let half = Math.floor((end + start) / 2);
		if(array[half] === target) {
			return true;
		}
		if(target < array[half]){
			end = half -1;
		}	else {
			start = half +1;
		}
	}

	return false

}

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
