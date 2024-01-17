const express = require('express');
const app = express();
const port = 3000;

// Define dummy data
const dummyData = {
  Model: "KNN",
  N: 100,
  P: 50,
  K: 30,
  temperature: 25.5,
  humidity: 60,
  pH: 6.5,
  rainfall: 0.2
};

// Define a route to serve the dummy data
app.get('/dummy-data', (req, res) => {
  res.json(dummyData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
