import React from 'react';
import './Profile.css';
import { FaGithub, FaTelegram, FaInstagram } from 'react-icons/fa'; // Иконки для соцсетей
import { SiLeetcode } from 'react-icons/si';
import {
  SiGo, SiPostgresql, SiPython, SiDocker, SiKubernetes, SiReact, SiJavascript, SiGit,
} from 'react-icons/si'; // Иконки для навыков

const Profile = () => {
  const skills = [
    { name: 'Go (main)', icon: <SiGo />, experience: '2 years' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, experience: '2 years' },
    { name: 'Python (basic)', icon: <SiPython />, experience: '1 year' },
    { name: 'CI/CD', icon: <SiDocker />, experience: '1 year' },
    { name: 'Docker', icon: <SiDocker />, experience: '1 year' },
    
    { name: 'React (basic)', icon: <SiReact />, experience: '1 year' },
    { name: 'JavaScript', icon: <SiJavascript />, experience: '2 years' },
    { name: 'Git', icon: <SiGit />, experience: '3 years' },
  ];

  return (
    <div className="profile">
  {/* Профиль слева */}
  <div className="profile-left">
    <div className="header">
      <div className="header-content">
        <img src="https://i.pinimg.com/736x/8e/f9/26/8ef92657e6ab51778d672b57315b8ed6.jpg" alt="Денис Муратбаев" className="profile-photo" />
        <div className="header-text">
          <h1>Денис Муратбаев</h1>
          <p>21 год, Бэкенд разработчик</p>
          <p className="about-me">
          Разработчик с опытом на Go и PostgreSQL. 
            Имею базовые знания React и стремлюсь к углублению навыков в бэкенд-разработке. 
            Люблю решать сложные задачи и постоянно совершенствую свои знания.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Навыки справа */}
  <div className="skills">
    
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <div className="skill-icon">{skill.icon}</div>
          <h3>{skill.name}</h3>
          <p>{skill.experience}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Соцсети внизу */}
  <div className="social-links">
  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
  <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
    <FaTelegram /> {/* Иконка для Telegram */}
  </a>
  <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
    <FaInstagram /> {/* Иконка для Instagram */}
  </a>
  <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer">
    <SiLeetcode /> {/* Иконка для LeetCode */}
  </a>
</div>
</div>
  );
};

export default Profile;