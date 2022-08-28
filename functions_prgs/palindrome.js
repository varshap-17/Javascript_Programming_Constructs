let num=3553,sum=0,remainder;
let temp=num;
while(num>0){
    remainder=num%10;
    sum=(sum*10)+remainder;
    num=num/10;
}
if(temp==sum){
    console.log(temp+" is not palindrome");
}else{
    console.log(temp+" is palindrome");
}