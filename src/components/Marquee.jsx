const Marquee = () => {
  const items = [
    'React ⚛️',
    'Node.js 🟢',
    'MongoDB 🍃',
    'Express ⚡',
    'JavaScript 📜',
    'AI Integration 🤖',
    'Redux Toolkit 🔄',
    'Tailwind CSS 🎨',
    'Git/GitHub 📦',
    'Full Stack Developer 💻',
    'Open to Work 🚀',
    'SIH Finalist 🏆',
  ];

  // Double the items for seamless loop
  const doubledItems = [...items, ...items];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubledItems.map((item, index) => (
          <span className="marquee-item" key={index}>
            {item} •
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
