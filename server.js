const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const staticAssets = 'build';
const data = require('./data');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(staticAssets));

app.get('/', (req, res) => {
  const indexFilePath = path.join(__dirname, staticAssets, 'index.html');

  fs.stat(indexFilePath, function(err, stat) {
    if (err == null) {
      res.sendFile(indexFilePath);
    } else if (err.code === 'ENOENT') {
      res.send('You might need to build project first. See README.md!');
    }
  });
});

app.get('/api/companies', function(req, res) {
  res.json(data.getCompanies());
});

app.get('/api/companies-tree', function(req, res) {
  res.json(data.getCompaniesTree());
});

app.get('/api/employees', function(req, res) {
  res.json(data.getEmployees());
});

app.all('*', function(req, res) {
  res.status(404).send();
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
