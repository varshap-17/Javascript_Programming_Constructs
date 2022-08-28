function isprime(n){
    for(let i=2;i<=n;i++){
        if(n%i==0){
            return 0;
        }
        return 1;
    }
}
function primeFactors(n){
    for(let i=2;i<=n;i++){
        if(isprime(i)==1){
            let x=n;
            while(x%i==0){
                console.log(i+" ");
                x/=i;
            }
        }
    }
}
console.log(primeFactors(90));