import React from "react";

export default function Hero({ pagetitle }) {
  return (
    <div className="hero">
      <div class="hero__heading">
        <div class="hero__title">{pagetitle}</div>
      </div>
    </div>
  )
}
