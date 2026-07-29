import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ParticleBackground from './ParticleBackground';
import { FaLinkedin, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

function App() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 }); 
    
    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = {
    bgCard: darkMode ? 'rgba(30, 41, 59, 0.95)' : 'rgba(255, 255, 255, 0.98)',
    bgSubCard: darkMode ? '#0f172a' : '#FAFAFA',
    textPrimary: darkMode ? '#f8fafc' : '#0077B6',
    textSecondary: darkMode ? '#cbd5e1' : '#333333',
    textMuted: darkMode ? '#94a3b8' : '#666666',
    border: darkMode ? '#334155' : '#E2E8F0',
    navBg: darkMode ? 'rgba(30, 41, 59, 0.90)' : 'rgba(255, 255, 255, 0.90)',
    navText: darkMode ? '#f8fafc' : '#002B5B',
  };

  return (
    <div style={{ fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: theme.textSecondary, margin: 0, padding: 0, position: 'relative', backgroundColor: darkMode ? '#0f172a' : '#f8fafc', minHeight: '100vh' }}>
      
      <style>
        {`
          /* SOLUCIÓN AL RECUADRO BLANCO: Forzar el color de fondo en todo el navegador */
          body {
            background-color: ${darkMode ? '#0f172a' : '#f8fafc'};
            margin: 0;
            padding: 0;
            transition: background-color 0.3s ease;
          }

          html { scroll-behavior: smooth; }
          .hover-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
          .hover-card:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
          .nav-link { transition: color 0.2s ease; }
          .nav-link:hover { color: #FF7F50 !important; }
          .btn-primary { transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease; }
          .btn-primary:hover { transform: scale(1.05); box-shadow: 0 8px 25px rgba(255, 127, 80, 0.5); }
          
          .floating-joystick { animation: float 3.5s ease-in-out infinite; }
          @keyframes float { 
            0% { transform: translateY(0px) rotate(0deg); } 
            50% { transform: translateY(-12px) rotate(5deg); } 
            100% { transform: translateY(0px) rotate(0deg); } 
          }

          .animate-on-scroll { 
            opacity: 0; 
            transform: translateY(60px); 
            transition: opacity 1.5s ease-out, transform 1.5s ease-out; 
          }
          .animate-on-scroll.visible { 
            opacity: 1; 
            transform: translateY(0); 
          }

          .icon-social { color: white; transition: all 0.3s ease; font-size: 2.2rem; cursor: pointer; }
          .icon-social:hover { color: #FF7F50; transform: scale(1.15); }
          .mail-container { position: relative; display: inline-block; }
          .mail-tooltip { 
            visibility: hidden; width: max-content; background-color: #FF7F50; color: #fff; 
            text-align: center; border-radius: 6px; padding: 6px 14px; position: absolute; 
            z-index: 1; top: 130%; 
            left: 50%; transform: translateX(-50%); opacity: 0; transition: opacity 0.3s; 
            font-size: 1rem; font-weight: bold; box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          }
          .mail-tooltip::after { 
            content: ""; position: absolute; bottom: 100%; left: 50%; margin-left: -5px;
            border-width: 5px; border-style: solid; border-color: transparent transparent #FF7F50 transparent;
          }
          .mail-container:hover .mail-tooltip { visibility: visible; opacity: 1; }

          .timeline-container { position: relative; padding-left: 40px; margin-top: 30px; }
          .timeline-container::before { 
            content: ''; position: absolute; left: 13px; top: 0; bottom: 0; 
            width: 4px; background: #FF7F50; border-radius: 4px; 
          }
          .timeline-item { position: relative; margin-bottom: 40px; padding: 30px; border-radius: 15px; }
          .timeline-dot { 
            position: absolute; left: -43px; top: 35px; width: 22px; height: 22px; 
            background: #FF7F50; border: 4px solid; border-radius: 50%; z-index: 2; 
            transition: transform 0.3s ease, box-shadow 0.3s ease; 
          }
          .timeline-item:hover .timeline-dot { transform: scale(1.4); box-shadow: 0 0 10px #FF7F50; }

          .skill-badge {
            display: inline-block; padding: 8px 18px; margin: 6px 6px 6px 0; border-radius: 20px;
            background-color: #FF7F50; border: none;
            color: #FFFFFF; font-weight: bold; font-size: 0.95rem;
            transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(255, 127, 80, 0.2);
          }
          .skill-badge:hover { 
            background-color: #0077B6; transform: translateY(-3px); box-shadow: 0 6px 15px rgba(0, 119, 182, 0.4); 
          }

          @media (max-width: 768px) {
            .nav-container { 
              width: 100% !important; /* Evita que se desborde a los lados */
              padding: 15px !important; 
              flex-direction: column !important; /* Apila los botones debajo de los textos */
              gap: 15px !important; 
              border-radius: 20px !important; 
            }
            .nav-links { 
              flex-wrap: wrap !important; 
              justify-content: center !important; 
              gap: 10px 15px !important; 
              font-size: 0.95rem !important; 
            }
            /* Ocultar el borde separador en celular y centrar los botones de sol/idioma */
            .nav-container > div:last-child {
              border-left: none !important;
              padding-left: 0 !important;
              justify-content: center !important;
              width: 100% !important;
            }
            .hero-title { font-size: 3.5rem !important; }
            .hero-subtitle { font-size: 1.4rem !important; }
            .section-container { padding: 50px 20px !important; }
            .timeline-container { padding-left: 30px; }
            .timeline-container::before { left: 8px; }
            .timeline-dot { left: -34px; width: 16px; height: 16px; top: 32px; }
          }
        `}
      </style>

      <ParticleBackground darkMode={darkMode} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{ position: 'fixed', top: '20px', width: '100%', display: 'flex', justifyContent: 'center', zIndex: 1000, padding: '0 10px', boxSizing: 'border-box' }}>
          <nav className="nav-container" style={{ backgroundColor: theme.navBg, backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)', border: `1px solid ${theme.border}`, borderRadius: '50px', padding: '16px 40px', display: 'flex', alignItems: 'center', gap: '35px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', width: 'max-content' }}>
            
            <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
              <a href="#sobre-mi" className="nav-link" style={{ color: theme.navText, textDecoration: 'none', fontSize: '1.15rem', fontWeight: '600' }}>{t('menu_sobre_mi')}</a>
              <a href="#experiencia" className="nav-link" style={{ color: theme.navText, textDecoration: 'none', fontSize: '1.15rem', fontWeight: '600' }}>{t('menu_experiencia')}</a>
              <a href="#educacion" className="nav-link" style={{ color: theme.navText, textDecoration: 'none', fontSize: '1.15rem', fontWeight: '600' }}>{t('menu_educacion')}</a>
              <a href="#habilidades" className="nav-link" style={{ color: theme.navText, textDecoration: 'none', fontSize: '1.15rem', fontWeight: '600' }}>{t('menu_habilidades')}</a>
              <a href="#certificados" className="nav-link" style={{ color: theme.navText, textDecoration: 'none', fontSize: '1.15rem', fontWeight: '600' }}>{t('menu_certificados')}</a>
              <a href="#contacto" className="nav-link" style={{ color: theme.navText, textDecoration: 'none', fontSize: '1.15rem', fontWeight: '600' }}>{t('menu_contacto')}</a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', borderLeft: `2px solid ${theme.border}`, paddingLeft: '20px' }}>
              <button onClick={toggleLanguage} className="btn-primary" title="Cambiar Idioma" style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', borderRadius: '50%' }}>
                <img src={i18n.language === 'es' ? 'https://flagcdn.com/w40/mx.png' : 'https://flagcdn.com/w40/us.png'} alt="Bandera" style={{ width: '34px', height: '34px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${theme.border}` }} />
              </button>
              <button onClick={toggleDarkMode} className="btn-primary" style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.8rem', padding: '4px' }}>
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </nav>
        </div>

        <header style={{ 
            minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px',
            backgroundImage: `linear-gradient(to bottom, rgba(0, 43, 91, 0.4), rgba(0, 43, 91, 0.7)), url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
          }}>
          <h1 className="hero-title" style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '6rem', color: '#FFFFFF', margin: '0 0 15px 0', letterSpacing: '2px', textShadow: '2px 4px 15px rgba(0,0,0,0.6)' }}>
            {t('nombre')}
          </h1>
          <p className="hero-subtitle" style={{ fontFamily: '"Playfair Display", Georgia, serif', fontStyle: 'italic', fontSize: '2.2rem', color: '#F8FAFC', maxWidth: '900px', margin: '0 auto', lineHeight: '1.5', textShadow: '1px 2px 10px rgba(0,0,0,0.7)' }}>
            {t('titulo')}
          </p>
        </header>

        <section id="sobre-mi" className="section-container" style={{ padding: '90px 30px', maxWidth: '1100px', margin: '40px auto', backgroundColor: theme.bgCard, borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: `1px solid ${theme.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '4px solid #FF7F50', paddingBottom: '15px', marginBottom: '40px' }}>
            <h2 style={{ color: darkMode ? '#f8fafc' : '#002B5B', fontSize: '2.5rem', margin: 0 }}>{t('sobre_mi_titulo')}</h2>
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Video%20Game.png" alt="Control de Videojuegos 3D" className="floating-joystick" style={{ width: '80px', height: '80px', objectFit: 'contain', filter: 'drop-shadow(0px 8px 8px rgba(0,0,0,0.3))' }} />
          </div>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
            <div className="hover-card" style={{ flex: '1 1 400px', backgroundColor: theme.bgSubCard, padding: '35px', borderRadius: '15px', border: `1px solid ${theme.border}` }}>
              <h3 style={{ color: theme.textPrimary, fontSize: '1.6rem', marginTop: 0 }}>{t('sobre_mi_obj_titulo')}</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: theme.textSecondary, margin: 0 }}>{t('sobre_mi_obj_desc')}</p>
            </div>
            <div className="hover-card" style={{ flex: '1 1 400px', backgroundColor: theme.bgSubCard, padding: '35px', borderRadius: '15px', border: `1px solid ${theme.border}` }}>
              <h3 style={{ color: theme.textPrimary, fontSize: '1.6rem', marginTop: 0 }}>{t('sobre_mi_pers_titulo')}</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: theme.textSecondary, margin: 0 }}>{t('sobre_mi_pers_desc')}</p>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section-container" style={{ padding: '90px 30px', maxWidth: '1100px', margin: '40px auto', backgroundColor: theme.bgCard, borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: `1px solid ${theme.border}` }}>
          <h2 style={{ borderBottom: '4px solid #FF7F50', paddingBottom: '15px', color: darkMode ? '#f8fafc' : '#002B5B', fontSize: '2.5rem', margin: 0 }}>{t('exp_titulo')}</h2>
          <div className="timeline-container">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="hover-card timeline-item animate-on-scroll" style={{ backgroundColor: theme.bgSubCard, border: `1px solid ${theme.border}` }}>
                <div className="timeline-dot" style={{ borderColor: theme.bgCard }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px', flexWrap: 'wrap', gap: '10px' }}>
                  <h3 style={{ margin: 0, color: theme.textPrimary, fontSize: '1.5rem' }}>{t(`exp_${num}_puesto`)}</h3>
                  <span style={{ color: '#FF7F50', fontWeight: 'bold', fontSize: '1rem', backgroundColor: darkMode ? '#1e293b' : '#fff', padding: '6px 18px', borderRadius: '20px', border: `1px solid ${theme.border}` }}>{t(`exp_${num}_fecha`)}</span>
                </div>
                <h4 style={{ margin: '0 0 15px 0', color: theme.textMuted, fontSize: '1.15rem' }}>{t(`exp_${num}_empresa`)}</h4>
                <p style={{ margin: 0, lineHeight: '1.7', color: theme.textSecondary, fontSize: '1.1rem' }}>{t(`exp_${num}_desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="educacion" className="section-container" style={{ padding: '90px 30px', maxWidth: '1100px', margin: '40px auto', backgroundColor: theme.bgCard, borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: `1px solid ${theme.border}` }}>
          <h2 style={{ borderBottom: '4px solid #FF7F50', paddingBottom: '15px', color: darkMode ? '#f8fafc' : '#002B5B', marginBottom: '40px', fontSize: '2.5rem' }}>{t('edu_titulo')}</h2>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
            {[1, 2].map((num) => (
              <div key={num} className="hover-card animate-on-scroll" style={{ flex: '1 1 400px', backgroundColor: theme.bgSubCard, padding: '35px', borderRadius: '15px', borderTop: '6px solid #0077B6', borderLeft: `1px solid ${theme.border}`, borderRight: `1px solid ${theme.border}`, borderBottom: `1px solid ${theme.border}` }}>
                <h3 style={{ color: theme.textPrimary, marginTop: 0, fontSize: '1.4rem' }}>{t(`edu_${num}_grado`)}</h3>
                <p style={{ color: theme.textMuted, margin: 0, fontSize: '1.1rem' }}>{t(`edu_${num}_escuela`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="habilidades" className="section-container animate-on-scroll" style={{ padding: '90px 30px', maxWidth: '1100px', margin: '40px auto', backgroundColor: theme.bgCard, borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: `1px solid ${theme.border}` }}>
          <h2 style={{ borderBottom: '4px solid #FF7F50', paddingBottom: '15px', color: darkMode ? '#f8fafc' : '#002B5B', marginBottom: '40px', fontSize: '2.5rem' }}>{t('hab_titulo')}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', alignItems: 'start' }}>
            <div className="hover-card" style={{ backgroundColor: theme.bgSubCard, padding: '30px', borderRadius: '15px', border: `1px solid ${theme.border}` }}>
              <h3 style={{ color: theme.textPrimary, fontSize: '1.4rem', marginTop: 0, marginBottom: '20px' }}>{t('hab_idiomas')}</h3>
              <div>
                <span className="skill-badge">{i18n.language === 'es' ? 'Español - Nativo' : 'Spanish - Native'}</span>
                <span className="skill-badge">{i18n.language === 'es' ? 'Inglés - Avanzado' : 'English - Advanced'}</span>
              </div>
            </div>
            <div className="hover-card" style={{ backgroundColor: theme.bgSubCard, padding: '30px', borderRadius: '15px', border: `1px solid ${theme.border}` }}>
              <h3 style={{ color: theme.textPrimary, fontSize: '1.4rem', marginTop: 0, marginBottom: '20px' }}>{t('hab_herramientas')}</h3>
              <div>
                <span className="skill-badge">Microsoft Office Software</span>
                <span className="skill-badge">Canva, PowToon, Prezi</span>
                <span className="skill-badge">HTML, CSS</span>
                <span className="skill-badge">JS, TS, React</span>
                <span className="skill-badge">Express, Tailwind</span>
                <span className="skill-badge">Mongo, SQL</span>
              </div>
            </div>
            <div className="hover-card" style={{ backgroundColor: theme.bgSubCard, padding: '30px', borderRadius: '15px', border: `1px solid ${theme.border}` }}>
              <h3 style={{ color: theme.textPrimary, fontSize: '1.4rem', marginTop: 0, marginBottom: '20px' }}>{t('hab_valores')}</h3>
              <div>
                <span className="skill-badge">{i18n.language === 'es' ? 'Liderazgo' : 'Leadership'}</span>
                <span className="skill-badge">{i18n.language === 'es' ? 'Responsabilidad' : 'Accountability'}</span>
                <span className="skill-badge">{i18n.language === 'es' ? 'Trabajo en Equipo' : 'Teamwork'}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="certificados" className="section-container animate-on-scroll" style={{ padding: '90px 30px', maxWidth: '1100px', margin: '40px auto', backgroundColor: theme.bgCard, borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: `1px solid ${theme.border}` }}>
          <h2 style={{ borderBottom: '4px solid #FF7F50', paddingBottom: '15px', color: darkMode ? '#f8fafc' : '#002B5B', marginBottom: '40px', fontSize: '2.5rem' }}>{t('cert_titulo')}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="hover-card" style={{ display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: theme.bgSubCard, padding: '20px', borderRadius: '10px', borderLeft: '4px solid #0077B6', borderTop: `1px solid ${theme.border}`, borderRight: `1px solid ${theme.border}`, borderBottom: `1px solid ${theme.border}` }}>
                <FaCheckCircle style={{ color: '#FF7F50', fontSize: '1.5rem', flexShrink: 0 }} />
                <span style={{ color: theme.textPrimary, fontWeight: 'bold', fontSize: '1.1rem' }}>{t(`cert_${num}`)}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '20px 30px', textAlign: 'center', marginTop: '40px' }}>
          <a href={i18n.language === 'es' ? "/CV_Julio_Santos_ES.pdf" : "/CV_Julio_Santos_EN.pdf"} download className="btn-primary" style={{ backgroundColor: '#FF7F50', color: 'white', textDecoration: 'none', padding: '20px 50px', borderRadius: '50px', fontSize: '1.4rem', fontWeight: '900', display: 'inline-flex', alignItems: 'center', gap: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <span style={{ fontSize: '1.8rem' }}>📄</span> {t('btn_descargar_cv')}
          </a>
        </section>

        <section id="contacto" className="section-container animate-on-scroll" style={{ padding: '80px 30px', display: 'flex', justifyContent: 'center', margin: '40px auto 100px auto' }}>
          <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center', backgroundColor: darkMode ? 'rgba(15, 23, 42, 0.7)' : 'rgba(0, 43, 91, 0.85)', backdropFilter: 'blur(10px)', padding: '50px', borderRadius: '25px', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
            <h2 style={{ margin: '0 0 35px 0', fontSize: '2.8rem', color: '#FF7F50' }}>{t('contacto_titulo')}</h2>
            <form action="https://formsubmit.co/jhver2001@gmail.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '35px' }}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="http://localhost:5173/" />
              <input type="text" name="name" placeholder={t('form_nombre')} required className="input-field" style={{ padding: '16px', borderRadius: '10px', border: '1px solid #475569', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '1.1rem' }} />
              <textarea name="message" placeholder={t('form_mensaje')} required rows="4" className="input-field" style={{ padding: '16px', borderRadius: '10px', border: '1px solid #475569', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '1.1rem', resize: 'vertical' }}></textarea>
              <button type="submit" className="btn-primary" style={{ backgroundColor: '#FF7F50', color: 'white', padding: '16px', border: 'none', borderRadius: '10px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
                {t('btn_enviar')}
              </button>
            </form>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
              <a href="https://www.linkedin.com/in/julio-santos-23bb511aa/" target="_blank" rel="noreferrer" className="icon-social" title="LinkedIn">
                <FaLinkedin />
              </a>
              <div className="mail-container icon-social">
                <FaEnvelope />
                <span className="mail-tooltip">jhver2001@gmail.com</span>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default App;