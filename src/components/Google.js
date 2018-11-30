import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
export default class Google extends Component {

    state = {
        isgooglelogin: false,
        name: "",
        email: "",
        imageUrl: ""
    };


    responseGoogle = (response) => {
        console.log(response.profileObj)
        this.setState({
            isgooglelogin: true,
            name: response.profileObj.name,
            email: response.profileObj.email,
            imageUrl: response.profileObj.imageUrl

        });

    };


    render() {
        let goocontent;
        if (this.state.isgooglelogin) {
            goocontent = (
                <div style={{
                    width: '100%',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'

                }}>
                    <p>Currently Login At Gmail</p>
                    <img src={this.state.imageUrl} alt={this.state.name} />
                    <h2>Most welcome,{this.state.name}</h2>
                    <h4> Email: {this.state.email} </h4>
                </div>
            );
        }
        else {
            goocontent = (<GoogleLogin
                clientId="158149544301-992rd7pvd89mtglv17ajjqlkpb9k2j23.apps.googleusercontent.com"
                buttonText="Login"
                fields="name,email"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />
            );

        }
        return (
            <div>{goocontent}</div>

        )
    }
}
