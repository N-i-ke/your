import React from 'react';

const MainSection: React.FC = () => {
  return (
<>
<section className="main fade-in fade-in-up">
  <div className="main-inner">
    <div className="main-copy">
      <h2>
        コーディングの手間を
        <br />
        最小に、デザインに注力
        <br />
        する助けに
      </h2>
      <p>
        ユアコーディングはコーディングに
        <br />
        特化したフリーランス
        <br />
        デザインに注力されたい方の
        <br />
        助けになります
      </p>
      <a href="" className="contact-btn">
        お問い合わせ
      </a>
    </div>
    <div className="main-image">
      <img src="img/main.png" alt="メインイメージ" />
    </div>
  </div>
</section>

</>
  );
};

export default MainSection;
