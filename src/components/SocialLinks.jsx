import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  const socials = [
    { name: 'GitHub', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername' },
    // Add more social links as needed
  ];

  return (
    <div className="social-links">
      {socials.map((social, index) => (
        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
          {social.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;