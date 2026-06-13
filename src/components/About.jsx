import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const stats = [
  { icon: '🚀', value: '4+', label: 'Projects Built' },
  { icon: '🏆', value: 'SIH', label: 'Finalist' },
  { icon: '💻', value: 'Full Stack', label: 'Developer' },
  { icon: '🎓', value: 'B.Tech', label: 'CSE Student' },
];

function About() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="section">
      <motion.div
        className="section-header"
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about building digital experiences that make a difference
        </p>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-text"
          ref={textRef}
          initial={{ opacity: 0, y: 40 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <p>
            I'm a passionate Full Stack Developer and B.Tech Computer Science
            student with a focus on building modern, AI-powered web applications.
            My journey in tech started with curiosity and has evolved into a deep
            love for creating impactful digital experiences.
          </p>
          <p>
            As a Smart India Hackathon (SIH) Finalist, I've proven my ability to
            tackle real-world problems with innovative solutions. I specialize in
            the MERN stack and love integrating AI capabilities into web
            applications.
          </p>
          <p>
            When I'm not coding, I'm exploring new technologies, contributing to
            open source, and constantly pushing the boundaries of what's possible
            with web development.
          </p>
        </motion.div>

        <div className="about-stats" ref={statsRef}>
          {stats.map((stat, index) => (
            <motion.div
              className="neo-card stat-card"
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
            >
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
