
const crypto = require ("crypto");
const text = 'Hello World'
const algo = 'aes-192-cbc'
const key = crypto.scryptSync(text,'salt',27)
const cipher = crypto.createCipher(algo,key)
let encryption = ' '
cipher.on('readable',()=>{
    let data;
    while(data= cipher.read()){
        encryption+=data.toString('hex')

    }
})

cipher.on('end',()=>console.log(encryption))
// cipher.write('I am writing something here to test')
cipher.end()
