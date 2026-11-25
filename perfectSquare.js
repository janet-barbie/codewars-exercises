
// a perfect square(square number)  is an integer made by multiplying an integer e.g 9
function findNextSquare(sq) {
    
    const square = Math.sqrt(sq)
    
    if( !Number.isInteger(square)){
        return -1     
    }
    return square+1

  }

console.log(findNextSquare(6))
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square