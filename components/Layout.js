import { Stack } from "@mui/material";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <Stack
      sx={{
        pt: "60px",
        overflow: "hidden",
        direction: "row",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        sx={{
          zIndex: "999",
          bgcolor: "rgba(16, 16, 16, 0.92)",
          backdropFilter: "blur(25px)",
          height: "60px",
          width: "stretch",
          position: "fixed",
          top: "0px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href="/">
          <Stack
            component="img"
            id="ttl-logo"
            src="/images/TTL_logo.svg"
            sx={{ height: "44px", width: "44px", borderRadius: "999px" }}
          />
        </Link>
      </Stack>

      <main>{children}</main>
    </Stack>
  );
}
