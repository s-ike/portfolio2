import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Aboutme from "../components/aboutme"

export default function Home() {
  return (
    <>
      <Hero />
      <Layout>
        <Aboutme />
      </Layout>
    </>
  )
}
