import { useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="portfolio">
      <BackgroundEffect />
      <Header />
      <HeroSection />
      <Skills />
      <SocialLinks />
    </div>
  );
}

function BackgroundEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      const gradient = ctx.createRadialGradient(x, y, 100, x, y, 300);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.5)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, 300, 0, Math.PI * 2);
      ctx.fill();
      x += dx;
      y += dy;
      if (x < 0 || x > canvas.width) dx = -dx;
      if (y < 0 || y > canvas.height) dy = -dy;
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return <canvas ref={canvasRef} className="background-canvas" />;
}

function Header() {
  return <div className="header">Логотип</div>;
}

function HeroSection() {
  return (
    <div className="hero">
      <div className="profile-pic"></div>
      <h1>UNFIXED STUDIO</h1>
      <p>Мы создаем цифровые дизайны и интерфейсы.</p>
    </div>
  );
}

function Skills() {
  const skills = ["React", "Go", "PostgreSQL", "MongoDB", "Gorm", "Next.js"];
  return (
    <div className="skills">
      {skills.map((skill) => (
        <div key={skill} className="skill-card">{skill}</div>
      ))}
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="#">Telegram</a>
      <a href="#">GitHub</a>
      <a href="#">Instagram</a>
      <a href="#">LeetCode</a>
    </div>
  );
}
