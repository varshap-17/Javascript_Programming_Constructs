let n=0,sum=0,reminder=0;
for(let num=1;num<=100;num++){
    if(num>=11 && num>1){
        n=num;
        while(n>0){
            reminder=num%10;
            sum=((sum*10)+reminder);
            n=n/10;
        }
        if(num==sum){
            console.log(num);
        }
    }
}
console.log(reminder,sum,n);