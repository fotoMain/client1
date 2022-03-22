// npm start
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
    // fetch("http://localhost:9000/reset-password")
        .then(res => res.text())
        .then(res => {
            this.setState({apiResponse: res + " moment 2 "+Date.now()},
                (e) => {
                    console.log("=== callAPI")
                    console.log(this.state.apiResponse)
                }
            )
        })
        .catch(err => err);
  }

  componentDidMount() {

  }

  render() {

      const onClick_sendAPI = (e) => {
          console.log("=== onClick_sendAPI(e)")

          this.callAPI();
      }

    return (
        <div className="App">
          <header className="App-header">
              <p className="App-intro">{this.state.apiResponse}</p>
              <div
                  style={{width:'130px', height:'50px',
                      display:'flex',
                      flexDirection:'row',
                      justifyContent:'center',
                      backgroundColor:'red'}}>
              <button  onClick={(e)=>onClick_sendAPI(e)}>SEND API</button>
              </div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to 2 React</h1>
          </header>
        </div>
    );
  }
}

export default App;
