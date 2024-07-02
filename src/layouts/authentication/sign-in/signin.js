// src/LoginForm.js
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import logo from "../../../assets/images/logo.png";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import sample from "assets/images/bg.png";
import { createStyles, List, ListItemText, Paper } from "@mui/material";
import { Person, Work } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const theme = createTheme({
  root: {
    '&:hover' :{
      backgroundColor: "blue"
    }
  }
});


function LoginForm() {
  const th = useTheme(theme);

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
                gap: 4
              }}
            >
              <img src={logo} alt="logo" style={{ width: "40%" }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="h6" style={{ color: "white" }}>
                  What you get
                </Typography>
                <List sx={{color: 'white', listStyle: 'disc', pl: 2, fontWeight: '300'}}>
                  <li>Free Direct Primary Care</li>
                  <li>Savings on Medications</li>
                  <li>Annual Membership Buy-Downs</li>
                  <li>Free Pharmaceuticals Coming Soon</li>
                  <li>Full Access Gifting After First $10,000 Spent</li>
                  <li>ER, Surgical, & Cancer Access</li>
                  <li>Access to Responsive & Caring Support</li>
                </List>
              </Box>
            </Box>
          </Grid>
          <Grid item>
          <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: 700,
                width: 500,
                padding: 5,
                paddingLeft: 8,
                gap: 4
              }}
            >

              <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: 1}}>
                <Typography variant="body2" style={{ color: "gray" }}>
                  Already have an account?
                </Typography>
                <Link href="#" variant="body2" style={{ color: "blue" }}>
                  Sign in
                </Link>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <Typography component="h1" variant="h5">
                  Join Us!
                </Typography>

                {/* To begin this journey, tell us which option is best describes what you are looking for?*/}
                <Typography variant="body2" style={{ color: "gray" }}>
                  To begin this journey, tell us which option is best describes what you are looking for?
                </Typography>


                {/* 3 Paper cards, Member, Provider and Admin with each description and icon */}
                <Box  sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Paper elevation={4} sx={{ display: "flex",  gap: 2, alignItems: "center", padding: 2, border: "1px solid transparent", '&:hover': {
                    backgroundColor: "#F5F9FF",
                    border: "1px solid #1565D8",
                    transition: ""
                  }}}>
                    <Avatar>
                      <Person/>
                    </Avatar>
                    <Box sx={{display: "flex", flexDirection: "column"}}>
                      <Typography variant="h6">
                        Member
                      </Typography>
                      <Typography variant="body2">
                        I am looking to join as a member
                      </Typography>
                    </Box>
                  </Paper>

                  <Paper elevation={4} sx={{ display: "flex",  gap: 2, alignItems: "center", padding: 2, border: "1px solid transparent", '&:hover': {
                    backgroundColor: "#F5F9FF",
                    border: "1px solid #1565D8",
                    transition: ""
                  } }}>
                    <Avatar>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Box sx={{display: "flex", flexDirection: "column"}}>
                      <Typography variant="h6">
                        Provider
                      </Typography>
                      <Typography variant="body2">
                        I am looking to join as a provider
                      </Typography>
                    </Box>
                  </Paper>
                  
                  <Paper elevation={4} sx={{ display: "flex",  gap: 2, border: "1px solid transparent", alignItems: "center", padding: 2, '&:hover': {
                    backgroundColor: "#F5F9FF",
                    border: "1px solid #1565D8",
                    transition: ""
                  } }}>
                    <Avatar >
                      <Work />
                    </Avatar>
                    <Box sx={{display: "flex", flexDirection: "column"}}>
                      <Typography variant="h6">
                        Admin
                      </Typography>
                      <Typography variant="body2">
                        I am looking to join as an admin
                      </Typography>
                    </Box>
                  </Paper>

                </Box>

                {/* If your membership is paid through your employer, please check your work email for login info, then download the mobile app to enjoy your benefits. */}
                <Typography variant="caption" style={{ color: "gray" }}>
                  If your membership is paid through your employer, please check your work email for login info, then download the mobile app to enjoy your benefits.
                </Typography>

              </Box>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default LoginForm;
