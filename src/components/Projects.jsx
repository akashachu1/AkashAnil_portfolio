import { PROJECTS } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" style={{ padding: '8rem 0', background: 'var(--secondary-bg)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-subtitle" 
            style={{ display: 'block', marginBottom: '1rem' }}
          >
            Portfolio Showcase
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
            style={{ fontSize: '3rem' }}
          >
            Recent Work & <span className="gradient-text">Case Studies</span>
          </motion.h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3rem' }}>
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              className="glass-card"
              style={{ 
                padding: '0', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column', 
                border: '1px solid rgba(255,255,255,0.05)',
                background: 'rgba(15, 23, 42, 0.4)',
                borderRadius: '1.5rem',
                height: '100%'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)', border: '1px solid rgba(59, 130, 246, 0.2)' }}
            >
              {/* Image Preview */}
              <div 
                style={{ height: '240px', background: '#0a0f1d', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
                onClick={() => setSelectedProject(project)}
              >
                  {project.image ? (
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }} 
                         className="project-img"
                    />
                  ) : (
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
                        <span style={{ fontSize: '3rem' }}>📁</span>
                        <span style={{ color: '#9ca3af', marginTop: '0.5rem' }}>View Details</span>
                    </div>
                  )}
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(3,7,18,0.9), transparent)', display: 'flex', alignItems: 'flex-end', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} style={{ fontSize: '0.7rem', fontWeight: '700', padding: '0.3rem 0.8rem', background: 'var(--primary)', borderRadius: '50px', color: 'white' }}>{t}</span>
                      ))}
                    </div>
                  </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#fff', fontWeight: '700' }}>{project.title}</h3>
                <p style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.7', flexGrow: 1 }}>{project.description}</p>
                
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto', alignItems: 'center' }}>
                  <button 
                      onClick={() => setSelectedProject(project)}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontWeight: '700', color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', padding: 0 }}
                  >
                      Explore Flow <FaArrowRight style={{ fontSize: '0.8rem' }} />
                  </button>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontWeight: '600', color: '#fff', opacity: 0.7, fontSize: '0.9rem' }}>
                       Live Demo <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    {/* Project Gallery Modal */}
    <AnimatePresence>
      {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
                background: 'rgba(3, 7, 18, 0.95)', zIndex: 2000, display: 'flex', 
                alignItems: 'center', justifyContent: 'center', padding: '1rem'
            }} onClick={() => setSelectedProject(null)}>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                style={{ 
                  position: 'relative', width: '100%', maxWidth: '1100px', height: '90vh', 
                  background: '#030712', borderRadius: '1.5rem', overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }} 
                onClick={(e) => e.stopPropagation()}
              >
                  {/* Modal Header */}
                  <div style={{ 
                    padding: '1.2rem 2.5rem', 
                    background: 'rgba(59, 130, 246, 0.1)', 
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    backdropFilter: 'blur(15px)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                      <div style={{ width: '45px', height: '45px', background: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)' }}>
                        <span style={{ color: 'white', fontWeight: '800', fontSize: '1.2rem' }}>{selectedProject.title.charAt(0)}</span>
                      </div>
                      <div>
                        <h2 style={{ color: 'white', fontSize: '1.4rem', fontWeight: '800', margin: 0, letterSpacing: '-0.5px' }}>{selectedProject.title}</h2>
                        <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: '500' }}>Project Architecture & Workflow</span>
                      </div>
                    </div>
                    <button 
                        onClick={() => setSelectedProject(null)}
                        style={{ 
                          background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none', 
                          borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', 
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}
                    >
                        <FaTimes style={{ fontSize: '1.2rem' }} />
                    </button>
                  </div>
                  
                  {/* Modal Content */}
                  <div className="modal-content-scroll" style={{ padding: '3rem', overflowY: 'auto', flexGrow: 1 }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                          
                          {/* Workflow Section */}
                          {selectedProject.workflow && (
                            <motion.div 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              style={{ 
                                background: 'rgba(59, 130, 246, 0.03)', 
                                padding: '3rem', 
                                borderRadius: '2rem', 
                                border: '1px solid rgba(59, 130, 246, 0.1)',
                                position: 'relative',
                                overflow: 'hidden'
                              }}
                            >
                              <div style={{ 
                                position: 'absolute', top: '3rem', left: 0, width: '5px', height: '40px', 
                                background: 'var(--primary)', borderRadius: '0 4px 4px 0',
                                boxShadow: '0 0 15px var(--primary)'
                              }}></div>
                              <h3 style={{ color: 'white', marginBottom: '3rem', fontSize: '1.8rem', fontWeight: '800', paddingLeft: '0.5rem' }}>Core Project Flow</h3>
                              
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                                {selectedProject.workflow.map((item, i) => (
                                  <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{ display: 'flex', gap: '1.5rem' }}
                                  >
                                    <div style={{ 
                                      minWidth: '40px', height: '40px', background: 'var(--primary)', 
                                      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                      fontSize: '1.1rem', fontWeight: '800', color: 'white', flexShrink: 0,
                                      boxShadow: '0 8px 16px rgba(59, 130, 246, 0.4)'
                                    }}>{i + 1}</div>
                                    <div>
                                      <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.6rem', fontWeight: '700' }}>{item.step}</h4>
                                      <p style={{ color: 'rgba(156, 163, 175, 0.9)', fontSize: '1rem', lineHeight: '1.7' }}>{item.description}</p>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {/* Gallery Section */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                              <h3 style={{ color: 'white', fontSize: '1.8rem', fontWeight: '800' }}>Visual Showcase</h3>
                              <div style={{ height: '2px', flexGrow: 1, background: 'linear-gradient(to right, rgba(59, 130, 246, 0.3), transparent)' }}></div>
                            </div>
                            
                            <div style={{ display: 'grid', gap: '4rem' }}>
                              {selectedProject.gallery.map((img, index) => (
                                  <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                    style={{ 
                                      width: '100%', borderRadius: '1.5rem', overflow: 'hidden', 
                                      boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.8)', 
                                      border: '1px solid rgba(255,255,255,0.05)',
                                      background: '#0a0f1d'
                                    }}
                                  >
                                      <img src={img} alt={`Screenshot ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                                  </motion.div>
                              ))}
                            </div>
                          </div>
                      </div>
                  </div>

                  {/* Modal Footer */}
                  <div style={{ 
                    padding: '1.5rem 3rem', 
                    background: 'rgba(3, 7, 18, 0.9)', 
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex', justifyContent: 'flex-end', gap: '1.5rem',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <button onClick={() => setSelectedProject(null)} className="btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.8rem 2rem' }}>
                      Close
                    </button>
                    {selectedProject.link && (
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem' }}>
                        Launch Project
                      </a>
                    )}
                  </div>
              </motion.div>
          </motion.div>
      )}
    </AnimatePresence>
    </section>
  );
};

export default Projects;
