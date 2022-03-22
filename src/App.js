

// npm start

// yarn install
// yarn build
// yarn start

import React, { Component } from "react";

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
            <div
                style={{width:'130px', height:'50px',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'center',
                    backgroundColor:'red'}}>
                <button  onClick={(e)=>onClick_sendAPI(e)}>SEND API</button>
            </div>
        </div>
    );
  }
}

export default App;
