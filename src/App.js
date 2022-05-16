import React, { useState } from "react";
import axios from "axios";
import {Images} from "./components/Images";

function App() {
  const [images, setImages] = useState([]);
  const API_URL = 'https://api.unsplash.com/photos/?client_id=dCMltc8sOE92zKag0-mWW36616HW87DDZMiD-mHRNRg'

  const fetchAPI = async () => {
    const response = await axios.get(API_URL);
    console.log(response.data);
    const data = await response.data;
    setImages(data);
  };
  return (
    <div className="container">
      <br></br>
      <button className="btn btn-primary btn-md" onClick={fetchAPI}>
        Get Photo from API
      </button>
      <p style={{marginTop:'1rem'}}>Gluay S. Wang</p>
      <div className="photos">
        {images.length > 0 && <Images images={images} />}
      </div>
      <br></br>
      
    </div>
  );
}

export default App;
