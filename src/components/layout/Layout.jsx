import { Outlet } from "react-router-dom";

import GlowingCursor from "../fun/GlowingCursor";
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <GlowingCursor />
      <Navbar />
      <div >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
