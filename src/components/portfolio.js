import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import Card from "./card";

export default function Portfolio() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            desc
            method
            date
            skills
            link
          }
          id
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
        <div className="portfolio__body card-wrapper card-wrapper--col3">
        {
          data.allMdx.nodes.map(node => (
            <div key={node.id} className="card">
              <Card
                title={node.frontmatter.title}
                desc={node.frontmatter.desc}
                skills={node.frontmatter.skills}
                method={node.frontmatter.method}
                date={node.frontmatter.date}
                link={node.frontmatter.link}
              />
            </div>
          ))
        }
        </div>
      </div>
    </section>
  )
}
