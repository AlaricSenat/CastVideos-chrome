const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Cache-Control", "no-cache");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  if (req.method === "OPTIONS") {
    console.log("Ongoing Options request")

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Max-Age", 1728000);
    res.header("Content-Type", "text/plain charset=UTF-8");
    res.header("Content-Length", 0);
    res.statusCode = 204;
  }
  next()
})

app.get('/:file(*)', (req, res) => {
   var filePath = path.join(__dirname, req.params.file);

  console.log(filePath)
  res.sendFile(filePath);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
