import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: 'React', icon: '⚛️', level: 90, color: '#61DAFB' },
  { name: 'JavaScript', icon: '🟨', level: 85, color: '#F7DF1E' },
  { name: 'Node.js', icon: '🟢', level: 85, color: '#339933' },
  { name: 'Express', icon: '⚡', level: 80, color: '#FFD93D' },
  { name: 'MongoDB', icon: '🍃', level: 80, color: '#47A248' },
  { name: 'Redux Toolkit', icon: '🔄', level: 75, color: '#764ABC' },
  { name: 'Tailwind CSS', icon: '🎨', level: 85, color: '#06B6D4' },
  { name: 'Git/GitHub', icon: '📦', level: 80, color: '#F05032' },
  { name: 'AI Integration', icon: '🤖', level: 70, color: '#FF4D8D' },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const cardRefs = useRef([]);

  const handleMouseMove = (e, cardRef) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = (cardRef) => {
    cardRef.current.style.transform = '';
  };

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills & Tools</h2>
        <p className="section-subtitle">Technologies I work with daily</p>
      </motion.div>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          if (!cardRefs.current[index]) {
            cardRefs.current[index] = React.createRef();
          }

          return (
            <motion.div
              key={skill.name}
              className="neo-card skill-card"
              ref={cardRefs.current[index]}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseMove={(e) => handleMouseMove(e, cardRefs.current[index])}
              onMouseLeave={() => handleMouseLeave(cardRefs.current[index])}
            >
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-level">
                <motion.div
                  className="skill-level-fill"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
