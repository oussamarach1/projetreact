import React, { useState, useEffect } from 'react';
import './App.css';


const ListComponent = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <img src={item.url} alt={`Cat ${index}`} /> 
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search');
        
        const jsonData = await response.json();
        setApiData(jsonData); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Dog API</h1>
      
      <ListComponent data={apiData} /> 
    </div>
  );
};

export default App;