// npm start
import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    console.log("=== callAPI start")
    fetch("https://netlify-email.netlify.app"
        , {
            mode: 'no-cors' // 'cors' by default
        })
    // fetch("http://localhost:9000/reset-password")
        .then(res => res.text())
        .then(res => {
            this.setState({apiResponse: res + " moment 2 "+Date.now()},
                (e) => {
                    console.log("=== callAPI OK")
                    console.log(res)
                    console.log(this.state.apiResponse)
                }
            )
        })
        .catch(err => {
            console.error("=== callAPI err")
            console.log(err)
        });
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
              <div
                  style={{width:'130px', height:'50px',
                      display:'flex',
                      flexDirection:'row',
                      justifyContent:'center',
                      backgroundColor:'red'}}>
                  <button  onClick={(e)=>onClick_sendAPI(e)}>SEND API</button>
              </div>          </header>
        </div>
    );
  }
}

export default App;
