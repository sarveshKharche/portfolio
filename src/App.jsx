import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, MapPin, Code2, Database, BrainCircuit, BarChart3, Wrench, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './index.css';

// --- Data ---
const SKILLS = [
  { category: 'Programming', icon: <Code2 size={20}/>, items: ['Python', 'SQL', 'R'] },
  { category: 'Machine Learning & AI', icon: <BrainCircuit size={20}/>, items: ['scikit-learn', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Langchain', 'Generative AI'] },
  { category: 'Data Engineering', icon: <Database size={20}/>, items: ['AWS', 'PySpark', 'Kafka', 'ETL/ELT', 'Data Pipelines', 'Cloud Computing'] },
  { category: 'Visualization & Analysis', icon: <BarChart3 size={20}/>, items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Tableau', 'Streamlit'] },
  { category: 'Tools & Environment', icon: <Wrench size={20}/>, items: ['Git', 'Docker', 'Jupyter', 'VS Code'] }
];

const PROJECTS = [
  {
    title: 'Smart Travel Planner AI',
    image: '/images/project6.png',
    tags: ['AI', 'AWS', 'Langgraph'],
    description: 'Production-ready smart travel planner using a multi-agent AI system powered by Amazon Bedrock to generate personalized, budget-aware travel itineraries.',
    github: 'https://github.com/sarveshKharche/smart-travel-planner-AI',
    link: 'https://kharchesarvesh.medium.com/how-i-built-a-smart-travel-planner-with-a-team-of-ai-agents-61ca764f751b'
  },
  {
    title: 'Automated Flashcard Generation',
    image: '/images/project1.jpeg',
    tags: ['NLP', 'Transformers', 'LoRA'],
    description: 'NLP-powered tool that automatically generates high-quality flashcards from academic notes using a fine-tuned T5 model with Low-Rank Adaptation (LoRA).',
    github: 'https://github.com/sarveshKharche/Automated-Flashcard-Generation',
    link: 'https://kharchesarvesh.medium.com/automating-flashcard-generation-with-lora-enhanced-transformers-a79854818190'
  },
  {
    title: 'Autonomous Research Assistant',
    image: '/images/project4.jpeg',
    tags: ['AI', 'RAG', 'Langchain'],
    description: 'AI-powered research assistant that streamlines academic research by automatically gathering, summarizing, and synthesizing literature from sources like arXiv.',
    github: 'https://github.com/sarveshKharche/ai-research-assistant',
    link: 'https://kharchesarvesh.medium.com/building-an-ai-research-assistant-a-step-by-step-guide-63180c282f3b'
  },
  {
    title: 'Twitter Data Search App',
    image: '/images/project2.jpeg',
    tags: ['Azure SQL', 'MongoDB', 'Databricks'],
    description: 'Efficient system for collecting, storing, and retrieving Twitter data using Azure SQL and MongoDB with caching mechanisms.',
    github: 'https://github.com/sarveshKharche/Twitter-App',
    link: 'https://kharchesarvesh.medium.com/optimizing-twitter-data-management-and-search-with-databricks-azure-sql-and-mongodb-b1bcd58ec13f'
  }
];

const EXPERIENCE = [
  {
    role: 'AI Engineer',
    company: 'Saayam For All, Remote, US',
    date: 'Jan 2026 - Present',
    details: [
      'Accelerated answer delivery across 35+ domain categories by engineering a Flask-based API unifying multiple LLMs.',
      'Eliminated inconsistent LLM output formatting using a regex-driven prompt engineering pipeline.',
      'Built a performance monitoring framework tracking TTFT and end-to-end latency for model selection.',
      'Developed a zero-shot classification pipeline using Hugging Face BART for query categorization.'
    ]
  },
  {
    role: 'Systems Engineer',
    company: 'Tata Consultancy Services (TCS), Mumbai',
    date: 'Aug 2021 - Jun 2023',
    details: [
      'Analyzed large-scale time-series data using Python and SQL to identify anomalies, reducing response times by 40%.',
      'Partnered with stakeholders to define metrics and deliver data solutions, improving monitoring accuracy by 20%.',
      'Automated recurring reporting workflows to reduce manual effort.'
    ]
  },
  {
    role: 'Data Analytics Intern',
    company: 'Eduvance',
    date: 'Jun 2019 - Jul 2019',
    details: [
      'Applied Python for ETL and preprocessing of large datasets into analysis-ready formats.',
      'Built interactive Python dashboards to visualize data patterns.'
    ]
  }
];

// --- Components ---

const Navbar = () => (
  <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, padding: '1rem 0' }} className="glass">
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Outfit' }}>SK<span className="gradient-text">.</span></a>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
    <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ flex: 1, minWidth: '300px' }}
      >
        <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Hi, I'm</h2>
        <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1rem' }}>Sarvesh Kharche</h1>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          I build <span className="gradient-text">intelligent AI systems.</span>
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
          AI Engineer and MS in Data Science graduate specializing in scalable AI applications, end-to-end machine learning pipelines, and generative AI.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
      >
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: -10, background: 'linear-gradient(to right, var(--accent-color), var(--accent-secondary))', filter: 'blur(30px)', opacity: 0.5, borderRadius: '50%' }}></div>
          <img 
            src="/images/headshot.jpg" 
            alt="Sarvesh Kharche" 
            style={{ width: '350px', height: '350px', objectFit: 'cover', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.1)', position: 'relative', zIndex: 1 }}
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card"
        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
      >
        <h2 className="section-title" style={{ marginBottom: '2rem' }}>About Me</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          I'm Sarvesh Kharche, an AI Engineer and MS in Data Science graduate from Rutgers University. I specialize
          in building intelligent, scalable AI applications and end-to-end machine learning pipelines.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          With a strong foundation in Generative AI, NLP, and data engineering, my expertise spans across large language models, agentic workflows, and complex data architecture. From engineering high-performance APIs for unified LLM routing to developing multi-agent systems and fine-tuning transformers, I am passionate about leveraging cutting-edge technology to solve complex problems.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-secondary)' }}>
          <MapPin size={20} />
          <span>New York City, NY</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <h2 className="section-title">Technical Expertise</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {SKILLS.map((skill, index) => (
          <motion.div 
            key={skill.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ color: 'var(--accent-color)' }}>{skill.icon}</div>
              <h3 style={{ fontSize: '1.25rem' }}>{skill.category}</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {skill.items.map(item => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <h2 className="section-title">Featured Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card"
            style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="project-img" />
            </div>
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {project.tags.map(tag => <span key={tag} className="chip" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>{tag}</span>)}
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  <FaGithub size={18} /> Code
                </a>
                <a href={project.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--accent-secondary)' }}>
                  <ExternalLink size={18} /> Article
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="section">
    <div className="container">
      <h2 className="section-title">Experience & Education</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {EXPERIENCE.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{ position: 'relative', paddingLeft: '2.5rem', marginBottom: '3rem' }}
          >
            {/* Timeline Line */}
            <div style={{ position: 'absolute', left: '7px', top: '0', bottom: '-3rem', width: '2px', background: 'var(--glass-border)' }}></div>
            {/* Timeline Dot */}
            <div style={{ position: 'absolute', left: '0', top: '5px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent-color)', boxShadow: '0 0 10px var(--accent-glow)' }}></div>
            
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{exp.role}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem', color: 'var(--accent-secondary)', fontSize: '0.9rem' }}>
                <span>{exp.company}</span>
                <span>{exp.date}</span>
              </div>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
        
        {/* Education Item */}
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ position: 'relative', paddingLeft: '2.5rem' }}
          >
            <div style={{ position: 'absolute', left: '0', top: '5px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent-secondary)' }}></div>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Master of Science in Data Science</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem', color: 'var(--accent-secondary)', fontSize: '0.9rem' }}>
                <span>Rutgers University - New Brunswick</span>
                <span>Sep 2023 - Oct 2026</span>
              </div>
            </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section">
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card"
        style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '4rem 2rem' }}
      >
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Get In Touch</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="mailto:sarvesh.kharche@rutgers.edu" className="btn btn-primary" style={{ padding: '1rem' }}>
            <Mail size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sarvesh-kharche/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '1rem' }}>
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/sarveshKharche" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '1rem' }}>
            <FaGithub size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
    <div className="container">
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        Designed & Built by Sarvesh Kharche &copy; {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

function App() {
  return (
    <>
      <style>{`
        .project-img:hover {
          transform: scale(1.05);
        }
      `}</style>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
