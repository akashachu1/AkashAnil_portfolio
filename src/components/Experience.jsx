import { ABOUT } from '../data';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = ABOUT.experience || [];
  const internships = ABOUT.internships || [];

  return (
    <section id="experience" style={{ padding: '6rem 0', background: 'var(--secondary-bg)' }}>
      <div className="container">
      <span className="section-subtitle">Career Path</span>
      <h2 className="section-title">Experience & Internships</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
          
          {/* Work Experience */}
          <div>
             <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)' }}>
               <span style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></span>
               Experience
             </h3>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {experiences.map((exp, idx) => (
                   <motion.div 
                     key={idx} 
                     className="glass-card"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     style={{ borderLeft: '2px solid var(--primary)' }}
                   >
                       <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{exp.duration}</span>
                       <h4 style={{ fontSize: '1.3rem', marginTop: '0.5rem', marginBottom: '0.3rem', color: '#fff' }}>{exp.role}</h4>
                       <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{exp.company}</p>
                       <ul style={{ paddingLeft: '1rem', color: '#9ca3af', fontSize: '0.95rem' }}>
                          {exp.details.map((d, i) => <li key={i} style={{ marginBottom: '0.4rem' }}>• {d}</li>)}
                       </ul>
                   </motion.div>
                ))}
             </div>
          </div>

          {/* Internships */}
          <div>
             <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)' }}>
               <span style={{ width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent)' }}></span>
               Internships
             </h3>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {internships.map((int, idx) => (
                   <motion.div 
                     key={idx} 
                     className="glass-card"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     style={{ borderLeft: '2px solid var(--accent)' }}
                   >
                       {int.duration && <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>{int.duration}</span>}
                       <h4 style={{ fontSize: '1.3rem', marginTop: '0.5rem', marginBottom: '0.3rem', color: '#fff' }}>{int.role}</h4>
                       <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{int.company}</p>
                       <ul style={{ paddingLeft: '1rem', color: '#9ca3af', fontSize: '0.95rem' }}>
                          {int.details.map((d, i) => <li key={i} style={{ marginBottom: '0.4rem' }}>• {d}</li>)}
                       </ul>
                   </motion.div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Experience;
