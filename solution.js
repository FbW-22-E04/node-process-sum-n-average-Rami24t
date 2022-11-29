// 4. Wrong type
//  - program outputs warning when passed a non-number as subsequent argument
//  expect(received).toBe(expected) // Object.is equality
//  Expected: "Sorry, the argument 'hello' is not a number, please try again"

for(let i = 3; i < process.argv.length; i++) {
  if(isNaN(process.argv[i])) {
    console.log(`Sorry, the argument '${process.argv[i]}' is not a number, please try again`)
    process.exit()
  }
}

if(process.argv[2] === 'sum') {
// 1. calculate the sum
console.log(
process.argv.slice(3).reduce((sum, n) => sum + Number(n), 0).toString()
);
}
else if(process.argv[2] === 'avg') {
// 2. calculate the average and 3. Wrong operation name
console.log(
(process.argv.slice(3).reduce((avg, n) => avg + Number(n), 0) / process.argv.slice(3).length).toString()
);
}
else {
    console.log('I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)');
}
