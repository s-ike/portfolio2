import React from "react";
import Footer from "./footer";

const Layout = ({ pagetitle, children }) => {
  return (
    <>
      <div className="layout">
        <main>{children}</main>
      </div>
      <Footer pagetitle={pagetitle} />
    </>
  )
}

export default Layout;
