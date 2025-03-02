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
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cleanpng.com%2Fpng-angularjs-logo-javascript-security-token-5004330%2F&psig=AOvVaw0xBhSb3ll0GKDmheJvlGoj&ust=1741024184063000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODQ8O3664sDFQAAAAAdAAAAABAE", // Updated to a valid image URL
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
