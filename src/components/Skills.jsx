import { SKILLS } from '../data';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="services" style={{ padding: '8rem 0', background: 'var(--main-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-subtitle" 
            style={{ display: 'block', marginBottom: '1rem' }}
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
            style={{ fontSize: '3rem' }}
          >
            Technical <span className="gradient-text">Expertise</span>
          </motion.h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {SKILLS.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ 
                background: 'rgba(15, 23, 42, 0.4)', 
                padding: '2.5rem', 
                borderRadius: '2rem', 
                border: '1px solid rgba(255,255,255,0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{ borderColor: 'rgba(59, 130, 246, 0.4)', y: -5 }}
            >
              <div style={{ 
                position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', 
                background: idx % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                opacity: 0.5 
              }}></div>

              <div style={{ 
                width: '60px', height: '60px', 
                background: idx % 2 === 0 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(139, 92, 246, 0.1)', 
                borderRadius: '16px', display: 'flex', alignItems: 'center', 
                justifyContent: 'center', marginBottom: '2rem', 
                color: idx % 2 === 0 ? 'var(--primary)' : 'var(--accent)', 
                fontSize: '1.8rem',
                boxShadow: `0 10px 20px ${idx % 2 === 0 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(139, 92, 246, 0.1)'}`
              }}>
                 {idx === 0 ? '💻' : idx === 1 ? '⚙️' : idx === 2 ? '🗄️' : idx === 3 ? '🌳' : idx === 4 ? '📐' : '🧠'}
              </div>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#fff', fontWeight: '800' }}>{category.category}</h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {category.skills.map((s, i) => (
                      <span key={i} style={{ 
                          fontSize: '0.9rem', 
                          color: 'rgba(255,255,255,0.7)', 
                          background: 'rgba(255,255,255,0.03)', 
                          padding: '0.5rem 1rem', 
                          borderRadius: '12px',
                          border: '1px solid rgba(255,255,255,0.05)',
                          fontWeight: '500'
                      }}>
                          {s}
                      </span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
