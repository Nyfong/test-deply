import { Outlet } from "react-router-dom";

import UnstickyNavbar from "../navbar/UnstickyNavbar";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
export default function RootLayout() {
  return (
    <>
      <UnstickyNavbar />
      <Navbar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
