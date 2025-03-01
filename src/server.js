const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

// Enable CORS to allow requests from your frontend
app.use(cors());

// Sample data for technologies
const technologies = [
  {
    id: 1,
    name: "React",
    imageUrl: "https://reactjs.org/logo-og.png",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    name: "Node.js",
    imageUrl: "https://nodejs.org/static/images/logo.svg",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    id: 3,
    name: "Angular",
    imageUrl: "https://angular.io/assets/images/logos/angular/angular.svg",
    description: "A platform for building mobile and desktop web applications.",
  },
  // Add more technologies as needed
];

// Define the /technologies route
app.get("/technologies", (req, res) => {
  res.json(technologies);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
