const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Getting a resource
app.get('/resource/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Getting resource with id ${id}`);
  res.json({ message: `Resource with id ${id} retrieved` });
});

// Creating a resource
app.post('/resource', (req, res) => {
  const newResource = req.body;
  console.log('Creating new resource:', newResource);
  res.json({ message: 'Resource created', data: newResource });
});

// Updating a resource
app.put('/resource/:id', (req, res) => {
  const id = req.params.id;
  const updatedResource = req.body;
  console.log(`Updating resource with id ${id}:`, updatedResource);
  res.json({ message: `Resource with id ${id} updated`, data: updatedResource });
});

// Deleting a resource
app.delete('/resource/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Deleting resource with id ${id}`);
  res.json({ message: `Resource with id ${id} deleted` });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
