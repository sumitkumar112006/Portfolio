import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import aiInterviewerImg from '../assets/ai_interviewer.png';
import portfolioImg from '../assets/portfolio.png';
import imageHubImg from '../assets/image_hub.png';
import agencyUiImg from '../assets/agency_ui.png';

const projects = [
  {
    title: 'AI Interviewer',
    description:
      'An AI-powered interview preparation platform that simulates real interview scenarios with intelligent feedback and analysis.',
    image: aiInterviewerImg,
    tags: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
    link: 'https://ai-interviewer-silk.vercel.app',
    color: '#FF4D8D',
  },
  {
    title: 'Personal Portfolio',
    description:
      'A modern portfolio website showcasing my work, skills, and journey as a developer with smooth animations.',
    image: portfolioImg,
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    link: 'https://sumitkumar112006.github.io/Portfolio',
    color: '#4D96FF',
  },
  {
    title: 'Image Hub',
    description:
      'A feature-rich image gallery application with search, filters, and a beautiful masonry grid layout.',
    image: imageHubImg,
    tags: ['React', 'API Integration', 'CSS Grid'],
    link: 'https://sumitkumar112006.github.io/Gallery_project',
    color: '#6BCB77',
  },
  {
    title: 'Agency UI',
    description:
      'A stunning creative agency landing page with modern UI patterns, bold typography, and smooth interactions.',
    image: agencyUiImg,
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    link: 'https://sumitkumar112006.github.io/Agency_Project',
    color: '#FFD93D',
  },
];

function Projects() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="section">
      <motion.div
        className="section-header"
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Some things I've built with passion and code
        </p>
      </motion.div>

      <div className="projects-grid" ref={gridRef}>
        {projects.map((project, index) => (
          <motion.div
            className="neo-card project-card"
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              ease: 'easeOut',
            }}
          >
            <div style={{ height: '6px', background: project.color }} />
            <img
              className="project-card-image"
              src={project.image}
              alt={project.title}
            />
            <div className="project-card-content">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              <div className="project-card-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                className="neo-btn neo-btn--blue project-card-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
