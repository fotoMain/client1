import React, {Component} from 'react';

class SendEmail extends Component {
    constructor(props) {
        super(props);

        console.log("=== callAPI start")

        this.Url = props.p_url;
        this.Api_key = props.p_api_key;
        this.Email_from = props.p_email_from;
        this.Email_to = props.p_email_to;

        this.Subject = props.p_subject;
        this.Message  = props.p_message;
        this.Signature  = props.p_signature;
        this.Footer  = props.p_footer;
        this.CallBack  = props.p_call_back;

        this.Body = {

            "api_key": this.Api_key,
            "email_from": this.Email_from,
            "email_to":this.Email_to,
            "subject":this.Subject,
            "message":this.Message,
            "signature":this.Signature,
            "footer":this.Footer,
        }


    }

    async componentDidMount() {

        await fetch( this.Url


            ,{

                body: JSON.stringify({
                    "part1":this.Body,
                }),
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTION",
                },
            }

        )
            .then(res => res.text())
            .then(res => {
                this.setState({apiResponse: res + " moment 2 "+Date.now()},
                    (e) => {
                        console.log("=== callAPI OK")
                        console.log(res)
                        console.log(this.state.apiResponse)
                        this.CallBack();
                    }
                )
            })
            .catch(err => {
                console.error("=== callAPI err")
                console.log(err)
            });

    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default SendEmail;

