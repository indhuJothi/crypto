const crypto = require ("crypto");
const secret ='abcdef'
const hash=crypto.createHmac('sha256',secret)
                 .update('I love Node.js')
                 .digest('hex');
console.log(hash)