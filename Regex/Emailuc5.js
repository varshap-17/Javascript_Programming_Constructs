let email1=RegExp('^[a-b]*@[a-z]*(.)[c-z]*(.)[0-9][a]$');
let checkemail1=email1.test("abc@gmail.com.1a");
console.log(checkemail1);
let email2=RegExp('^[a-c]*@[a-z]*(.)[c-z]*(.)[a]*(.)[a-u]*$');
let checkemail2=email2.test("abc@gmail.com.aa.au");
console.log(checkemail2);