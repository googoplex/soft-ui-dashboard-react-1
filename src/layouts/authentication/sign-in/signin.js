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
import { List, Paper } from "@mui/material";
import { useTheme } from "@emotion/react";

import icons from "../../../assets/images/curved-images/icons.png";
import icon2 from "../../../assets/images/curved-images/icon2.png";
import icon3 from "../../../assets/images/curved-images/icon3.png";
import logo from "../../../assets/images/logo.png";

const theme = createTheme({
  root: {
    "&:hover": {
      backgroundColor: "blue",
    },
  },
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
                gap: 4,
              }}
            >
              <img src={logo} alt="logo" style={{ width: "40%" }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="h6" style={{ color: "white" }}>
                  What you Get
                </Typography>
                <List sx={{ color: "white", listStyle: "disc", pl: 2, fontWeight: "300" }}>
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
                width: 700,
                padding: 5,
                paddingLeft: 20,
                paddingRight: 20,
                gap: 3,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: 1 }}>
                <Typography variant="body2" sx={{ color: "#8692A6", fontSize: "14px" }}>
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
                <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
                  Join Us!
                </Typography>

                <Typography sx={{ color: "#8692A6", fontSize: "13px" }}>
                  To begin this journey, tell us which option is best describes what you are looking
                  for?
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Paper
                    elevation={4}
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      padding: 3,
                      boxShadow: "5px 8px 28px -4px rgba(0,0,0,0.06)",
                      "&:hover": {
                        backgroundColor: "#F5F9FF",
                        border: "1px solid #1565D8",
                        transition: "",
                      },
                    }}
                  >
                    <img src={icons} alt="Member Icon" />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6">Member</Typography>
                      <Typography sx={{ color: "#8692A6", fontSize: "13px" }}>
                        Individual and Medical Representatives
                      </Typography>
                    </Box>
                  </Paper>

                  <Paper
                    elevation={4}
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      padding: 3,
                      boxShadow: "5px 8px 28px -4px rgba(0,0,0,0.06)",
                      border: "1px solid transparent",
                      "&:hover": {
                        backgroundColor: "#F5F9FF",
                        border: "1px solid #1565D8",
                        transition: "",
                      },
                    }}
                  >
                    <img src={icon2} alt="Provider Icon" />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6">Provider</Typography>
                      <Typography sx={{ color: "#8692A6", fontSize: "13px" }}>
                        Physician and Medical Representatives
                      </Typography>
                    </Box>
                  </Paper>

                  <Paper
                    elevation={4}
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      padding: 3,
                      boxShadow: "5px 8px 28px -4px rgba(0,0,0,0.06)",
                      "&:hover": {
                        backgroundColor: "#F5F9FF",
                        border: "1px solid #1565D8",
                        transition: "",
                      },
                    }}
                  >
                    <img src={icon3} alt="Admin Icon" />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6">Admin</Typography>
                      <Typography sx={{ color: "#8692A6", fontSize: "13px" }}>
                        Own or belong to a company
                      </Typography>
                    </Box>
                  </Paper>
                </Box>

                <Typography variant="caption" sx={{ color: "#8692A6", fontSize: "10px" }}>
                  If your membership is paid through your employer, please check your work email for
                  login info, then download the mobile app to enjoy your benefits.
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
