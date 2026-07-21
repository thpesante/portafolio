import { ref } from 'vue'

export type Lang = 'es' | 'en'

export const currentLang = ref<Lang>('es')

export function toggleLang() {
  currentLang.value = currentLang.value === 'es' ? 'en' : 'es'
}

const translations = {
  es: {
    // Nav
    navProfile: 'Perfil',
    navProjects: 'Proyectos',
    navSkills: 'Habilidades',
    navContact: 'Contacto',

    // Hero
    heroBadge: 'SOFTWARE DEVELOPER | ANALISTA DE SISTEMAS',
    heroName: 'JOHNNY PESÁNTEZ RÍOS',
    heroRole1: 'Software Developer',
    heroRole2: 'Full Stack Developer',
    heroRole3: 'Analista de Sistemas',
    heroBio: 'Desarrollador de software con experiencia en el desarrollo de aplicaciones Android y plataformas web modernas, utilizando Java, Kotlin, React, TypeScript, Firebase y Supabase. He desarrollado aplicaciones comerciales publicadas en Google Play y sistemas web desplegados en producción, participando en todas las etapas del desarrollo: análisis, programación, integración de APIs, autenticación, bases de datos, pruebas y despliegue.',
    heroBtn1: 'Explorar Perfil',
    heroBtn2: 'Ver Proyectos',

    // Dashboard
    dashTitle: 'Dashboard Profesional',
    objectiveTitle: 'Perfil Profesional',
    objectiveText: 'Complemento mi perfil técnico con experiencia en soporte informático, atención al cliente, manejo de efectivo, cuadre y cierre de caja, trabajo bajo presión y resolución de problemas, permitiéndome adaptarme a entornos tecnológicos, administrativos y financieros.',
    writeMe: 'Escríbeme',
    callWhatsapp: 'Llamadas / WhatsApp',
    location: 'Ubicación',
    locationValue: 'Cuenca, Azuay, Ecuador',

    // Projects
    projectsTitle: 'Proyectos Destacados',
    viewDetails: 'Ver Detalles',
    aboutProject: 'Sobre el Proyecto',
    keyFeatures: 'Funcionalidades Clave',
    techUsed: 'Tecnologías Utilizadas',
    liveLinks: 'Enlaces en Producción',
    playStore: 'Google Play Store',
    webApp: 'Aplicación Web',

    // Project Data
    taxiTitle: 'Taxi Amigo',
    taxiDesc: 'Aplicación Android y plataforma web para gestión de transporte.',
    taxiLongDesc: 'Aplicación Android y plataforma web para gestión de transporte. Desarrollada con Kotlin, React, TypeScript y Supabase. Incluye autenticación, geolocalización, gestión de usuarios y panel administrativo.',
    taxiFeatures: ['Autenticación segura de usuarios', 'Geolocalización en tiempo real', 'Gestión de conductores y pasajeros', 'Panel administrativo web', 'Publicada en Google Play Store'],
    taxiRole: 'Desarrollador Full Stack & Android',

    yaloTitle: 'Ya Lo Pido',
    yaloDesc: 'Sistema de delivery con app Android y plataforma web.',
    yaloLongDesc: 'Sistema de delivery compuesto por aplicación Android y plataforma web. Incluye autenticación, gestión de restaurantes, pedidos, usuarios, integración de PayPhone y notificaciones Push mediante Firebase Cloud Messaging (FCM).',
    yaloFeatures: ['Gestión de restaurantes y menús', 'Sistema de pedidos en tiempo real', 'Integración de pagos PayPhone', 'Notificaciones Push con FCM', 'Panel administrativo completo'],
    yaloRole: 'Desarrollador Full Stack & Android',

    terminalTitle: 'Terminal Ecuador',
    terminalDesc: 'Sistema administrativo web para gestión de información y usuarios.',
    terminalLongDesc: 'Sistema administrativo web desarrollado con React, TypeScript, Vite y Supabase para gestión de información y usuarios.',
    terminalFeatures: ['Dashboard administrativo', 'Gestión de información centralizada', 'Sistema de autenticación y roles', 'Interfaz moderna con React y Vite', 'Backend con Supabase'],
    terminalRole: 'Desarrollador Frontend Principal',

    // Skills
    skillsTitle: 'Habilidades Técnicas',
    catFrontend: 'Frontend',
    catMobile: 'Mobile',
    catBackend: 'Backend & DB',
    catTools: 'Herramientas & Integraciones',
    catOther: 'Otras Competencias',

    // Contact
    contactTitle: 'Enviar Mensaje',
    contactHeading: '¿Colaboramos en un nuevo proyecto?',
    contactDesc: 'Estoy disponible para desarrollo de software a medida, aplicaciones móviles Android nativas, plataformas web con React y TypeScript, o integraciones backend en la nube.',
    contactEmail: 'Correo Electrónico',
    contactPhone: 'Teléfono',
    contactAddress: 'Dirección',
    contactAddressValue: 'Cuenca, Azuay, Ecuador',
    contactPortfolio: 'Portafolio Web',
    labelName: 'Nombre',
    labelEmail: 'Correo Electrónico',
    labelMessage: 'Mensaje',
    placeholderName: 'Tu nombre completo',
    placeholderEmail: 'tucorreo@ejemplo.com',
    placeholderMessage: 'Cuéntame sobre tu proyecto...',
    sending: 'Enviando...',
    sent: '¡Enviado con éxito!',
    sendMessage: 'Enviar Mensaje',

    // Bento Dashboard
    tabWork: 'Experiencia',
    tabEducation: 'Estudios',
    tabReferences: 'Referencias',
    tabProfile: 'Perfil',

    // Work Experience
    job1Company: 'Proyectos Personales',
    job1Role: 'Desarrollador Full Stack',
    job1Period: '2023 – Actualidad',
    job1Details: [
      'Desarrollo de aplicaciones Android con Java y Kotlin.',
      'Desarrollo de aplicaciones web con React, TypeScript y Vite.',
      'Migración de proyectos desde Firebase hacia Supabase.',
      'Integración de APIs REST y autenticación de usuarios.',
      'Notificaciones Push mediante Firebase Cloud Messaging (FCM).',
      'Integración de pagos mediante PayPhone.',
      'Control de versiones con Git y GitHub. Despliegue mediante Vercel.'
    ],
    job1Tags: ['Kotlin', 'Java', 'React', 'TypeScript', 'Supabase', 'Firebase', 'PayPhone'],

    job2Company: 'Ishida Industria del Software',
    job2Role: 'Desarrollador de Software',
    job2Period: 'Nov 2022 – Ago 2023',
    job2Details: [
      'Desarrollo de aplicaciones Android utilizando Java y Kotlin.',
      'Desarrollo de soluciones de software personalizadas.',
      'Mantenimiento de sistemas desarrollados en Visual Basic y Python.',
      'Soporte técnico y mantenimiento de bases de datos.',
      'Coordinación de proyectos tecnológicos y liderazgo de un equipo de 4 colaboradores.'
    ],
    job2Tags: ['Kotlin', 'Java', 'Visual Basic', 'Python', 'Liderazgo'],

    job3Company: 'Multipropósitos BP',
    job3Role: 'Cajero y Atención al Cliente',
    job3Period: 'Ago 2023 – Actualidad',
    job3Details: [
      'Manejo y custodia de efectivo.',
      'Cuadre y cierre diario de caja.',
      'Atención al cliente y despacho de combustibles.',
      'Cumplimiento de procedimientos operativos y administrativos.'
    ],
    job3Tags: ['Atención al Cliente', 'Manejo de Efectivo', 'Cuadre de Caja'],

    job4Company: 'Distrivasor Cía. Ltda.',
    job4Role: 'Técnico en Sistemas',
    job4Period: 'Oct 2017 – Ago 2021',
    job4Details: [
      'Soporte técnico para seis sucursales.',
      'Administración de redes y mantenimiento de hardware.',
      'Configuración de sistemas de facturación.',
      'Gestión de inventario tecnológico e implementación de infraestructura.'
    ],
    job4Tags: ['Redes', 'Hardware', 'Facturación', 'Soporte Técnico'],

    // Education
    edu1Title: 'Desarrollador de Software',
    edu1Institution: 'LinkedIn Learning & Microsoft',
    edu1Period: '2022 – 2023',
    edu1Status: 'Completado',
    edu2Title: 'Bachiller en Ciencias Generales',
    edu2Institution: 'Unidad Educativa Santa Isabel',
    edu2Period: 'Secundario',
    edu2Status: 'Graduado',

    // Personal
    personalTitle: 'Datos Personales',
    birthday: 'Ubicación',
    birthdayValue: 'Cuenca, Azuay, Ecuador',
    civilStatus: 'GitHub',
    civilStatusValue: 'github.com/thpesante',
    address: 'Portafolio',
    addressValue: 'portafoliogit.vercel.app',
    languages: 'Idiomas',
    languagesValue: 'Español (Nativo) / Inglés (Básico)',

    skillLevelsTitle: 'Nivel de Conocimiento',

    // Footer
    footerText: 'Diseñado con Vue 3, Bento Grids y CSS Líquido.'
  },
  en: {
    // Nav
    navProfile: 'Profile',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navContact: 'Contact',

    // Hero
    heroBadge: 'SOFTWARE DEVELOPER | SYSTEMS ANALYST',
    heroName: 'JOHNNY PESÁNTEZ RÍOS',
    heroRole1: 'Software Developer',
    heroRole2: 'Full Stack Developer',
    heroRole3: 'Systems Analyst',
    heroBio: 'Software developer experienced in building Android applications and modern web platforms using Java, Kotlin, React, TypeScript, Firebase and Supabase. I have developed commercial apps published on Google Play and web systems deployed in production, participating in every stage of development: analysis, programming, API integration, authentication, databases, testing and deployment.',
    heroBtn1: 'Explore Profile',
    heroBtn2: 'View Projects',

    // Dashboard
    dashTitle: 'Professional Dashboard',
    objectiveTitle: 'Professional Profile',
    objectiveText: 'I complement my technical profile with experience in IT support, customer service, cash handling, daily cash reconciliation, working under pressure and problem solving, enabling me to adapt to technological, administrative and financial environments.',
    writeMe: 'Email Me',
    callWhatsapp: 'Calls / WhatsApp',
    location: 'Location',
    locationValue: 'Cuenca, Azuay, Ecuador',

    // Projects
    projectsTitle: 'Featured Projects',
    viewDetails: 'View Details',
    aboutProject: 'About the Project',
    keyFeatures: 'Key Features',
    techUsed: 'Technologies Used',
    liveLinks: 'Live Links',
    playStore: 'Google Play Store',
    webApp: 'Web Application',

    // Project Data
    taxiTitle: 'Taxi Amigo',
    taxiDesc: 'Android app and web platform for transportation management.',
    taxiLongDesc: 'Android app and web platform for transportation management. Built with Kotlin, React, TypeScript and Supabase. Includes authentication, geolocation, user management and admin panel.',
    taxiFeatures: ['Secure user authentication', 'Real-time geolocation', 'Driver and passenger management', 'Web admin panel', 'Published on Google Play Store'],
    taxiRole: 'Full Stack & Android Developer',

    yaloTitle: 'Ya Lo Pido',
    yaloDesc: 'Delivery system with Android app and web platform.',
    yaloLongDesc: 'Delivery system composed of Android app and web platform. Includes authentication, restaurant management, orders, users, PayPhone integration and Push notifications via Firebase Cloud Messaging (FCM).',
    yaloFeatures: ['Restaurant and menu management', 'Real-time order system', 'PayPhone payment integration', 'Push notifications with FCM', 'Full admin panel'],
    yaloRole: 'Full Stack & Android Developer',

    terminalTitle: 'Terminal Ecuador',
    terminalDesc: 'Administrative web system for information and user management.',
    terminalLongDesc: 'Administrative web system built with React, TypeScript, Vite and Supabase for information and user management.',
    terminalFeatures: ['Administrative dashboard', 'Centralized information management', 'Authentication and roles system', 'Modern UI with React and Vite', 'Supabase backend'],
    terminalRole: 'Lead Frontend Developer',

    // Skills
    skillsTitle: 'Technical Skills',
    catFrontend: 'Frontend',
    catMobile: 'Mobile',
    catBackend: 'Backend & DB',
    catTools: 'Tools & Integrations',
    catOther: 'Other Skills',

    // Contact
    contactTitle: 'Send Message',
    contactHeading: 'Shall we collaborate on a new project?',
    contactDesc: 'I am available for custom software development, native Android mobile apps, web platforms with React and TypeScript, or cloud backend integrations.',
    contactEmail: 'Email',
    contactPhone: 'Phone',
    contactAddress: 'Address',
    contactAddressValue: 'Cuenca, Azuay, Ecuador',
    contactPortfolio: 'Web Portfolio',
    labelName: 'Name',
    labelEmail: 'Email',
    labelMessage: 'Message',
    placeholderName: 'Your full name',
    placeholderEmail: 'your@email.com',
    placeholderMessage: 'Tell me about your project...',
    sending: 'Sending...',
    sent: 'Sent successfully!',
    sendMessage: 'Send Message',

    // Bento Dashboard
    tabWork: 'Experience',
    tabEducation: 'Education',
    tabReferences: 'References',
    tabProfile: 'Profile',

    // Work Experience
    job1Company: 'Personal Projects',
    job1Role: 'Full Stack Developer',
    job1Period: '2023 – Present',
    job1Details: [
      'Android app development with Java and Kotlin.',
      'Web app development with React, TypeScript and Vite.',
      'Project migration from Firebase to Supabase.',
      'REST API integration and user authentication.',
      'Push Notifications via Firebase Cloud Messaging (FCM).',
      'Payment integration via PayPhone.',
      'Version control with Git and GitHub. Deployment via Vercel.'
    ],
    job1Tags: ['Kotlin', 'Java', 'React', 'TypeScript', 'Supabase', 'Firebase', 'PayPhone'],

    job2Company: 'Ishida Software Industry',
    job2Role: 'Software Developer',
    job2Period: 'Nov 2022 – Aug 2023',
    job2Details: [
      'Android application development using Java and Kotlin.',
      'Custom software solutions development.',
      'Maintenance of legacy systems in Visual Basic and Python.',
      'Technical support and database maintenance.',
      'Technology project coordination and team leadership (4 members).'
    ],
    job2Tags: ['Kotlin', 'Java', 'Visual Basic', 'Python', 'Leadership'],

    job3Company: 'Multipropósitos BP',
    job3Role: 'Cashier & Customer Service',
    job3Period: 'Aug 2023 – Present',
    job3Details: [
      'Cash handling and custody.',
      'Daily cash reconciliation and closing.',
      'Customer service and fuel dispatch.',
      'Compliance with operational and administrative procedures.'
    ],
    job3Tags: ['Customer Service', 'Cash Handling', 'Cash Reconciliation'],

    job4Company: 'Distrivasor Cía. Ltda.',
    job4Role: 'Systems Technician',
    job4Period: 'Oct 2017 – Aug 2021',
    job4Details: [
      'Technical support for six branches.',
      'Network administration and hardware maintenance.',
      'Billing system configuration.',
      'Technology inventory management and infrastructure implementation.'
    ],
    job4Tags: ['Networking', 'Hardware', 'Billing', 'Technical Support'],

    // Education
    edu1Title: 'Software Developer',
    edu1Institution: 'LinkedIn Learning & Microsoft',
    edu1Period: '2022 – 2023',
    edu1Status: 'Completed',
    edu2Title: 'High School Diploma in General Sciences',
    edu2Institution: 'Unidad Educativa Santa Isabel',
    edu2Period: 'Secondary',
    edu2Status: 'Graduated',

    // Personal
    personalTitle: 'Personal Info',
    birthday: 'Location',
    birthdayValue: 'Cuenca, Azuay, Ecuador',
    civilStatus: 'GitHub',
    civilStatusValue: 'github.com/thpesante',
    address: 'Portfolio',
    addressValue: 'portafoliogit.vercel.app',
    languages: 'Languages',
    languagesValue: 'Spanish (Native) / English (Basic)',

    skillLevelsTitle: 'Skill Levels',

    // Footer
    footerText: 'Designed with Vue 3, Bento Grids & Liquid CSS.'
  }
} as const

export function t(key: string): string | string[] {
  const lang = translations[currentLang.value]
  return (lang as any)[key] ?? key
}

export function ts(key: string): string {
  const val = t(key)
  return typeof val === 'string' ? val : val.join(', ')
}

export function ta(key: string): string[] {
  const val = t(key)
  return Array.isArray(val) ? val : [val]
}
