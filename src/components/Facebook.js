import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
    };

    responseFacebook = response => {
        console.log(response);
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    };

    componentsClicked = () => console.log("clicked");

    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width: '100%',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'

                }}>
                    <p>Currently Login At Facebook</p>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Most welcome, {this.state.name}</h2>
                    Email: {this.state.email}
                </div>
            );
        }
        else {
            fbContent = (<FacebookLogin
                appId="1937191109923944"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                placeholder="fddf" />
            );

        }
        return (
            <div>{fbContent}</div>

        )
    }
}
