// Given a non-empty array of integers, return the result of multiplying the values together in order.

function grow(x){
 const result = x.reduce((acc,value)=>{
    return acc * value
    },1)
    return result

}

// describe("Basic tests",() =>{
//     it("Testing for fixed tests", () => {  
//       assert.strictEqual(grow([1, 2, 3]), 6);
//       assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
//       assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 
//     });
//   })

console.log(grow([1,2,3]))