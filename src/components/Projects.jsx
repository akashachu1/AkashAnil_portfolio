import { PROJECTS } from '../data';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" style={{ padding: '6rem 0', background: 'var(--secondary-bg)' }}>
      <div className="container">
      <span className="section-subtitle">Portfolio</span>
      <h2 className="section-title">Recent Works</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginTop: '4rem' }}>
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              className="glass-card"
              style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid var(--card-border)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Image Preview */}
              <div 
                style={{ height: '220px', background: '#1f2937', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative', cursor: project.gallery ? 'pointer' : 'default' }}
                onClick={() => project.gallery && setSelectedProject(project)}
              >
                 {project.image ? (
                   <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                        className="project-img" 
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                   />
                 ) : (
                   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.5 }}>
                       <span style={{ fontSize: '3rem' }}>📁</span>
                       <span style={{ color: '#9ca3af', marginTop: '0.5rem' }}>Project Preview</span>
                   </div>
                 )}
                 <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', pointerEvents: 'none' }}></div>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                   {project.tech.slice(0, 3).map((t, i) => (
                     <span key={i} style={{ fontSize: '0.75rem', fontWeight: '600', padding: '0.2rem 0.6rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '4px', color: 'var(--primary)', border: '1px solid rgba(59, 130, 246, 0.1)' }}>{t}</span>
                   ))}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', color: '#fff' }}>{project.title}</h3>
                <p style={{ color: '#9ca3af', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1 }}>{project.description}</p>
                
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto' }}>
                  {project.gallery && (
                    <button 
                        onClick={() => setSelectedProject(project)}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: '600', color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', padding: 0 }}
                    >
                        Gallery <FaArrowRight />
                    </button>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: '600', color: 'var(--primary)', fontSize: '0.9rem' }}>
                       Live Demo <FaArrowRight />
                    </a>
                  )}
                  {!project.gallery && !project.link && (
                    <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Case study coming soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    {/* Project Gallery Modal */}
    {selectedProject && (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
            background: 'rgba(0,0,0,0.9)', zIndex: 1000, display: 'flex', 
            alignItems: 'center', justifyContent: 'center', padding: '2rem'
        }} onClick={() => setSelectedProject(null)}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', height: '90vh', overflowY: 'auto', background: '#111827', padding: '1rem', borderRadius: '1rem' }} onClick={(e) => e.stopPropagation()}>
                <button 
                    onClick={() => setSelectedProject(null)}
                    style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer', zIndex: 10 }}
                >
                    X
                </button>
                
                <h2 style={{ color: 'white', marginBottom: '1rem', textAlign: 'center' }}>{selectedProject.title} Gallery</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {selectedProject.gallery.map((img, index) => (
                        <div key={index} style={{ width: '100%' }}>
                            <img src={img} alt={`Screenshot ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '0.5rem', border: '1px solid #374151' }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )}
    </section>
  );
};
export default Projects;
