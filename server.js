const express = require('express');

const app = express();


app.get('/', (req, res) => {
  // used to be 
  // res.send('Hello World')
  const json = {};
  json.message = 'Hello World';
  json.otherMessage = 'Foo Bar Baz';

  res.json(json);
});

app.listen(3000, () => console.log(`Now listening on localhost:3000`));
