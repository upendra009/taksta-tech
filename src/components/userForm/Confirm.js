import React, { Component } from 'react';
import { Grid } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values:{ firstName, lastName, email, phoneNumber,isUSABased,gitProfile, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>         
            <AppBar title="Confirm User Data" />
            <Grid container justifyContent="center" xs={12} sm={12} md={12}>
            <Grid item  justifyContent="center"xs={3}>       
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone Number" secondary={phoneNumber} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do You Live In USA?" secondary={isUSABased} />
              </ListItem>
              <ListItem>
                <ListItemText primary="GitHub Profile" secondary={gitProfile} />
              </ListItem>
              <ListItem>
                <ListItemText primary="About You" secondary={bio} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
              style = {{marginRight : '20px'}}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
             </Grid>
          </Grid>
         
          </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;