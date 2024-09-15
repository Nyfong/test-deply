import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Servicepage from "./pages/service-page";
import "./index.css";
import Homepage from "./pages/homepage";
import Navbar from "./components/navbar/Navbar";
import UnstickyNavbar from "./components/navbar/UnstickyNavbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <UnstickyNavbar />
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
