import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Go (main)', experience: '2 years' },
    { name: 'PostgreSQL', experience: '2 years' },
    { name: 'Python (basic)', experience: '1 year' },
    { name: 'CI/CD', experience: '1 year' },
    { name: 'Docker', experience: '1 year' },
    { name: 'Kubernetes', experience: '1 year' },
    { name: 'React (basic)', experience: '1 year' },
    { name: 'JavaScript', experience: '2 years' },
    { name: 'Git', experience: '3 years' },
  ];

  return (
    <div className="skills">
      <h2 className="skills-title">Навыки</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;