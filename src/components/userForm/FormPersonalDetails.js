import React, { Component } from "react";
import { Grid, FormControl,FormLabel,OutlinedInput} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    const isMandatory = !values.bio || !values.gitProfile
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <AppBar>
                  <div style={{margin :"15px"}}>Enter Personal Details</div>
                </AppBar>
          <Grid container style={{marginTop :"60px"}} justifyContent="center" xs={12} sm={12} md={12}>
            <Grid item justifyContent="center" xs={3}>
              <FormControl fullWidth variant="standard">
              <FormLabel  style={{margin :"15px",textAlign:'left',fontWeight: 'bold' ,color : 'black'}}>Cover Letter</FormLabel>
              <OutlinedInput
              value={values.coverLetter}
              onChange={handleChange("userCoverLetter")}
              margin="normal"
              fullWidth
              type ="file"
              />
               </FormControl>
               <br />
              <FormControl fullWidth variant="standard">
              <FormLabel  style={{margin :"15px",textAlign:'left',fontWeight: 'bold' ,color : 'black'}}>Upload CV</FormLabel>
              <OutlinedInput
              value={values.userCv}
              onChange={handleChange("userCv")}
              margin="normal"
              fullWidth
              type ="file"
              />
               </FormControl>
              <br />
               <FormControl fullWidth variant="standard">
              <FormLabel  style={{margin :"15px",textAlign:'left',fontWeight: 'bold' ,color : 'black'}}>Git Profile</FormLabel>
              <OutlinedInput
              placeholder="Enter Your Git Profile Link"
              onChange={handleChange("gitProfile")}
              defaultValue={values.gitProfile}
              margin="normal"
              fullWidth
              />
               </FormControl>
              <br />
              <br />
              <FormControl fullWidth variant="standard">
              <FormLabel  style={{margin :"15px",textAlign:'left',fontWeight: 'bold' ,color : 'black'}}>About You</FormLabel>
              <OutlinedInput
               placeholder="Enter Your Bio"
               onChange={handleChange("bio")}
               defaultValue={values.bio}
               margin="normal"
               fullWidth
              />
               </FormControl>
              <br />
              <br />

              <Button
                color="secondary" 
                variant="contained"
                onClick={this.back}
                style={{ marginRight: "20px" }}
              >
                Back
              </Button>

              <Button
                color="primary"
                disabled = {isMandatory}
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

export default FormPersonalDetails;
