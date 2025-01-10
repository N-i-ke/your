const ContactSection = () => {
  return (
<>
<section className="contact fade-in fade-in-up" id="contact">
  <h2 className="contact-ttl fade-in fade-in-up">
    お問い合わせ
    <span>CONTACT</span>
    <span>
      コーディングの人出が足りないとき、
      <br />
      あなたの力になります
    </span>
  </h2>
  <div className="contact-inner fade-in fade-in-up">
    <form action="#" method="post">
      <div className="form" id="form">
        <div className="form-inner">
          <div className="form-item">
            <p className="form-item-label">
              お名前
              <span className="form-button">必須</span>
            </p>
            <input type="text" className="form-item-input"/>
          </div>
          <div className="form-item">
            <p className="form-item-label">
              メールアドレス
              <span className="form-button">必須</span>
            </p>
            <input type="mail" className="form-item-input" />
          </div>
          <div className="form-item">
            <p className="form-item-label">
              お問い合わせ内容
              <span className="form-button">必須</span>
            </p>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              defaultValue={""}
            />
          </div>
          <div className="check">
            <p>
              <input
                type="checkbox"
                className="checkbox"
                id="privacyCheck"
              />
              プライバシーポリシーに同意する
            </p>
            <button
              type="submit"
              className="contact-btn1"
              value="butoon clicked!!"
            >
              送信
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</section>

</>
  );
};

export default ContactSection;
