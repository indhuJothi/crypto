const crypto = require('crypto')
const decipher = crypto.createDecipher('aes192','a password')

var encrypted = 'c85d4e497bf34babd0d0b65da8141d9b';

var decrypted = decipher.update(encrypted,'hex','utf-8')
decrypted+=decipher.final('utf-8')
console.log(decrypted)

