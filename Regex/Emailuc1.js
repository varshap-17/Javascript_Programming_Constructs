let validate=RegExp('^[a-c]*(.)[x-z]*@[a-z]*(.)[c-o]*(.)[i-n]*$');
let email=validate.test("abc.xyz@bridgelabz.co.in");
console.log(email);