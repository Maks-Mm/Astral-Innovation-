import React, { useEffect, useState } from "react";
import "./Technologies.css"; // Import the CSS file
import Card from "../infoCards/Card";

function Technologies() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch("http://localhost:3001/technologies");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched Technologies:", data); // Debugging
        setTechnologies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchTechnologies();
  }, []);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Technologies</h1>
      <div className="technologies-container">
      {technologies.map((tech) => {
  console.log("Rendering tech:", tech); // Debugging
  return <Card key={tech.id} tech={tech} />;
})}

      </div>
    </div>
  );
}

export default Technologies;
