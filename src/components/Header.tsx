// Header.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
  <div className="header-inner">
    <div className="header-logo">
      <img src="img/logo.png" alt="Logo" className="header-logo-img" />
      <h3 className="header-name">ユアコーディング</h3>
    </div>
    <nav>
      <ul className="header-nav globalMenuSp">
        <li>
          <a href="#feature" className="header-list">
            特徴
          </a>
        </li>
        <li>
          <a href="#price" className="header-list">
            価格
          </a>
        </li>
        <li>
          <a href="#contact" className="header-list">
            お問い合わせ
          </a>
        </li>
      </ul>
    </nav>
    <a href="#contact" className="contact-btn">
      お問い合わせ
    </a>
    <div className="hamburger">
      <span />
      <span />
      <span />
    </div>
    <nav className="globalMenuSp">
      <ul>
        <li>
          <a href="#feature">特徴</a>
        </li>
        <li>
          <a href="#price">価格</a>
        </li>
        <li>
          <a href="#contact">お問い合わせ</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

    </>
  );
};

export default Header;
