const os = require(`os`)

//info about current user 
const user = os.userInfo()
console.log(user);

//method returns the system uptime in secods 
console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(), 
    release: os.release(),
    toatlMem: os. totalmem(),
    freeMem: os.freemem(),   
}
console.log(currentOS);