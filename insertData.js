const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tutorials_db")
  .then(() => {
    console.log("✅ Connected to MongoDB");
    // Insert sample data after successful connection
    const Technology = mongoose.model("Technology", new mongoose.Schema({
      name: String,
      imageUrl: String,
      description: String,
    }));

    Technology.insertMany([
      {
        name: "React",
        imageUrl: "https://reactjs.org/logo-og.png",
        description: "A JavaScript library for building user interfaces.",
      },
      {
        name: "Node.js",
        imageUrl: "https://nodejs.org/static/images/logo.svg",
        description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
      },
      {
        name: "Angular",
        imageUrl: "https://angular.io/assets/images/logos/angular/angular.svg",
        description: "A platform for building mobile and desktop web applications.",
      },
    ])
      .then(() => {
        console.log("✅ Sample data inserted!");
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error("❌ Error inserting data:", err);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });