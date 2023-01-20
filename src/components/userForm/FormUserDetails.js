import React, { Component } from "react";
import {
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Grid container justifyContent="center" xs={12} sm={12} md={12}>
            <Grid item justifyContent="center" xs={3}>
              <AppBar title="Enter User Details" />
              <TextField
                placeholder="Enter Your First Name"
                label="First Name"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                margin="normal"
                variant="filled"
                fullWidth
              />
              <br />
              <TextField
                placeholder="Enter Your Last Name"
                label="Last Name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                margin="normal"
                fullWidth
                variant="filled"
              />
              <br />
              <TextField
                placeholder="Enter Your Email"
                label="Email"
                onChange={handleChange("email")}
                defaultValue={values.email}
                margin="normal"
                variant="filled"
                fullWidth
              />
              <br />
              <TextField
                placeholder="Enter Your phone Number"
                label="Phone no"
                onChange={handleChange("phone")}
                defaultValue={values.phoneNumber}
                margin="normal"
                variant="filled"
                fullWidth
              />
              <br />
              <Box sx={{ margin: "8px 0px 24px 0px" }}>
                <FormControl fullWidth variant="standard">
                  <InputLabel id="demo-simple-select-label">
                    Do You Live In USA ?
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    fullWidth
                    variant="filled"
                    value={values.isUSABased}
                    label="Do You Live in USA ?"
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
