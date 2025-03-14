import React from 'react';
import './Header.css';
import denisPhoto from '../assets/denis.jpg'; // Импортируем вашу фотографию

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img src={denisPhoto} alt="Денис Муратбаев" className="profile-photo" />
        <div className="header-text">
          <h1>Денис Муратбаев</h1>
          <p>21 год, Бэкенд разработчик</p>
        </div>
      </div>
    </div>
  );
};

export default Header;