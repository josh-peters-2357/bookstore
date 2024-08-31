'use client'
import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  Box,
  Avatar,
  TextField,
  Button,
  createTheme,
  ThemeProvider
} from "@mui/material";
import React, { useState } from "react";
import Menu from "../components/menu/menu";
import useLoginContext from "../components/hooks/useLoginContext";
import { redirect } from "next/navigation";
import { orange } from "@mui/material/colors";

//this needs to get hella redone obviously...
declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      main: string;
    },
    background: {
      default: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export default function Login() {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn, id, setId, setLogIn } = useLoginContext();
  const [displayFailedLoginNotice, setDisplayFailedLoginNotice] = useState<boolean>(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#987070"
      },
      background: {
        default: "#F1E5D1"
      },
    },
  });
  
  const handleLogin = () => {
    const postData = async () => {
      const data = { id: userID, password: password };

      const response = await fetch("/api/login", { method: "POST", body: JSON.stringify(data)});
      return response.json();
    };

    postData().then((data) => {
      if (data.success) {
        setIsLoggedIn(true);
        setId(data.id);
      }
      else{
        setDisplayFailedLoginNotice(true);
      }
    });
  };

  if (isLoggedIn) redirect("/myprofile");

  const loginFailedJSX: React.JSX.Element = <h5>Incorrect username or password.</h5>;

  return (
    <ThemeProvider theme={theme}>
    <Menu/>
      <Container maxWidth="xs">
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar className="Avatar">
            <LockOutlined />
          </Avatar>
          <h3>Log into Josh's Library</h3>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userID"
              label="Email Address / User ID"
              name="userID"
              autoFocus
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            
            {(userID !== "" && password !== "") && 
              <Button fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={handleLogin}
                      className="focused-colors">
                Login
              </Button>}
              {(userID === "" || password === "") && 
              <Button fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={handleLogin}
                      disabled>
                Login
              </Button>}
            {displayFailedLoginNotice && loginFailedJSX}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

