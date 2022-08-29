let pinregex=RegExp('^[0-9](.)*$');
let check=pinregex.test("400 088");
console.log(check);

let sampleregex=RegExp('^[0-9]*$');
let samplecheck=sampleregex.test("400088");
console.log(samplecheck);