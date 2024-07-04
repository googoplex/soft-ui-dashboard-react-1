import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo2 from "../../../assets/images/logo2.png";
import circ from "../../../assets/images/circ-1.png";

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

function Confirmation() {
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
            <Grid>
              <img src={circ} alt="circ" />
            </Grid>
            <Typography
              variant="h5"
              sx={{ fontSize: "23px", fontWeight: "bold", lineHeight: "40px" }}
            >
              Account Created successfully
            </Typography>
            <Typography variant="body2" sx={{ color: "#8692A6", lineHeight: "28px" }}>
              Welcome aboard! Start your journey with Healthcoin
            </Typography>
          </Box>
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
              LETS GO
            </Button>
          </Box>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Confirmation;
