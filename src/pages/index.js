import React from "react"
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout"
import Hero from "../components/hero"
import Aboutme from "../components/aboutme"
import Portfolio from "../components/portfolio";

export default function Home({ data }) {
  return (
    <>
      <SEO
        title={data.site.siteMetadata.title}
        description="ポートフォリオサイト"
      />
      <Hero title={data.site.siteMetadata.title} />
      <Layout
        title={data.site.siteMetadata.title}
        author={data.site.siteMetadata.author}
      >
        <Aboutme
          author={data.site.siteMetadata.author}
        />
        <Portfolio />
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
