import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">© 2024 Sumit Kumar. Built with ❤️ and React</p>
        <div className="footer-socials">
          <a
            href="https://github.com/sumitkumar112006"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻
          </a>
          <a
            href="https://www.linkedin.com/in/sumit-kumar-48998b345/"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼
          </a>
          <a
            href="https://sumitkumar112006.github.io/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
