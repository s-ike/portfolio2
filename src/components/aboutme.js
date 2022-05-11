import React from "react";

export default function Aboutme() {
  return (
    <section className="about section">
      <div className="about__inner inner">
        <div className="about__heading">
          <h2 className="heading-primary">about me</h2>
        </div>
        <div className="about__body">
          <div className="about__title">Shuntaro IKEDA</div>
          <div className="about__text">
            <p>
              業務では主にwebアプリの開発をしています。<br />
              プライベートでは42Tokyoのカリキュラムを通してコンピュータサイエンスを学んでいます。<br />
              Adobe IllustratorやPhotoshop等を使えるのでビジュアルを活用したコミュニケーションも得意です。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
