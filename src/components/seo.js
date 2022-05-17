import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from "react-helmet"

export default function SEO({ title, description }) {
  const site = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet
      htmlAttributes={{
        lang: "ja"
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: site.site.siteMetadata.title,
        },
      ]}
    />
  )
}
