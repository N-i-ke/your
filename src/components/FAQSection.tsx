const FAQSection = () => {
  return (
    <>
<section className="question fade-in fade-in-up">
  <h2 className="question-ttl fade-in fade-in-up">
    よくある質問
    <span>FAQ</span>
  </h2>
  <div className="question-inner fade-in fade-in-up">
    <dl id="acMenu">
      <dt>デザインから一貫してお願いすることは可能でしょうか</dt>
      <dd className="open">
        ユアコーディングはコーディングに特化したサービスですので、デザインからお受けすることは基本的にありません。
        ただデザインを行う際は提携しているデザイナーと連携して対応させていただきますので、別途ご連絡ください。
      </dd>
      <dt>WordPressのカスタマイズをお願いすることも可能でしょうか？</dt>
      <dd>
        可能です。ただECサイトなどの場合は構築難易度や工数の関係で綿密にヒアリングさせていただきたく思います。
      </dd>
      <dt>コーディングのスピード感が知りたい</dt>
      <dd>
        HTMLレスポンシブ込み5ページで1週間、10ページで2週間、WordPressサイト5ページで2週間、10ページで3週間が目安に
        なります。
      </dd>
    </dl>
  </div>
</section>
    </>
  );
};

export default FAQSection;
