const express = require('express')
const app = express()

const port = 3000

app.get("/", (res, req) => {
  res.send({
    status: "running",
  })
})

app.listen(3000,(err)=>{
  if (!err) {
    console.log(`Listening in port ${port}`)
  } else {
    console.log(err)
  }
})