let output;

output = document.all;
output = document.all[11];
output = document.all.length;
console.log(output);

output = document.documentElement;
output = document.head;
output = document.body;
console.log(output);

output = document.head.children;
output = document.body.children;
console.log(output);

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

output = document.links;
output = document.links[0];
output = document.links[0].href = 'httpd://facebook.com';
output = document.links[0].id = 'google-link';
output = document.links[0].className = 'google-class';
output = document.links[0].classList;
console.log(output);

output = document.images;
output = document.images[0];
output = document.images[0].src;
console.log(output);

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));
console.log(output);