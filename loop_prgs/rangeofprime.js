function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }else{
            return true;
        }
    }
}
let lower=1,upper=30;
for(let i=lower;i<=upper;i++){
    if(isPrime(i)){
        console.log(i);
    }
}