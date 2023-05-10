import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
  components: {
    MuiTextField: {
      // Name of the component
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS

          "& .MuiInputBase-root": {
            color: "#f4f4f4 !important",
            width: "283px",
          },
          "& .MuiInputLabel-root": {
            color: "#404040 !important",
            fontSize: "14px",
          },
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              border: "2px solid #3a3a3a",
              width: "283px",
            },
            "&:hover fieldset": {
              border: "2px solid #3a3a3a",
            },
          },
          "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
              border: "1px solid #E5B880",
            },
          },
        },
      },
    },
  },
});

export default theme;
