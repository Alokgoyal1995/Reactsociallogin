import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
export default class Signout extends Component {
    render() {
        return (
            <div>
                <div className="name-field">
                    <TextField
                        className="location_main1"
                        id="input-with-icon-textfield"
                        name="userName"
                        placeholder="User-name"
                    />
                </div>
                <div className="name-field">
                    <TextField
                        className="location_main1"
                        id="input-with-icon-textfield"
                        name="userEmail"
                        placeholder="User-email"
                    />
                </div>
                <div className="name-field">
                    <TextField
                        className="location_main1"
                        id="input-with-icon-textfield"
                        name="password"
                        type="password"
                        placeholder="User-Password"
                    />
                </div>
                <div className="rememberme-box">
                    <FormControlLabel
                        className="remember-wrp"
                        control={<Checkbox value="checkedC" />}
                        label="Remember Me"
                    />
                </div>
                <Button variant="contained" color="secondary">
                    Submit
      </Button>

            </div>
        )
    }
}