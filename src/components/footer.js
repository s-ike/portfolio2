import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

export default function Footer() {
  const site = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <div className="footer__title">
        {site.site.siteMetadata.title}
      </div>
      <div className="footer__copyright">
        &copy;2022 {site.site.siteMetadata.author}
      </div>
    </footer>
  )
}
