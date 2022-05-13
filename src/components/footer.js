import React from "react";

export default function Footer({ pagetitle }) {
  return (
    <footer className="footer">
      <div className="footer__title">
        {pagetitle}
      </div>
      <div className="footer__copyright">
        &copy;2022 s-ikeda
      </div>
    </footer>
  )
}
