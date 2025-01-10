const Footer = () => {
  return (
<footer className="footer">
  <div className="footer__inner">
    <h3 className="footer__title">
      <a href="#">ユアコーディング</a>
    </h3>
    <ul className="footer__ul">
      <li className="footer__li">
        <a className="footer__link" href="#1">
          プライバシーポリシー
        </a>
      </li>
      <li className="footer__li">
        <a className="footer__link" href="#2" type="submit">
          個人商取引法に基づく表記
        </a>
      </li>
    </ul>
    <div className="copy-right">©ユアコーディング, All Rights Reserved. </div>
  </div>
</footer>

  );
};

export default Footer;
