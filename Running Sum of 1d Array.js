/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    //initialize the result array with the same length as the numbers array
var result = new Array(nums.length);

//set the first element of the result array to the first element of the numbers array
result[0] = nums[0];

//loop through the numbers array
for (var i = 1; i < nums.length; i++) {
    //calculate the sum of the current element and the previous element
    result[i] = result[i - 1] + nums[i];
}
//return the result array
return result;
    
};
