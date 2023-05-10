import React, { useState } from "react";
import { Typography, Stack, Button, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const Welcome = (props) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = async () => {
    setLoading(true);

    if (data == "gravyplaya@gmail.com") {
      await loginUser(data);
      props.setEmail(data);
      props.setStatus("approved");
    }
    if (data == "bad@email.com") {
      props.setEmail("bad@email.com");
      props.setStatus("waitlist");
    }

    // try {
    //   console.log(data);
    //   await loginUser(data);
    //   props.setEmail(data);
    //   props.setStatus("approved");
    // } catch (error) {
    //   props.setEmail("bad@email.com");
    //   props.setStatus("waitlist");
    //   console.error(error);
    // }

    // try {
    //   const didToken = await magic.auth.loginWithMagicLink({
    //     data,
    //   });

    //   const res = await fetch("/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //       Authorization: `Bearer ${didToken}`,
    //     },
    //   });

    //   if (res.ok) {
    //     const userMetadata = await magic.user.getMetadata();
    //     setUser(userMetadata);
    //     router.push("/dashboard");
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };
  return (
    <Stack
      sx={{
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ThemeProvider>
        <Typography
          sx={{
            fontFamily: "Sequel",
            fontWeight: "324px",
            fontSize: "18px",
            color: "#F4F4F4",
          }}
        >
          PRIVATE BETA
        </Typography>
      </ThemeProvider>

      <Stack
        sx={{
          width: "stretch",
          alignItems: "center",
          pl: "8px",
          columnGap: "18px",
          borderRadius: "6px",
          cursor: "pointer",
          color: "#f4f4f4",
          "&:hover": { bgcolor: "#1e1e1e" },
        }}
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          margin="normal"
          type="text"
          placeholder="ENTER EMAIL ADDRESS"
          sx={{
            width: "283px",
            height: "44px",
            background: "#141414",
            borderRadius: "6px",
            padding: "10px",
          }}
          onBlur={(e) => {
            setData(e.target.value);
          }}
        />
        <Button
          sx={{
            width: "283px",
            height: "44px",
            background: "#181818",
            border: "2px solid #3A3A3A",
            borderRadius: "6px",
            pt: "11px",
            mt: "20px",
          }}
          onClick={() => {
            validateEmail();
          }}
        >
          {loading ? "Please Wait..." : "Continue"}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Welcome;
