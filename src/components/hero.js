import React from "react";

export default function Hero({ title }) {
  return (
    <div className="hero">
      <div className="hero__heading">
        <div className="hero__title">{title}</div>
      </div>
    </div>
  )
}
