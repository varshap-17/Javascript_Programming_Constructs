console.log("Restrict the pin code from taking alphabets or special characters at the beginning");
let pinregex=RegExp('^[0-9]*$');
let check=pinregex.test("A400088");
console.log(check);