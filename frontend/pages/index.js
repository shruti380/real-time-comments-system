import React from "react";
import Link from "next/link";
import { Button, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container
      maxWidth={false}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundImage: "url(/images/7301428.jpg)",
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
          Welcome to Real-Time Comments
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Link href="/login" passHref>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "1rem" }}
            >
              Login
            </Button>
          </Link>
          <Link href="/comments" passHref>
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: "1rem" }}
            >
              View Comments
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
