function countSmileys(arr){
   // const smileys=/(:|;),(-|~),()|D)/
    const smiley=/[:|;][-|~]?[)|D]/
      let count = 0
    for(let el of arr){
        console.log(el);
        if(smiley.test(el)){
        count++

        }
    }
    return count;

}
//console.log(countSmileys([':D',':~)',';~D',':)']))
console.log(countSmileys([':)',':(',':D',':O',':;']))
//Valid smiley face examples: :) :D ;-D :~)
//assert.strictEqual(countSmileys([':)',':(',':D',':O',':;']     ), 2);
// assert.strictEqual(countSmileys([':D',':~)',';~D',':)']        ), 4);
// assert.strictEqual(countSmileys([':)',':(',':D',':O',':;']     ), 2);