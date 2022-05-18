import React from "react";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__inner">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
