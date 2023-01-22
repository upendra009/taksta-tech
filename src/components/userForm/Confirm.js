import React, { Component } from 'react';
import { Grid } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    const formDetails = this.props.values
     formData.append('details', formDetails);
    fetch('http://localhost:3000/post', {
       method: 'POST',
       body: formData,
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
       .then((res) => res.json())
       .then((post) => {
        this.props.nextStep();
       })
       .catch((err) => {
          console.log(err.message);
       });
  }
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
                <ListItemText primary="First Name" secondary={firstName ? firstName : '----' } />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName ? lastName : '-----'} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email ? email : '-----'} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone Number" secondary={phoneNumber ? phoneNumber : '----'} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do You Live In USA?" secondary={isUSABased ? 'YES' : 'NO'} />
              </ListItem>
              <ListItem>
                <ListItemText primary="GitHub Profile" secondary={gitProfile ? gitProfile : '----' } />
              </ListItem>
              <ListItem>
                <ListItemText primary="About You" secondary={bio ? bio : '---'} />
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
              onClick={this.onSubmit}
            >Confirm & Continue</Button>
             </Grid>
          </Grid>
         
          </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;