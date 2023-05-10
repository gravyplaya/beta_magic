import { Typography, Stack, Button } from "@mui/material";

const Approved = (props) => {
  return (
    <>
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
        <Typography
          sx={{
            color: "#F4F4F4",
            fontFamily: "Sequel",
          }}
        >
          APPROVED TESTER
        </Typography>
        <Typography sx={{ color: "#54F293" }}>
          CHECK YOUR EMAIL TO SIGN IN
        </Typography>
        <Typography sx={{ color: "F4F4F4" }}>{props.email}</Typography>
        {/* 
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
            handleClose();
          }}
        >
          Close
        </Button> */}
      </Stack>
    </>
  );
};

export default Approved;
