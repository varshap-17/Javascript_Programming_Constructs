function randomnum(min,max){
    var n=[];
    for(var i=0;i<10;i++){
        n.push(Math.floor(Math.random()*max)+min);
    }
    return n;
}
console.log(randomnum(0,999));

function findSecondLargestElement(arr){
    let first=-1, second=-1;
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]>first){
            second=first;
            first=arr[i];
        }else if(arr[i]>second && arr[i]!=first){
            second=arr[i];
        }
    }
    console.log("second largest:"+second);
}
let arr=[12,35,1,10,34,11]
findSecondLargestElement(arr);

function findSecondSmallestElement(arr1){
    let first=100,second=100;
    for(let i=0;i<=arr1.length;i++){
        if(arr1[i]<first){
            second=first;
            first=arr1[i];
        }else if(arr1[i]<second && arr1[i]!=first){
            second=arr1[i];
        }
    }
    console.log("second smallest:"+second);
}
let arr1=[12,35,1,10,35,25];
findSecondSmallestElement(arr1);