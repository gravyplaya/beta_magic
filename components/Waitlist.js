import { Typography, Stack, Button } from "@mui/material";

const Waitlist = (props) => {
  const handleClose = async () => {
    props.setStatus("welcome");
  };

  return (
    <>
      <Stack
        sx={{
          width: "372px",
          alignItems: "center",
          pl: "8px",
          columnGap: "18px",
          borderRadius: "6px",
          cursor: "pointer",
          color: "#f4f4f4",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            color: "#F4F4F4",
            className: "statusText",
          }}
        >
          WAIT LIST
        </Typography>
        <Typography sx={{ color: "F4F4F4" }}>{props.email}</Typography>
        <Typography sx={{ color: "#F25C54" }}>
          IS IN QUEUE. YOU WILL BE NOTIFIED BY EMAIL WHEN A SPOT BECOMES
          AVAILABLE
        </Typography>
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
        </Button>
      </Stack>
    </>
  );
};

export default Waitlist;
