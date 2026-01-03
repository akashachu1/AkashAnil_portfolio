import { SKILLS } from '../data';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="services" style={{ padding: '6rem 0' }}>
      <div className="container">
        <span className="section-subtitle">My Skills</span>
        <h2 className="section-title">My Expertise</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
          {SKILLS.map((category, idx) => (
            <motion.div 
              key={idx}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, borderColor: 'var(--primary)' }}
            >
              <div style={{ width: '50px', height: '50px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.5rem' }}>
                 {idx === 0 ? '💻' : idx === 1 ? '⚙️' : idx === 2 ? '🗄️' : '🔧'}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#fff' }}>{category.category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {category.skills.map((s, i) => (
                      <span key={i} style={{ 
                          fontSize: '0.85rem', 
                          color: '#d1d5db', 
                          background: 'rgba(255,255,255,0.05)', 
                          padding: '0.3rem 0.8rem', 
                          borderRadius: '20px',
                          border: '1px solid rgba(255,255,255,0.05)'
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
