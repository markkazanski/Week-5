function isPrime(number){
    var prime = true;

    for(var i = 2; i < number; i++){
        if(number % i === 0){
            prime = false;
        }
    }
    return prime;
}

for(var x=2; x<=1000; x++){
    //console.log(x + ": " + isPrime(x));
    if(isPrime(x)) console.log(x);
}