import { ABOUT } from '../data';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = ABOUT.experience || [];
  const internships = ABOUT.internships || [];

  return (
    <section id="experience" style={{ padding: '8rem 0', background: 'var(--secondary-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-subtitle" 
            style={{ display: 'block', marginBottom: '1rem' }}
          >
            My Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
            style={{ fontSize: '3rem' }}
          >
            Experience & <span className="gradient-text">Internships</span>
          </motion.h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          
          {/* Work Experience */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              background: 'rgba(59, 130, 246, 0.03)', 
              padding: '3rem', 
              borderRadius: '2rem', 
              border: '1px solid rgba(59, 130, 246, 0.1)',
              position: 'relative'
            }}
          >
            <div style={{ 
              position: 'absolute', top: '3rem', left: 0, width: '5px', height: '40px', 
              background: 'var(--primary)', borderRadius: '0 4px 4px 0',
              boxShadow: '0 0 15px var(--primary)'
            }}></div>
            <h3 style={{ color: 'white', marginBottom: '3rem', fontSize: '1.8rem', fontWeight: '800', paddingLeft: '0.5rem' }}>Work Experience</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {experiences.map((exp, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ 
                    minWidth: '40px', height: '40px', background: 'var(--primary)', 
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    fontSize: '1.1rem', fontWeight: '800', color: 'white', flexShrink: 0,
                    boxShadow: '0 8px 16px rgba(59, 130, 246, 0.3)'
                  }}>{idx + 1}</div>
                  <div>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{exp.duration}</span>
                    <h4 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '0.4rem', marginBottom: '0.3rem', fontWeight: '700' }}>{exp.role}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', fontWeight: '500' }}>{exp.company}</p>
                    <ul style={{ paddingLeft: '1rem', color: '#9ca3af', fontSize: '0.95rem' }}>
                      {exp.details.map((d, i) => <li key={i} style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>{d}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Internships */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              background: 'rgba(139, 92, 246, 0.03)', 
              padding: '3rem', 
              borderRadius: '2rem', 
              border: '1px solid rgba(139, 92, 246, 0.1)',
              position: 'relative'
            }}
          >
            <div style={{ 
              position: 'absolute', top: '3rem', left: 0, width: '5px', height: '40px', 
              background: 'var(--accent)', borderRadius: '0 4px 4px 0',
              boxShadow: '0 0 15px var(--accent)'
            }}></div>
            <h3 style={{ color: 'white', marginBottom: '3rem', fontSize: '1.8rem', fontWeight: '800', paddingLeft: '0.5rem' }}>Internships</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {internships.map((int, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ 
                    minWidth: '40px', height: '40px', background: 'var(--accent)', 
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    fontSize: '1.1rem', fontWeight: '800', color: 'white', flexShrink: 0,
                    boxShadow: '0 8px 16px rgba(139, 92, 246, 0.3)'
                  }}>{idx + 1}</div>
                  <div>
                    {int.duration && <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>{int.duration}</span>}
                    <h4 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '0.4rem', marginBottom: '0.3rem', fontWeight: '700' }}>{int.role}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', fontWeight: '500' }}>{int.company}</p>
                    <ul style={{ paddingLeft: '1rem', color: '#9ca3af', fontSize: '0.95rem' }}>
                      {int.details.map((d, i) => <li key={i} style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>{d}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default Experience;
