const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const staticAssets = 'build';
const dataPath = 'data';

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(staticAssets));

app.get('/api/blah', function(req, res) {
  res.sendFile(path.join(__dirname, dataPath, 'companies.json'));
});

app.get('*', (req, res) => {
  const indexFilePath = path.join(__dirname, staticAssets, 'index.html');

  fs.stat(indexFilePath, function(err, stat) {
    if (err == null) {
      res.sendFile(indexFilePath);
    } else if (err.code === 'ENOENT') {
      res.send('You might need to build project first. See README.md!');
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
