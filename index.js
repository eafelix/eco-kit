var express = require('express');
const PORT = process.env.PORT || 5000

express()
  .use(express.static('public'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
