import React from "react";
import Footer from "./footer";

const Layout = ({ title, author, children }) => {
  return (
    <>
      <div className="layout">
        <main>{children}</main>
      </div>
      <Footer
        title={title}
        author={author}
      />
    </>
  )
}

export default Layout;
