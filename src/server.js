const express = require('express');
const app = express();

app.get('/', (res, req) => {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('test app listening on port 3000');
});
