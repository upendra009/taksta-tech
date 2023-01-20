import React, { Component } from "react";
import { Grid, Input, InputLabel } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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

  onFileChange = (e, fileName) => {
    let formData = new FormData();
    if (e.target && e.targe.files[0]) {
      formData.append("file", e.targe.files[0], fileName);
    }
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Grid container justifyContent="center" xs={12} sm={12} md={12}>
            <Grid item justifyContent="center" xs={3}>
              {/* <AppBar title="Enter Personal Details" /> */}
              <div className="file-uploader">
                <input
                  type="file"
                  value={values.userCv}
                  onChange={(e) => this.onFileChange(e, "userCv")}
                />
              </div>
              <div className="file-uploader">
                <input
                  type="file"
                  value={values.coverLetter}
                  onChange={(e) => this.onFileChange(e, "userCoverLetter")}
                />
              </div>

              <TextField
                placeholder="Enter Your Git Profile Link"
                label="Git Profile"
                onChange={handleChange("github")}
                defaultValue={values.gitProfile}
                margin="normal"
                variant="filled"
                fullWidth
              />
              <br />
              <br />
              <TextField
                placeholder="Enter Your Bio"
                label="About You"
                onChange={handleChange("bio")}
                defaultValue={values.bio}
                margin="normal"
                variant="filled"
                fullWidth
              />
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
