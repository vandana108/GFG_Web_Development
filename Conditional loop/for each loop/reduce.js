const nums =[1, 1, 1, 1, 2, 3]
nums.reduce((accumulator, current, i ) => {
  console.log(accumulator);
  return  accumulator+current
}, 0)