import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect } from "react";
import { NavbarUser } from "./components/navbar/NavbarUser";
import TokenContext from "./context/TokenContext";
import { Router } from "./Router";
import "./styles/App.css";

function App() {
  const tokenContext = useContext(TokenContext)
  return (
    <div>
        {tokenContext.token && (
          <NavbarUser></NavbarUser>
        )}
      <Router></Router>
    </div>
  );
}

export default App;
