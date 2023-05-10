import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { UserContext } from "@/lib/UserContext";
import { useRouter } from "next/router";
import { magic } from "@/lib/magic";

import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    setUser({ loading: true });
    magic.user.isLoggedIn().then((isLoggedIn) => {
      if (isLoggedIn) {
        magic.user.getMetadata().then((userData) => setUser(userData));
        router.push("/dashboard");
      } else {
        router.push("/login");
        setUser({ user: null });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContext.Provider>
  );
}
