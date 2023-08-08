const { log } = require('console')
const path = require('path')
log(path.sep)

const join = path.join('content', 'subfolder', 'test.js')
log(join)

const base = path.basename(join)
log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
log(absolute)