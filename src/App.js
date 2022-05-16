import React, { useState } from "react";
import axios from "axios";
import {Images} from "./components/Images";

function App() {
  const [images, setImages] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=dCMltc8sOE92zKag0-mWW36616HW87DDZMiD-mHRNRg"
    );
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
      <div className="photos">
        {images.length > 0 && <Images images={images} />}
      </div>
      <br></br>
      <p style={{textAlign:'center'}}>Copyright &copy; 2022 | Gluay S. Wang</p>
    </div>
  );
}

export default App;
