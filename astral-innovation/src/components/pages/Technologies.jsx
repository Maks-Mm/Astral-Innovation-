import React, { useEffect, useState } from "react";
import './Technologies.css'; // Import the CSS file

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
      <h1>Technologies</h1>

      <div className="technologies-container">
        {technologies.map((tech) => (
          <div key={tech.id} className="technology-card">
            <h2>{tech.name}</h2>
            <img
              src={tech.imageUrl}
              alt={tech.name}
              style={{ width: "100px", height: "100px" }}
            />
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
