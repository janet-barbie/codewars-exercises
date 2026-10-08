function count(string) {
   let char = {};
   
    for(let i = 0 ; i < string.length;i++){
        const element = string[i]
        if(char[element]){
         char[element]++;

        }else{
            char[element] = 1;
        }
    }
   
    return char;
  }
  console.log(count("abacus"));
