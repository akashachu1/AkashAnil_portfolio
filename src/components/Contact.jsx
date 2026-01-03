import { CONTACT } from '../data';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '6rem 0' }}>
      <div className="container">
        
        <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #000000 100%)', borderRadius: '24px', padding: '4rem 2rem', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
           {/* Decor */}
           <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '250px', height: '250px', background: 'var(--primary)', opacity: 0.2, filter: 'blur(80px)', borderRadius: '50%' }}></div>
           
           <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1, color: 'white' }}>Have an idea?</h2>
           <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', color: '#d1d5db', fontSize: '1.1rem', position: 'relative', zIndex: 1 }}>
              I'm always open to discussing product design work or partnership opportunities. Let's create something amazing together.
           </p>

           <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
              <a href={`mailto:${CONTACT.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.1)', padding: '0.8rem 1.5rem', borderRadius: '50px', backdropFilter: 'blur(5px)', transition: 'background 0.3s' }} className="hover-btn">
                 <FaEnvelope /> {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.1)', padding: '0.8rem 1.5rem', borderRadius: '50px', backdropFilter: 'blur(5px)' }} className="hover-btn">
                 <FaPhoneAlt /> {CONTACT.phone}
              </a>
           </div>

           <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" style={{ fontSize: '1.8rem', color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.8}><FaLinkedin /></a>
              <a href={CONTACT.github} target="_blank" rel="noreferrer" style={{ fontSize: '1.8rem', color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.8}><FaGithub /></a>
           </div>

        </div>

        <footer style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
           <p>© 2026 Akash Anil. Built with React & Vite.</p>
        </footer>

      </div>
    </section>
  );
};
export default Contact;
