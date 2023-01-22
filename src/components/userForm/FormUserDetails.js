import React, { Component } from "react";
import {
  Grid,
  MenuItem,
  Select,
  FormControl,
  FormLabel,
  Box,
  OutlinedInput,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const isMandatory = !values.firstName || !values.email || values.isUSABased === false
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <AppBar>
                <div style={{margin :"15px"}}>Enter User Details</div>
              </AppBar>
          <Grid container style={{marginTop :"60px"}} justifyContent="center" xs={12} sm={12} md={12}>
            <Grid item justifyContent="center" xs={3}>

            <FormControl fullWidth variant="standard">
              <FormLabel style={{margin :"15px",textAlign:'left',fontWeight: 'bold' ,color : 'black'}}>First Name</FormLabel>
              <OutlinedInput
                placeholder="Enter Your First Name"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                margin="normal"
                fullWidth
              />
               </FormControl>
              <br />
              <FormControl fullWidth variant="standard">
              <FormLabel  style={{margin :"15px",textAlign:'left',fontWeight: 'bold' ,color : 'black'}}>Last Name</FormLabel>
              <OutlinedInput
                placeholder="Enter Your Last Name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                margin="normal"
                fullWidth
                
              />
               </FormControl>
              <br />
              <FormControl fullWidth variant="standard">
              <FormLabel  style={{margin :"15px",textAlign:'left',fontWeight: 'bold' ,color : 'black'}}>Email</FormLabel>
              <OutlinedInput
                placeholder="Enter Your Email"
               
                onChange={handleChange("email")}
                defaultValue={values.email}
                margin="normal"
                
                fullWidth
              />
               </FormControl>
              <br />
              <FormControl fullWidth variant="standard">
              <FormLabel  style={{margin :"15px",textAlign:'left',fontWeight: 'bold' ,color : 'black'}}>Phone Number</FormLabel>
              <OutlinedInput
                placeholder="Enter Your phone Number"
                onChange={handleChange("phone")}
                defaultValue={values.phoneNumber}
                margin="normal"
                
                fullWidth
              />
               </FormControl>
              <br />
              <Box sx={{ margin: "8px 0px 24px 0px" }}>
                <FormControl fullWidth variant="standard">
                  <FormLabel style={{margin :"15px",textAlign:'left',fontWeight: 'bold' ,color : 'black'}}> Do You Live In USA ?</FormLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    fullWidth
                    variant="outlined"
                    style={{textAlign:'left'}}
                    value={values.isUSABased}
                    onChange={handleChange("isUSABased")}
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <br />
              <br />
              <br />
              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
                disabled = {isMandatory}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;