import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // data state // storage
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
    // getData();
  }, []);

  const loadData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((receivedData) => setData(receivedData));
  };
  console.log(data);
  return (
    <div className="App">
      <h3>User Branch / Fetch API</h3>
      {data.map(user => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Phone: {user.phone}</p>
          <p>User Name: {user.username}</p>
          <p>website: {user.website}</p>
          <br/>    
        </div>
      ))}
    </div>
  );
}

export default App;
