//uc7A
let totEmpWage=0;
let 
function sum(dailywage){
    totEmpWage+=dailywage;
}
function calcdailywage(emphrs){
    return emphrs*wage_per_hour;
}
let empdailywagearr=new Array();
empdailywagearr.push(calcdailywage(emphrs));
empdailywagearr.array.forEach(sum);
    console.log("emp wage:" +totEmpWage);

function totalWages(totalwage,dailywage){
    return totEmpWage+dailywage;
}
console.log("empwage with resuce:"+empdailywagearr.reduce(totalWages,0));

//uc7B
let dailycntr=0;
function mapdaywithwage(dailywage){
    dailycntr++;
    return dailycntr +"="+dailywage;
}
let mapdaywithwagearr=empdailywagearr.map(mapdaywithwage);
console.log("daily wage map");
console.log(mapdaywithwagearr);

//uc7C
function fulltimewage(dailywage){
    return dailywage.includes("160");
}
let fulldaywagearr=mapdaywithwagearr.filter(fulltimewage);
console.log("daily wage filter when fulltime wage earned");
console.log(fulldaywagearr);

//uc7d
function findfulltimewage(dailywage){
    return dailywage.includes("160");
}
console.log("first time fulltime wage was earned on day:"+mapdaywithwagearr.find(findfulltimewage));

//uc7e
function isallfulltimewage(dailywage){
    return dailywage.includes("160");
}
console.log("check all element have full time wage:"+fulldaywagearr.every(isallfulltimewage));

//uc7f
function isanyparttimewage(dailywage){
    return dailywage.includes("80");
}
console.log("check if any part time wage:"+mapdaywithwagearr.some(isanyparttimewage));

//uc7g
function totaldaysworked(numofdays,dailywage){
    if(dailywage>0){
        return numofdays+1;
    }
    return numofdays;
}
console.log("number of days emp worked:"+empdailywagearr.reduce(totaldaysworked,0));