import React, { useState } from "react";
import Link from "next/link";
import { Button, Container, Typography, TextField } from "@mui/material";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem("sessionId", `${username}-session`);
      router.push("/comments");
    } else {
      alert("Please enter a valid username.");
    }
  };

  return (
    <Container
      maxWidth={false}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundImage: "url(/images/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <div
        className="glass"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 2,
          background: "rgba(255, 255, 255, 0.8)",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            style={{ margin: "1rem" }}
          >
            Submit
          </Button>
          <Link href="/" passHref>
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: "1rem" }}
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
