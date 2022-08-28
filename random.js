function randomnum(min,max){
    var n=[];
    for(var i=0;i<5;i++){
        n.push(Math.floor(Math.random()*max)+min);
    }
    return n;
}
console.log(randomnum(0,999));