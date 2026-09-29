// An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

function squareDigits(num){
    const nums = Array.from(String(num),Number)
    return nums.map(digit => digit * digit).join('')
  }
  console.log(squareDigits(3212))

  // describe("Basic tests", () => {
  
//   it("squareDigits(3212) should equal 9414", () => {
//     assert.strictEqual(squareDigits(3212), 9414);
//   });