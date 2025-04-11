const nums = [1,2,3,4]

function add(...nums){//we have ... so that we can add any number values as arguments
//  The rest parameter is converse to the spread operator. while the spread operator expands elements of an iterable, the rest parameter compresses them. It collects several elements. In functions when we require to pass arguments but were not sure how many we have to pass, the rest parameter makes it easier. 
  console.log(nums);
  let sum=0;
  for(let i=0;i<nums.length;i++)
  {
    sum= sum+nums[i]
    //console.log(sum);
  }
 
  return sum
} 
const result= add(...nums)
