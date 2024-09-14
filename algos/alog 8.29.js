// merge
const sortedA1 = [];
const sortedB1 = [2];
const expectedMerge1 = [2];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [2, 3, 4, 7];
const sortedB3 = [ 3];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left = [], right = []) {
        result = []
        i = j = 0
        while (i < left.length && j < right.length){
            if (left[i] < right[j]){
                result.push(left[i])
                i++
            }else{
                result.push(right[j])
                j++
            }
            
        }
        while (i <left.length){
            result.push(left[i])
            i++
        }

        while (j <right.length){
            result.push(right[j])
            j++
        }


        return result
        }
        console.log(merge(sortedA3, sortedB3))

