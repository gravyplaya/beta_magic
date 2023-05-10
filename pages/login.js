import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { magic } from "@/lib/magic";
import { UserContext } from "@/lib/UserContext";
import { Typography, Stack, Button, TextField } from "@mui/material";
import Waitlist from "@/components/Waitlist";
import Approved from "@/components/Approved";

export default function Login() {
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("welcome");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [waitList, setWaitList] = useState({});
  const [whiteList, setWhiteList] = useState({});

  const validEmails = ["gravyplaya@gmail.com", "geovanni@throughthelens.com"];

  useEffect(() => {
    user?.issuer && router.push("/dashboard");
  }, [user]);

  useEffect(() => {
    const getWaitList = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/waitlists/`);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        let actualData = await response.json();
        setWaitList(actualData);
      } catch (err) {
        console.log(err.message);
        setWaitList(null);
      } finally {
        setLoading(false);
      }
    };
    getWaitList();

    const getWhiteList = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/whitelists/`);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        let actualData = await response.json();
        setWhiteList(actualData);
      } catch (err) {
        console.log(err.message);
        setWhiteList(null);
      } finally {
        setLoading(false);
      }
    };
    getWhiteList();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const _isValid = (json, value) => {
      let contains = false;
      Object.keys(json).some((key) => {
        contains =
          typeof json[key] === "object"
            ? _isValid(json[key], value)
            : json[key] === value;
        return contains;
      });
      return contains;
    };

    if (_isValid(whiteList.data, email)) {
      setStatus("approved");
      try {
        const didToken = await magic.auth.loginWithMagicLink({
          email,
          showUI: false,
        });

        const res = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${didToken}`,
          },
        });

        if (res.ok) {
          const userMetadata = await magic.user.getMetadata();
          setUser(userMetadata);
          setLoading(false);
          router.push("/dashboard");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setLoading(false);
      setStatus("waitlist");
      try {
        const response = await fetch("http://localhost:1337/api/waitlists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              email: email,
            },
          }),
        });
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        // let actualData = await response.json();
        // console.log(actualData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Typography
        sx={{
          className: "statusText",
        }}
      >
        STATUS : <br />
      </Typography>
      {/* <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
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
          }}
          onBlur={(e) => {
            setEmail(e.target.value);
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
          type="submit"
        >
          {loading ? "Please Wait..." : "Continue"}
        </Button>
      </form> */}
      {status == "welcome" && (
        <form onSubmit={handleLogin}>
          <Typography
            sx={{
              color: "#F4F4F4",
              fontFamily: "Sequel",
            }}
          >
            PRIVATE BETA
          </Typography>
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
            }}
            onBlur={(e) => {
              setEmail(e.target.value);
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
            type="submit"
          >
            {loading ? "Please Wait..." : "Continue"}
          </Button>
        </form>
      )}
      {status == "waitlist" && (
        <Waitlist email={email} status={status} setStatus={setStatus} />
      )}
      {status == "approved" && (
        <Approved email={email} status={status} setStatus={setStatus} />
      )}
    </>
  );
}
