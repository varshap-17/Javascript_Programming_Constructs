let num=151;
let flag=false;
for(let i=2;i<=num/2;i++){
    if(num%i==0){
        flag=true;
        break;
    }
}
if(!flag){
    console.log(num+" is a prime");
}else{
    console.log(num+" is not a prime");
}
let sum=0,rem,temp=num;
while(num>0){
    rem=num%10;
    sum=sum*10+rem;
    num=num/10;
}
if(temp==sum && num==2){
    console.log(temp+" is not a palprime");
}else{
    console.log(temp+" is a palprime");
}