import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

export default function Portfolio() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
          }
        }
      }
    }
  `)

  return (
    <section className="portfolio section">
      <div className="portfolio__inner inner">
        <div className="portfolio__heading">
          <h2 className="heading-primary">portfolio</h2>
        </div>
        <div className="portfolio__body">
          <ul>
          {
            data.allMdx.nodes.map(node => (
              <li>{node.frontmatter.title}</li>
            ))
          }
          </ul>
        </div>
      </div>
    </section>
  )
}
