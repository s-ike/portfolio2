import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Hero from "../components/hero"
import Aboutme from "../components/aboutme"

export default function Home({ data }) {
  return (
    <>
      <Hero title={data.site.siteMetadata.title} />
      <Layout
        title={data.site.siteMetadata.title}
        author={data.site.siteMetadata.author}
      >
        <Aboutme
          author={data.site.siteMetadata.author}
        />
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
