//Given a string of words, you need to find the highest scoring word.

//Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3
function high(x){
  const word = x.split(' ')
  let highestScore = 0;
  let highestWord = "";
for(let i = 0 ; i<word.length;i++){
  let points = 0;

   for(let j = 0 ; j<word[i].length;j++){
      let position = Number(`${word[i][j].charCodeAt(0)-96}`)
      /// find the total of alphabet count for each word     
      points+=position   
 

   }
  
   if(points > highestScore){ 
    highestScore = points
    highestWord = word[i] 
  } 
 
}
return highestWord;

}
//assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
 console.log(high('man i need a taxi up to ubud'))

// assert.strictEqual(high('aa b'), 'aa');
console.log(high('aa b'));







