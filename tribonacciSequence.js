
function tribonacci(signature,n){
    let[a,b,c] = signature;
    let result = [a,b,c];
    for(let i = 3; i<n;i++){
        console.log(i)
        let next = a+b+c
        result.push(next)

        a=b;
        b=c;
        c=next;


    }

    return result
}

console.log(tribonacci([1,1,1],10));