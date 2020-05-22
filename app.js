const express = require('express');
const app = express();
const router = express.Router();
const axios = require('axios');
app.use('/', router);
var url = "http://mock-api.com/jz8XVpz4.mock/quiz";
router.get('/status', (req, res) => {
 axios.get(url)
 .then(response => {
  res.send(response.data);
 })
 .catch(error => {
  console.log(error);
 });
})
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Serving running at http://${hostname}:${port}/`);
});

//http://mock-api.com/wz2l1AnL.mock/words

//http://mock-api.com/NnXNL9zy.mock/tile