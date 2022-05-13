import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout"
import Hero from "../components/hero"
import Aboutme from "../components/aboutme"

export default function Home() {
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
    <>
      <Hero pagetitle={data.site.siteMetadata.title} />
      <Layout pagetitle={data.site.siteMetadata.title}>
        <Aboutme />
      </Layout>
    </>
  )
}
