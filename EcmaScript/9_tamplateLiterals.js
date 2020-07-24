//Old
const user = 'bob';
const num = 17;
const txt = 'Hello, ' + user + ' you have ' + num + ' leters in your inbox ';

//New
const txt2 = `
Hello ${user} you have ${17} leters in your inbox 
${2 + 2} 
${Date.now()}
`;
console.log(txt2);
