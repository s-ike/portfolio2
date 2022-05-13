import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Hero from "../components/hero"
import Aboutme from "../components/aboutme"

export default function Home({ data }) {
  return (
    <>
      <Hero pagetitle={data.site.siteMetadata.title} />
      <Layout pagetitle={data.site.siteMetadata.title}>
        <Aboutme />
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
