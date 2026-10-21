import { useState } from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

export default function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" && <Login onGoToSignup={() => setPage("signup")} />}
      {page === "signup" && <Signup onGoToLogin={() => setPage("login")} />}
    </>
  );
}
