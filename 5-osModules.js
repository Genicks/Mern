const { log } = require('console');
const os = require('os')

const user = os.userInfo()
// console.log(user)
// console.log(os.uptime());

const currentOS = {
  currentUser: os.userInfo().username,
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(), 
  freeMem: os.freemem()
}

log(currentOS);