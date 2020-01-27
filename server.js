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

// simulate request timeout
app.use((req, res, next) => {
  setTimeout(() => {
    return next();
  }, 500);
});

// serve index file
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

// get sidebar menu data
app.get('/api/companies-tree', function(req, res) {
  res.json(data.getCompaniesTree());
});

// get company details
app.get('/api/company-details', function(req, res) {
  res.json(data.getCompanyDetails(req.query.companyId));
});

// app.get('/api/employees', function(req, res) {
//   res.json(data.getEmployees());
// });

// delete Project
app.delete('/api/project/:id', function(req, res) {
  data.removeProject(req.params.id);
  res.json({ message: 'Project has been deleted.' });
});

// edit Project
app.put('/api/project/:id', function(req, res) {
  res.json(data.editProject(req.params.id, req.body));
});

// add new Project
app.post('/api/project', function(req, res) {
  res.json(data.addProject(req.body));
});

// delete employee from project
app.delete('/api/project/:id/:employeeId', function(req, res) {
  data.removeEmployeeFromProject(req.params.id, req.params.employeeId);
  res.json({ message: 'Employee has been deleted.' });
});

// handle not found
app.all('*', function(req, res) {
  res.status(404).send();
});

// handle all rest errors
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
