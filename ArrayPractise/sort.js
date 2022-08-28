const num=[40,100,1,5,25,75];
num.sort((a,b)=>a-b);
let lowest=num[0];
console.log(num);
console.log("lowest:"+lowest);
num.sort((a,b)=>b-a);
let highest=num[0];
console.log("highest:"+highest);