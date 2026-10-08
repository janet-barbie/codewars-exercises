
function tribonacci(signature,n){
    let[a,b,c] = signature;
    let result = [a,b,c];
    for(let i = 1; i<n;i++){
        console.log(i)
        let next = a+b+c
        result.push(next)

        a=b;
        b=c;
        c=next;


    }

    return result.slice(0,3);
}

console.log(tribonacci([1,1,1],10));