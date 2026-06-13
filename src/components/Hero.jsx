import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeInRight = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const Hero = () => {
  return (
    <section id="home">
      <div className="hero">
        <div className="hero-inner">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="eyebrow-badge" variants={fadeInUp}>
              👋 Hello, I'm Sumit Kumar
            </motion.div>

            <motion.h1 className="hero-title" variants={fadeInUp}>
              <span className="highlight-yellow">BUILD.</span>
              <span className="highlight-pink">CREATE.</span>
              <span className="highlight-blue">INNOVATE.</span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Full Stack Developer building AI-powered web applications and
              modern digital experiences.
            </motion.p>

            <motion.div className="hero-cta" variants={fadeInUp}>
              <a href="#projects" className="neo-btn neo-btn--yellow">
                View Projects
              </a>
              <a href="#contact" className="neo-btn neo-btn--pink">
                Hire Me
              </a>
            </motion.div>

            <motion.div className="hero-stickers" variants={fadeInUp}>
              <span
                className="neo-sticker"
                style={{ backgroundColor: 'var(--yellow, #FFD600)' }}
              >
                ⚛️ React
              </span>
              <span
                className="neo-sticker"
                style={{ backgroundColor: 'var(--green, #00E676)' }}
              >
                🟢 Node.js
              </span>
              <span
                className="neo-sticker"
                style={{ backgroundColor: 'var(--blue, #448AFF)' }}
              >
                🍃 MongoDB
              </span>
              <span
                className="neo-sticker"
                style={{ backgroundColor: 'var(--pink, #FF4081)' }}
              >
                🤖 AI
              </span>
              <span
                className="neo-sticker"
                style={{ backgroundColor: 'var(--green, #00E676)' }}
              >
                💼 Open to Work
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-avatar-container">
              <div className="hero-avatar">
                <span className="hero-avatar-emoji">👨‍💻</span>
              </div>

              <span className="neo-sticker hero-floating-sticker">⚡ Fast</span>
              <span className="neo-sticker hero-floating-sticker">
                🎨 Creative
              </span>
              <span className="neo-sticker hero-floating-sticker">
                💡 Smart
              </span>
              <span className="neo-sticker hero-floating-sticker">
                🚀 Builder
              </span>
              <span className="neo-sticker hero-floating-sticker">
                ✨ Modern
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
