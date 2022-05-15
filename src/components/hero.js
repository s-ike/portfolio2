import React from "react";

export default function Hero({ title }) {
  return (
    <div className="hero">
      <div class="hero__heading">
        <div class="hero__title">{title}</div>
      </div>
    </div>
  )
}
