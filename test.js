const express = require('express');
const app = express();

// Server Configuration
const port = process.env.PORT || 3000;

// Routing
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

// Error Handling for 404 - Not Found
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Server Activation
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
