// Most frequent element in array
// Input: [1, 3, 2, 1, 4, 1] returns 1

// Brute Force
// 1. Iterate through the array
// 2. For each value, add to a countMap: count of 1, or ++ if it's already there
// 3. Return the key with the highest value

// Efficient Solution
// 1. Iterate through the array
// 2. sort the array
// 3. by common grouping, hold val for prev count and val and curr count and val
// 4. if the curr count higher then prev count, then we update the highest count/value
// return highest value
//[1, 1, 4,]
//    ^

function maxFrequency(array){
  if(!array || !array.length)
    return null;
  if(array.length === 1) return array[0]
  array.sort((a, b) => a-b)  

  let currVal = array[0] // 1
  let currCount = 1      // 2
  let highEl = currVal;    // 1
  let highCount = currCount; // 1
    
  for(let i = 1; i <= array.length; i++){
      if(array[i] !== currVal || !array[i]){ 
         if(currCount > highCount){
            highCount = currCount
            highEl = currVal
          }
          currVal = array[i]
          currCount = 1     
      } 
      else currCount++
  }
    
  return highEl;
}

console.log(maxFrequency([1, 3, 3, 2, 2, 1, 4, 1]));
