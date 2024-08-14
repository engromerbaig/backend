require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/omer', (req,res)=>{
res.send('<h1>my portfolio is <a href="https://omerbaig.dev/">website</a> <h1> ' )
})


// here we are listening on port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})