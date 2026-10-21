function isPangram(string){
     const str = string.toLowerCase()
     const letters = /[a-z]/
    let count = 0;
    const chars = new Set(str)
    console.log(chars);
    for(const letter of chars){
        if(letters.test(letter)){
            count++
        }

    }

     return count==26?true:false;
    
     
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."));

// tester("The quick brown fox jumps over the lazy dog.", true);
// tester("This is not a pangram.", false);
// tester("abcdefghijklmnopqrstuvwxy .", false);


