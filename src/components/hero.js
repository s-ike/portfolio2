import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="hero">
      <div class="hero__heading">
        <div class="hero__title">{data.site.siteMetadata.title}</div>
      </div>
    </div>
  )
}
