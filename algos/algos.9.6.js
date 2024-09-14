// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg
// Sample interview question for Google : https://www.youtube.com/watch?v=XKu_SEDAykw

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
// expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
// expected2 = [2, 4];

// BONUS
const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
// expected3 = [1, 6];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */
//create a funtion using parameters nums and targetSum
function twoSum(nums, targetSum) {
	//for loop to run nums array using i
	for (let i = 0; i < nums.length; i++) {
		//nested for loop to run through array using j starting at i+1
		for (let j = i + 1; j < nums.length; j++) {
			//if state that will add nums [i] and nums [j] compare
			if (nums[i] + nums[j] === targetSum) {
				//return in [i, j]
				return [i, j];
			}
		}
	}
}
console.log(twoSum(nums3, targetSum3));

//create a funtion using parameters nums and targetSum
function twoSum(nums, targetSum) {
	//setting i to 0
	let i = 0;
	let j = 1;
	//creating a while loop to run while the for loop is true
	while (i < nums.length) {
		console.log(i, j);
		if (nums[i] + nums[j] === targetSum) {
			//return in [i, j]
			return [i, j];
		} else {
			j++;
		}
		if (j === nums.length) {
			i++;
			j = i + 1;
		}
	}

	//if state that will add nums [i] and nums [j] compare
}
console.log(twoSum(nums2, targetSum2));

// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

const nums4 = [1, 2, 1, 1, 2, 3]; // [1, 1, 1, 2, 2, 3]
const k1 = 2; // First 2 most frequent number
// expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums5 = [0, 2, 0, 0, 2, 3]; // [0,0,0,2,2,3]
const k2 = 1; // most frequent number
// expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums6 = [1, 2, 3, 1, 2, 3]; // [1, 1, 2, 2, 3, 3]
const k3 = 3;
// expected3 = [1, 2, 3];
/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(nums, k) {}



function twoSums2(arr, target) {
    let seen = {}; //hash map object will allow O(1) look up time of already seen values.
    // we will store KVPs with the key being the value from the array, and the value being its index

    for (let i = 0; i < arr.length; i++) { //loop through the array
        let currentValue = arr[i]; // initialize current value to consider
        let delta = target - currentValue; // let delta be the value needed to reach target with currentValue
        if (seen.hasOwnProperty(delta)) { // if delta exists in our hash map ( O(1) look up time)
            return [seen[delta], i]; // return an array containing the two indices
        }
        seen[currentValue] = i; // otherwise, add current value and its index as a KVP to our seen object
        console.log(seen);
    }
}
console.log(twoSums2([3, 3], 6)); // [0,1]