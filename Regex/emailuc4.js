let validate=RegExp('^[x-z]*@[a-z]*(.)[c-o]*(.)[i-n]*$');
let email=validate.test("xyz@bridgelabz.co.in");
console.log(email);