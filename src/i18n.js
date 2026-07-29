import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      "nombre": "JULIO SANTOS",
      "titulo": "Licenciado en Comercio Internacional",
      "hero_desc": "Optimizando cadenas de suministro y diseñando estrategias de expansión global.",
      "menu_sobre_mi": "Sobre Mí",
      "menu_experiencia": "Experiencia",
      "menu_educacion": "Educación",
      "menu_habilidades": "Habilidades",
      "menu_certificados": "Certificados",
      "menu_contacto": "Contacto",
      
      "sobre_mi_titulo": "Conoce más sobre mí",
      "sobre_mi_obj_titulo": "Objetivo Profesional",
      "sobre_mi_obj_desc": "Busco aportar valor en áreas administrativas, comerciales o de marketing dentro de una empresa sólida. Me apasiona contribuir activamente a la mejora de procesos, la ejecución de estrategias logísticas y el fortalecimiento de relaciones comerciales para impulsar el crecimiento corporativo.",
      "sobre_mi_pers_titulo": "A nivel personal...",
      "sobre_mi_pers_desc": "Soy una persona amigable y curiosa a la que le encanta explorar, hacer senderismo al aire libre e intentar cosas nuevas. En mi tiempo libre, disfruto mucho salir a correr y mantenerme activo en el gimnasio, escuchar buena música (¡y participar en el karaoke!), ver películas de terror y jugar videojuegos, con una gran afición por los títulos de survival horror y las partidas multijugador.",
      
      "exp_titulo": "Experiencia Laboral",
      "exp_1_puesto": "Asistente de Tienda de Licores",
      "exp_1_empresa": "Park Place Lodge / St. Regis Fine Wines & Spirits — Fernie, BC, Canadá",
      "exp_1_fecha": "Oct 2024 - Ago 2026",
      "exp_1_desc": "Atención al cliente en inglés, recomendaciones personalizadas de vinos/licores y manejo estricto de inventario comercial.",
      "exp_2_puesto": "Account Specialist & Sales Support",
      "exp_2_empresa": "Fastenal — México",
      "exp_2_fecha": "Feb 2023 - Jun 2024",
      "exp_2_desc": "Gestión de cuentas clave, coordinación de pedidos internacionales, facturación, y seguimiento postventa para la solución de incidencias operativas.",
      "exp_3_puesto": "Practicante de Planeación Operativa",
      "exp_3_empresa": "Grupo CICE — Veracruz, México",
      "exp_3_fecha": "Jul 2022 - Feb 2023",
      "exp_3_desc": "Análisis estratégico de operaciones portuarias, control de tonelaje, generación de reportes y apoyo directo en logística aduanera.",
      "exp_4_puesto": "Practicante de Procesos Comerciales",
      "exp_4_empresa": "FEMSA / OXXO — México",
      "exp_4_fecha": "Sep 2021 - May 2022",
      "exp_4_desc": "Apoyo en operaciones de cadena de suministro y gestión de sistema ERP. Funciones de cajero, asistencia en coordinación de tienda, gestión de solicitudes de suministro y soporte telefónico para más de 200 sucursales.",
      "exp_5_puesto": "Proyecto de Marketing (Innovation Meet Up)",
      "exp_5_empresa": "Universidad Tecmilenio",
      "exp_5_fecha": "2021",
      "exp_5_desc": "Desarrollo de estrategias de marketing digital enfocadas en el engagement del consumidor para Zingara Swimwear. Liderazgo en la planificación de contenido para redes sociales.",
      
      "edu_titulo": "Formación Académica",
      "edu_1_grado": "Diploma en Web Development",
      "edu_1_escuela": "Cornerstone College — Vancouver, BC, Canadá",
      "edu_2_grado": "Licenciatura en Comercio Internacional",
      "edu_2_escuela": "Universidad Tecmilenio — Veracruz, México",

      "hab_titulo": "Habilidades y Valores",
      "hab_idiomas": "Idiomas",
      "hab_herramientas": "Herramientas Digitales",
      "hab_valores": "Valores",
      
      "cert_titulo": "Cursos y Certificaciones",
      "cert_1": "English Business",
      "cert_2": "International Business Management",
      "cert_3": "International Law",
      "cert_4": "Logistics and Supply Chain",
      "cert_5": "Conscious Leadership (Certificado CBC)",
      "cert_6": "Positive Leadership",
      
      "descargar_cv_titulo": "Mi Trayectoria en Detalle",
      "btn_descargar_cv": "Descargar CV",
      
      "contacto_titulo": "Contacto",
      "contacto_desc": "¿Listo para optimizar tus operaciones internacionales? Envíame un mensaje directo.",
      "form_nombre": "Tu Nombre",
      "form_mensaje": "Escribe tu mensaje aquí...",
      "btn_enviar": "Enviar Mensaje"
    }
  },
  en: {
    translation: {
      "nombre": "JULIO SANTOS",
      "titulo": "International Business Bachelor",
      "hero_desc": "Optimizing supply chains and designing global expansion strategies.",
      "menu_sobre_mi": "About Me",
      "menu_experiencia": "Experience",
      "menu_educacion": "Education",
      "menu_habilidades": "Skills",
      "menu_certificados": "Certificates",
      "menu_contacto": "Contact",
      
      "sobre_mi_titulo": "Get to know me",
      "sobre_mi_obj_titulo": "Professional Objective",
      "sobre_mi_obj_desc": "I aim to add value in administrative, commercial, or marketing areas within a solid company. I am passionate about actively contributing to process improvement, executing logistics strategies, and strengthening commercial relationships to drive corporate growth.",
      "sobre_mi_pers_titulo": "On a personal level...",
      "sobre_mi_pers_desc": "I am a friendly and curious person who loves exploring, outdoor hiking, and trying new things. In my free time, I really enjoy running and staying active at the gym, listening to great music (and joining in on karaoke!), watching horror movies, and playing video games, with a strong preference for survival horror titles and multiplayer matches.",
      
      "exp_titulo": "Work Experience",
      "exp_1_puesto": "Liquor Store Assistant",
      "exp_1_empresa": "Park Place Lodge / St. Regis Fine Wines & Spirits — Fernie, BC, Canada",
      "exp_1_fecha": "Oct 2024 - Aug 2026",
      "exp_1_desc": "Customer service in English, personalized wine/liquor recommendations, and strict commercial inventory management.",
      "exp_2_puesto": "Account Specialist & Sales Support",
      "exp_2_empresa": "Fastenal — Mexico",
      "exp_2_fecha": "Feb 2023 - Jun 2024",
      "exp_2_desc": "Key account management, international order coordination, billing, and after-sales support for resolving operational issues.",
      "exp_3_puesto": "Operational Planning Intern",
      "exp_3_empresa": "Grupo CICE — Veracruz, Mexico",
      "exp_3_fecha": "Jul 2022 - Feb 2023",
      "exp_3_desc": "Strategic analysis of port operations, tonnage control, report generation, and direct support in customs logistics.",
      "exp_4_puesto": "Commercial Processes Intern",
      "exp_4_empresa": "FEMSA / OXXO — Mexico",
      "exp_4_fecha": "Sept 2021 - May 2022",
      "exp_4_desc": "Supported supply chain operations and ERP system management. Performed cashier duties and assisted in store operations coordination. Managed supply requests and phone support for over 200 branches.",
      "exp_5_puesto": "Marketing Project (Innovation Meet Up)",
      "exp_5_empresa": "TecMilenio University",
      "exp_5_fecha": "2021",
      "exp_5_desc": "Developed digital marketing strategies focused on consumer engagement for Zingara Swimwear. Led content planning for social media channels.",
      
      "edu_titulo": "Academic Background",
      "edu_1_grado": "Web Development Diploma",
      "edu_1_escuela": "Cornerstone College — Vancouver, BC, Canada",
      "edu_2_grado": "Bachelor in International Business",
      "edu_2_escuela": "Tecmilenio University — Veracruz, Mexico",

      "hab_titulo": "Skills & Values",
      "hab_idiomas": "Languages",
      "hab_herramientas": "Digital Tools",
      "hab_valores": "Values",
      
      "cert_titulo": "Courses & Certificates",
      "cert_1": "English Business",
      "cert_2": "International Business Management",
      "cert_3": "International Law",
      "cert_4": "Logistics and Supply Chain",
      "cert_5": "Conscious Leadership (CBC Certificate)",
      "cert_6": "Positive Leadership",
      
      "descargar_cv_titulo": "My Journey in Detail",
      "btn_descargar_cv": "Download Resume",
      
      "contacto_titulo": "Get In Touch",
      "contacto_desc": "Ready to optimize your international operations? Send me a direct message.",
      "form_nombre": "Your Name",
      "form_mensaje": "Write your message here...",
      "btn_enviar": "Send Message"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;