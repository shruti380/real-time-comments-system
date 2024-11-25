import React, { useEffect, useState } from "react";
import { Button, Container, Typography, TextField, Box } from "@mui/material";
import Link from "next/link";
import { io } from "socket.io-client";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios"; 

const socket = io("http://localhost:4000");

export default function Comments() {
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery("(max-width:425px)");

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const sessionId = localStorage.getItem("sessionId");
    if (sessionId) {
      setUsername(sessionId.split("-")[0]);
    }

    fetchComments();

    socket.on("newComment", (comment) => {
      setComments((prevComments) => [...prevComments, comment]);
    });

    return () => {
      socket.off("newComment");
    };
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/comments"); // Using Axios GET
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCommentSubmit = async () => {
    if (!username) {
      alert("You must be logged in to post a comment.");
      return;
    }

    const commentData = { username, comment: newComment };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/comments", // Using Axios POST
        commentData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setNewComment("");
      } else {
        console.error("Failed to post comment.");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundImage: "url(/images/7301428.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        flexDirection: isTabletOrMobile ? "column" : "row",
        alignItems: isTabletOrMobile ? "center" : "stretch",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: isMobile ? "1rem" : "2rem",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: isMobile ? "1rem" : "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            width: isMobile ? "90%" : "80%",
            maxWidth: "600px",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Comments
          </Typography>
          <TextField
            label="Add a comment"
            variant="outlined"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            sx={{ marginBottom: "1rem" }}
            fullWidth
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "1rem",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleCommentSubmit}
              fullWidth
            >
              Post Comment
            </Button>
            <Link href="/" passHref>
              <Button variant="contained" color="secondary" fullWidth>
                Back to Home
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          padding: "2rem",
          overflowY: "auto",
          borderLeft: isTabletOrMobile
            ? "none"
            : "2px solid rgba(255, 255, 255, 0.5)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          width: isTabletOrMobile ? "100%" : "auto",
        }}
      >
        <Typography
          variant="h6"
          sx={{ textAlign: "left", marginBottom: "1rem" }}
        >
          Posted Comments:
        </Typography>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "10px",
            padding: "1rem",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{ textAlign: "left", marginBottom: "1rem" }}
              >
                <strong>{comment.username}</strong>: {comment.comment}
                <br />
                <small>{new Date(comment.timestamp).toLocaleString()}</small>
              </Typography>
            ))
          ) : (
            <Typography variant="body1">No comments yet.</Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}
