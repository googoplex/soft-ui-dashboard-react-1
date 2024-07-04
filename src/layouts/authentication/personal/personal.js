import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo2 from "../../../assets/images/logo2.png";
import { TextField, InputAdornment, Button, Avatar } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SoftBox from "components/SoftBox";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6A1B9A",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

function RegisterForm() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            width: "100vw",
            height: "60px",
            boxShadow: "5px 8px 28px -4px rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <img src={logo2} alt="logo" style={{ width: "7.5%" }} />
        </Box>
        <Grid
          container
          alignItems="center"
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ mb: 4, textAlign: "center", paddingTop: "60px" }}>
            <Typography
              variant="h5"
              sx={{ fontSize: "23px", fontWeight: "bold", lineHeight: "40px" }}
            >
              Complete your profile
            </Typography>
            <Typography variant="body2" sx={{ color: "#8692A6", lineHeight: "28px" }}>
              We have successfully created your new account. But <br /> before you start, we will
              need to ask a few more questions.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
              maxWidth: 400,
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Address"
              InputProps={{
                sx: {
                  height: 40,
                  borderRadius: "8px",
                  color: "#101828",
                },
              }}
              InputLabelProps={{
                shrink: false,
              }}
              fullWidth
            />
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

            <SoftBox sx={{ display: "flex", alignItems: "center" }}>
              <LockOutlinedIcon sx={{ color: "#DADADA", width: "5%" }} />
              <Typography
                variant="body2"
                sx={{ color: "#8692A6", fontSize: "13px", paddingLeft: "10px" }}
              >
                Your Info is safely secured
              </Typography>
            </SoftBox>
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
                SUBMIT
              </Button>
            </Box>
          </Box>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default RegisterForm;
