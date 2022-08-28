let x=0,cnt=1;
while(x==0){
    console.log(cnt);
    let result=Math.floor(Math.random()*2);
    if(result==0){
        cnt++;
        console.log("head");
        if(cnt==11){
            break;
        }
    }else if(result==1){
        cnt++;
        console.log("tail");
        if(cnt==11){
            break;
        }
    }
}