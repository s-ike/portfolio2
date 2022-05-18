import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

export default function NotFound({ data }) {
  return (
    <>
      <SEO
        title="404 Not Found"
        description="ページが見つかりません"
      />
      <Layout>
        <div className="not-found">
          <h1>404 Not Found</h1>
          <Link to="/" className="btn">
            トップページへ
          </Link>
        </div>
      </Layout>
    </>
  )
}
