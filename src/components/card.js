import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"

export default function Card({ title, desc, method, skills, date, link, image}) {
  const skillItems = skills.map((skill, i) => (
    <span key={i}>
      {skill}{(skills.length - 1 !== i) ? ',' : ''}
    </span>
  ))

  return (
    <>
      <div className="card__header">
        <GatsbyImage
          image={image}
          alt={title + " image"}
        />
      </div>
      <div className="card__body">
        <div className="card__title">{title}</div>
        <ul className="card__list">
          <li className="card__item">{desc}</li>
          <li className="card__item">{method}</li>
          <li className="card__item">{skillItems}</li>
          <li className="card__item">{date}</li>
        </ul>
      </div>
      {link && (
        <div className="card__footer">
          <div className="card__link">
            <a href={link} className="btn">Repository</a>
          </div>
        </div>
      )}
    </>
  )
}
