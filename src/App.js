// npm start
import React, { Component } from "react";

//Access to fetch at netlify app' from origin has been blocked by CORS policy
// react fetc error cors call netlify page
//what is correct way react fetch netlify page
//what is correct way react fetch netlify page error cors call
//what is correct way react fetch netlify api  to send email
// what is correct way call page with data on netlify
// fetch netlify page as api
// call netlify function from another domain


import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    console.log("=== callAPI start")
    // fetch("https://netlify-email.netlify.app"
    const v1 = `777 \\\\ //$ '+++' 7777`;

    fetch("https://netlify-email.netlify.app/.netlify/functions/send-email"


        ,{
            // body: "7777777 8888888",
            body: JSON.stringify({"p1": v1,"p2":"8888888"}),
            mode: 'no-cors',
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTION",
            },
        }

        // , {
        //     mode: 'no-cors' // 'cors' by default
        // }
        )
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
