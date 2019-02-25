const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/', (res, req) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`test app listening on port ${port}`);
});
