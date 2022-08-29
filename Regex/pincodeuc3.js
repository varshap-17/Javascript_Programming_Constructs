console.log("Restrict the pin code from taking alphabets or special charcters at the end");
let pinregex=RegExp('^[0-9]*$');
let check=pinregex.test("400088B");
console.log(check);