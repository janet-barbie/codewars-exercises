//Given a string of words, you need to find the highest scoring word.

//Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3
function high(x){
  //// count and add points of each word
  const word = x.split(' ')
 // console.log(word)
  let count = [];
  let points = 0

for(let i = 0 ; i<word.length;i++){
  // console.log(`i:${word[i]}`)
   for(let j = 0 ; j<word[i].length;j++){
      ////console.log(`j:${word[i][j]}`)
      //// find each letter position in alphabet order
      let position = Number(`${word[i][j].charCodeAt(0)-96}`)
      /// find the total of alphabet count for each word
      points+=position

   }
}



}
 console.log(high('man i need a taxi up to ubud'))

//assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');





