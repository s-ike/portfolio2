import React from "react";

export default function Footer({ title, author }) {
  return (
    <footer className="footer">
      <div className="footer__title">
        {title}
      </div>
      <div className="footer__copyright">
        &copy;2022 {author}
      </div>
    </footer>
  )
}
