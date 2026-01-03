import { ABOUT } from '../data';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'start' }}>
        
        {/* Left Col - Bio */}
        <div>
          <span className="section-subtitle" style={{ textAlign: 'left' }}>About Me</span>
          <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem' }}>
            Passionate about creating digital experiences.
          </h2>
          <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--primary)' }}>
            <p style={{ color: '#d1d5db', fontSize: '1.05rem', lineHeight: '1.8' }}>
               {ABOUT.summary}
            </p>
          </div>
        </div>

        {/* Right Col - Education Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
             <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', paddingLeft: '0.5rem' }}>Education</h3>
             {ABOUT.education.map((edu, idx) => (
               <motion.div 
                 key={idx} 
                 className="glass-card" 
                 whileHover={{ x: 10 }}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
               >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <h4 style={{ fontSize: '1.2rem', color: '#fff' }}>{edu.degree}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 'bold', background: 'rgba(59, 130, 246, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{edu.year}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)' }}>{edu.school}</p>
                  {edu.grade && <span style={{ fontSize: '0.9rem', color: '#d1d5db' }}>{edu.grade}</span>}
               </motion.div>
             ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 800px) {
           .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
export default About;
