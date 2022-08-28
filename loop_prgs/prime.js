let num=92;
let flag=false;
for(let i=2;i<=num/2;i++){
    if(num%i==0){
        flag=true;
        break;
    }
}
if(!flag){
    console.log(num+"is a prime");
}else{
    console.log(num+"is not a prime");
}