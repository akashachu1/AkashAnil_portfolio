import { motion } from 'framer-motion';
import { HERO } from '../data';
import { FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Blobs */}
      <div className="blob" style={{ top: '10%', left: '-10%', width: '500px', height: '500px', background: 'var(--primary)', opacity: '0.15' }}></div>
      <div className="blob" style={{ bottom: '10%', right: '-10%', width: '600px', height: '600px', background: 'var(--secondary)', opacity: '0.15' }}></div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', alignItems: 'center', gap: '4rem', zIndex: 1, position: 'relative' }}>
        
        {/* Left: Text */}
        <div className="hero-content">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              color: 'var(--primary)',
              marginBottom: '1.5rem',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}
           >
             Available for Work
           </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ 
              fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            I'm <span className="gradient-text">{HERO.name}</span>, <br />
            a Full Stack Developer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '2.5rem',
              maxWidth: '550px',
              lineHeight: 1.8
            }}
          >
           {HERO.description} I transform ideas into high-performance web applications with modern technologies.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
             <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn">Contact Me</a>
             </div>
             
             <a href="/resume.pdf" download="Akash_Anil_CV.pdf" className="btn" style={{ 
                background: 'transparent', 
                border: '1px solid var(--primary)', 
                color: 'var(--primary)',
                width: 'fit-content', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontSize: '0.9rem',
                padding: '0.6rem 1.5rem'
             }}>
                <FaDownload /> Download CV
             </a>
          </motion.div>
          
          <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
             <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaMapMarkerAlt style={{ color: 'var(--primary)' }} /> Trivandrum, India</span>
             <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaEnvelope style={{ color: 'var(--primary)' }} /> {HERO.email || 'akashanil344@gmail.com'}</span>
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
           className="hero-image"
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%', position: 'relative' }}
        >
           {/* Glow behind image */}
           <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
              zIndex: -1,
              filter: 'blur(40px)'
           }}></div>

           {/* Image */}
           <img src="/profile.png" alt="Profile" style={{ 
               width: 'auto', 
               maxWidth: '100%', 
               height: 'auto', 
               maxHeight: '600px', 
               objectFit: 'contain',
               transform: 'scale(1.1)',
               transformOrigin: 'bottom center',
               filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))' 
           }} />
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 900px) {
           .container { grid-template-columns: 1fr !important; gap: 3rem !important; }
           .hero-content { order: 2; text-align: center; }
           .hero-content h1 { font-size: 3rem !important; }
           .hero-content p { margin: 0 auto 2rem auto; }
           .hero-content div { justify-content: center; }
           .hero-image { order: 1; min-height: 400px; }
        }
      `}</style>
    </section>
  );
};
export default Hero;
