import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <>
        <section className="feature" id="feature">
  <div className="feature-inner">
    <h2 className="feature-ttl fade-in fade-in-up">
      ユアコーディング3つの特徴
      <span>FEATURE</span>
    </h2>
    <h2 className="feature-heading fade-in fade-in-up">高速コーディング</h2>
    <div className="feature-box">
      <figure>
        <img src="img/feature01.png" alt="" className="fade-in fade-in-up" />
      </figure>
      <div>
        <div className="coading11">
          <h3 className="fade-in fade-in-up coading1">
            コーディングに特化したフリーランス
            <br />
            のため、 スピード感を持った開発が可能。
          </h3>
          <p className="fade-in fade-in-up">
            開発は常にスピードとの勝負です。
            <br />
            ユアコーディングはコーディングに特化しているため、
            <br />
            素早く納品することで、クライアントがデザインに注力
            <br />
            する助けとなります。
          </p>
        </div>
      </div>
    </div>
    {/*feauturebox*/}
    <h2 className="feature-heading fade-in fade-in-up">高品質</h2>
    <div className="feature-box fade-in fade-in-up">
      <div>
        <div className="coading22">
          <h3 className="fade-in fade-in-up coading2">
            正しいマークアップで、
            <br />
            内部SEOに強いコーディングを
            <br />
            デフォルトで行います。
          </h3>
          <p className="fade-in fade-in-up">
            ユアコーディングでは、「予測しやすい」「再利用しやすい」
            <br />
            「保守しやすい」「拡張しやすい」と言った設計をもとに
            <br />
            きちんとコーディングを行うため、納品後も安心です。
          </p>
        </div>
      </div>
      <figure>
        <img src="img/feature02.png" alt="" />
      </figure>
    </div>
    {/*feauturebox*/}
    <h2 className="feature-heading fade-in fade-in-up">迅速なレスポンス</h2>
    <div className="feature-box">
      <figure>
        <img src="img/feature03.png" alt="" />
      </figure>
      <div>
        <div className="coading33">
          <h3 className="fade-in fade-in-up coading3">
            原則いただいたメッセージは、
            <br />
            業務時間内であれば6時間以内に
            <br />
            お返しいたします。
          </h3>
          <p className="fade-in fade-in-up">
            連絡を返さないフリーランスが多い中、
            <br />
            ユアコーディングでは定期的な進捗報告など、
            <br />
            社会人としての基本を踏まえて仕事を行なって
            <br />
            おります。
          </p>
        </div>
      </div>
    </div>
    {/*feauturebox*/}
  </div>
</section>

    </>
  );
};

export default FeatureSection;
