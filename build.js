const fs=require('fs');
function h53(str){var h1=0xdeadbeef,h2=0x41c6ce57;for(var i=0,ch;i<str.length;i++){ch=str.charCodeAt(i);h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677)}
h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);
return (4294967296*(2097151&h2)+(h1>>>0)).toString(36)}
const code=process.argv[2]||'Pena2026';
let s=fs.readFileSync('index.src.html','utf8');
s=s.split('__LOGO__').join(fs.readFileSync('logo64.txt','utf8').trim()).replace('__HASH__',h53(code));
fs.writeFileSync('index.html',s);console.log('ok',code,h53(code));
