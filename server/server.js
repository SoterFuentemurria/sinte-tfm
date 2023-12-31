const express = require("express");
const PORT = process.env.PORT || 3000
const app = express()
const path = require("path")


app.use(express.static(path.join(__dirname, '../build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });


