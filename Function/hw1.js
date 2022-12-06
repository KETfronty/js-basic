//TAsk 1 
function sumTo(n){
    let result = 0;
    for(let i = 0; i <= n; i++){
    result += n;
    }
    return result
}

sumTo(10);

function sumTo2(n){
    if(n===0 || n===1){
        return n
    }
    else{
        return (n+sumTo2(n))
    }
}

//Task2

function factorial(n){
    if(n===0 || n===1) return n;
    else{
        return n*(n-1)
    }
}