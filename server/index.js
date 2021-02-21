console.log('May Node be with you')

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(10000, function(){
    console.log("Listening on 10000")
})