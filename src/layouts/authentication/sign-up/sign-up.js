import React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import sample from "assets/images/bg.png";
import { TextField, InputAdornment, Checkbox, FormControlLabel, Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Apostro from "../../../assets/images/curved-images/apostro.png";
import backicon from "../../../assets/images/a-back.png";
import logo from "../../../assets/images/logo.png";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

const theme = createTheme({
  root: {
    "&:hover": {
      backgroundColor: "blue",
    },
  },
});

function RegisterForm() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: "100vh" }}>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: 700,
                width: 500,
                backgroundImage: `url(${sample})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: 5,
                paddingLeft: 8,
                gap: 4,
              }}
            >
              <img src={logo} alt="logo" style={{ width: "40%" }} />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  padding: "10px",
                  alignItems: "start",
                  paddingTop: "10rem",
                }}
              >
                <img src={Apostro} alt="logo" style={{ width: "6%", paddingBottom: "1rem" }} />
                <Typography sx={{ color: "white", fontWeight: "300", lineHeight: "38px" }}>
                  HealthCoin is here to transform healthcare. Let’s pave the way toward a healthier,
                  more equitable future together.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: 700,
                width: 700,
                padding: 5,
                gap: 3,
              }}
            >
              {/* \\HEADER FORM START\\ */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", paddingLeft: "40px" }}>
                  <img
                    src={backicon}
                    style={{ width: "10px", height: "16px", justifyContent: "center" }}
                  />
                  <Typography sx={{ paddingLeft: "10px", color: "#8692A6", fontSize: "13px" }}>
                    Back
                  </Typography>
                </Box>
                <Grid sx={{ display: "flex" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#8692A6",
                      fontSize: "14px",
                      paddingRight: "10px",
                    }}
                  >
                    Already have an account?
                  </Typography>
                  <Link href="#" variant="body2" style={{ color: "blue" }}>
                    Sign in
                  </Link>
                </Grid>
              </Box>
              <SoftBox sx={{ paddingLeft: "100px", paddingTop: "60px" }}>
                <SoftTypography variant="h5" fontWeight="medium">
                  Register Individual Account
                </SoftTypography>
                <SoftTypography fontWeight="regular" sx={{ color: "#8692A6", fontSize: "14px" }}>
                  For the purpose of industry regulation, your details are required.
                </SoftTypography>
              </SoftBox>
              <Box
                sx={{
                  gap: 3,
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "15px",
                  paddingLeft: "100px",
                  paddingRight: "60px",
                }}
                fullWidth
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      sx={{ height: 40 }}
                      InputProps={{
                        sx: {
                          height: 40,
                          padding: "0 14px",
                          borderRadius: "8px",
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          top: "-7px",
                          fontSize: "14px",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      sx={{ height: 40 }}
                      InputProps={{
                        sx: {
                          height: 40,
                          padding: "0 14px",
                          borderRadius: "8px",
                          fontWeight: "300",
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          top: "-7px",
                          fontSize: "14px",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    placeholder="Email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlineIcon />
                        </InputAdornment>
                      ),
                      style: { textAlign: "left" },
                      sx: {
                        height: 40,
                        padding: "0 14px",
                        borderRadius: "8px",
                      },
                      fontSize: "small",
                    }}
                    InputLabelProps={{
                      shrink: false,
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    placeholder="Phone Number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlineIcon />
                        </InputAdornment>
                      ),
                      style: { textAlign: "left" },
                      sx: {
                        height: 40,
                        padding: "0 14px",
                        borderRadius: "8px",
                      },
                      fontSize: "small",
                    }}
                    InputLabelProps={{
                      shrink: false,
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Create password"
                      type="password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end" sx={{ color: "#4157FF" }}>
                            <VisibilityIcon />
                          </InputAdornment>
                        ),
                        style: { textAlign: "left" },
                        sx: {
                          height: 40,

                          borderRadius: "8px",
                        },
                      }}
                      InputLabelProps={{
                        shrink: false,
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Create password"
                      type="password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <VisibilityIcon />
                          </InputAdornment>
                        ),
                        style: { textAlign: "left" },
                        sx: {
                          height: 40,

                          borderRadius: "8px",
                        },
                      }}
                      InputLabelProps={{
                        shrink: false,
                      }}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxIcon />}
                      checkedIcon={<CheckBoxIcon />}
                      name="terms"
                      sx={{ color: "blue" }}
                    />
                  }
                  label={
                    <Typography sx={{ color: "#8692A6", fontSize: "14px" }}>
                      I agree to terms & conditions
                    </Typography>
                  }
                  sx={{ paddingTop: "10px" }}
                />
                <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
                  <Button
                    variant="contained"
                    sx={{
                      width: 180,
                      height: 40,
                      backgroundColor: "#4157FF",
                      borderRadius: "50px",
                      textTransform: "none",
                    }}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default RegisterForm;
