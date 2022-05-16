import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    let url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        this.setState({ data: resp });
      });
    });
  }
  render() {
    const data = this.state.data;
    console.warn(data);
    return (
      <div className="App">
        <h3>Class Fetch API </h3>
        {data.map((item) => (
          <div>
            <p>Id: {item.id} User: {item.userId}</p>
            <p>Title: {item.title}</p>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
