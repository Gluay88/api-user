import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [ data, setData ] = useState([])
  const API_URL = "https://jsonplaceholder.typicode.com/photos"

  useEffect(() => {
    loadData();
}, []);

const loadData = async () => {
  
  await fetch(API_URL)
  .then(response => response.json())
  .then(receiveData => setData(receiveData))
}
console.log(data);
  return (
    <div className="App">
      <h3>Photo Branch / Fetch API</h3>
      {data.map(photo => (
        <div key={photo.id} style={{marginBottom:'5rem'}}>
          <p>Photo Title: {photo.title}</p>
          <p>Photo URL: <a href={photo.url} target="_blank">Actual image</a></p>
          <img src={photo.url} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;
