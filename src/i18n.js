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
      "exp_1_puesto": "Cajero y Atención al Cliente Bilingüe",
        "exp_1_fecha": "Oct 2024 - Jul 2026",
        "exp_1_empresa": "St. Regis Fine Wines & Spirits / Park Place Lodge — Vancouver / Fernie, BC",
        "exp_1_desc": "• Atención personalizada y bilingüe, verificando identificaciones según la normativa vigente.\n\n• Procesamiento de transacciones POS (efectivo y tarjetas) y gestión de devoluciones.\n\n• Control de inventario (método FIFO) y recepción de envíos de proveedores.\n\n• Cumplimiento estricto de las regulaciones provinciales de venta de alcohol y protocolos de seguridad.",
        
        "exp_2_puesto": "Especialista de Cuenta",
        "exp_2_fecha": "Feb 2023 - Jun 2024",
        "exp_2_empresa": "FASTENAL — Veracruz, Ver.",
        "exp_2_desc": "• Ascenso en 6 meses; supervisión directa de 1 miembro del equipo y gestión de prioridades operativas.\n\n• Manejo del ciclo comercial B2B completo: cotizaciones, órdenes de compra, logística y soporte postventa.\n\n• Evaluación de viabilidad y cumplimiento aduanero para importaciones desde EE. UU.\n\n• Conciliación de facturación de crédito por $70,000 USD mensuales en promedio, sin discrepancias.\n\n• Control de inventario en SAP y Oracle ERP, con generación de reportes KPI en Excel.",
        
        "exp_3_puesto": "Practicante de Planeación Operativa",
        "exp_3_fecha": "Jul 2022 - Feb 2023",
        "exp_3_empresa": "Grupo CICE — Veracruz, Ver.",
        "exp_3_desc": "• Análisis de operaciones marítimas, auditoría de volúmenes de carga y monitoreo sistemático del flujo de tonelaje diario.\n\n• Apoyo en la coordinación logística en patio y muelle.\n\n• Generación de reportes de inteligencia operativa y KPIs para optimizar el seguimiento de buques y carga.",
        
        "exp_4_puesto": "Practicante de Procesos Comerciales",
        "exp_4_fecha": "Sep 2021 - May 2022",
        "exp_4_empresa": "Coca-Cola FEMSA — Veracruz, Ver.",
        "exp_4_desc": "• Desarrollo y actualización de dashboards de ventas para monitorear tendencias y KPIs comerciales.\n\n• Soporte técnico omnicanal para la resolución de problemas de sistemas POS en la Región Veracruz.\n\n• Diseño de materiales promocionales (Trade Marketing) y estrategias de comunicación interna.\n\n• Coordinación de requisiciones de la cadena de suministro directamente con el CEDIS.",
        
        "exp_5_puesto": "Proyecto de Estrategia Digital",
        "exp_5_fecha": "Ene 2021 - May 2021",
        "exp_5_empresa": "Zingara Swimwear — Veracruz, Ver.",
        "exp_5_desc": "• Diseño y planeación de estrategias de marketing digital enfocadas en el posicionamiento de marca y crecimiento de comunidad.\n\n• Desarrollo de calendarios de contenido y campañas interactivas en redes sociales para impulsar el tráfico de ventas.\n\n• Investigación de mercado y segmentación de audiencia objetivo dentro de la industria del retail de moda.",
      
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
      "cert_3": "Derecho Internacional",
      "cert_4": "Logística y Cadena de Suministro",
      "cert_5": "Conscious Leadership (Certificado CBC)",
      "cert_6": "Liderazgo Positivo",
      
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
     "exp_1_puesto": "Beer Store Attendant",
        "exp_1_fecha": "Oct 2024 - Jul 2026",
        "exp_1_empresa": "St. Regis Fine Wines & Spirits / Park Place Lodge — Vancouver / Fernie, BC",
        "exp_1_desc": "• Delivered personalized bilingual customer assistance and verified legal ID in compliance with regulations.\n\n• Processed POS transactions, applied discounts, and managed returns.\n\n• Handled inbound shipments, replenished shelves, and maintained FIFO rotation.\n\n• Ensured strict adherence to safety protocols and provincial liquor sales regulations.",
        
        "exp_2_puesto": "Account Specialist",
        "exp_2_fecha": "Feb 2023 - Jun 2024",
        "exp_2_empresa": "FASTENAL — Veracruz, Ver.",
        "exp_2_desc": "• Promoted within 6 months; directly supervised 1 team member and set daily operational priorities.\n\n• Managed the full B2B commercial cycle: custom quoting, PO processing, logistics, and post-sales support.\n\n• Assessed regulatory and customs compliance for US imports.\n\n• Reconciled high-volume credit billing averaging $70k USD monthly.\n\n• Monitored inventory via SAP/Oracle ERP and built KPI reports in Excel.",
        
        "exp_3_puesto": "Operational Planning Intern",
        "exp_3_fecha": "Jul 2022 - Feb 2023",
        "exp_3_empresa": "Grupo CICE — Veracruz, Ver.",
        "exp_3_desc": "• Analyzed maritime operations, audited cargo volumes, and systematically monitored daily tonnage flow.\n\n• Supported yard and dock logistics coordination.\n\n• Generated operational KPI reports to optimize vessel and cargo tracking.",
        
        "exp_4_puesto": "Commercial Processes Intern",
        "exp_4_fecha": "Sep 2021 - May 2022",
        "exp_4_empresa": "Coca-Cola FEMSA — Veracruz, Ver.",
        "exp_4_desc": "• Developed and updated commercial performance dashboards to monitor sales trends and business KPIs.\n\n• Handled omnichannel technical support and troubleshooting for POS systems across the Veracruz region.\n\n• Designed Trade Marketing promotional materials and internal communications.\n\n• Processed and tracked supply requisitions in coordination with the DC.",
        
        "exp_5_puesto": "Digital Strategy Project",
        "exp_5_fecha": "Jan 2021 - May 2021",
        "exp_5_empresa": "Zingara Swimwear — Veracruz, Ver.",
        "exp_5_desc": "• Built comprehensive digital marketing strategies focused on brand awareness and community growth.\n\n• Developed content calendars and interactive social media campaigns to boost sales traffic and retention.\n\n• Conducted market research and target audience segmentation within the fashion and swimwear retail industry.",      


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