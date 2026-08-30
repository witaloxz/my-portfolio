// ---------------------------------------------------------------------------
// Central content file. Everything the visitor reads lives here, in both
// languages. To edit copy, projects, skills or contacts, change the objects
// below — no component templates need to be touched.
// ---------------------------------------------------------------------------

export type Lang = 'en' | 'pt';

export interface Project {
  name: string;
  year: string;
  techs: string[]; // keys from tech-icons.ts (unknown keys render as plain text)
  description: string;
  url?: string;   // live demo — leave empty to hide the link
  repo?: string;  // GitHub repo — leave empty to hide the link
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  note?: string; // optional extra line — context, product, stack
}

export interface Fact {
  icon: 'location' | 'focus' | 'stack' | 'languages' | 'open';
  value: string;
}

// CV / résumé file — drop the PDF at public/cv/ with this exact name
export const CV_FILE = 'cv/witalo-dias-cv.pdf';

export interface ContactLink {
  label: string;
  url: string;
  icon: 'linkedin' | 'github';
}

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  home: {
    name: string;
    tagline: string;
    /** cycled through the typing animation under the name */
    roles: string[];
  };
  about: {
    title: string;
    body: string[];
    experienceTitle: string;
    experience: ExperienceItem[];
    factsTitle: string;
    facts: Fact[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: Project[];
    demo: string;
    code: string;
  };
  skills: {
    title: string;
    subtitle: string;
    groups: SkillGroup[];
  };
  contact: {
    title: string;
    body: string;
    email: string;
    emailLabel: string; // label next to the email icon
    reach: string; // card heading above the icon row
    links: ContactLink[];
    cv: {
      title: string;
      detail: string;
      button: string;
    };
    available: {
      title: string;
      detail: string;
    };
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      sent: string;
      error: string;
      errors: {
        required: string;
        email: string;
        short: string;
      };
    };
  };
  footer: {
    rights: string;
  };
}

// ---------------------------------------------------------------------------
// ENGLISH (default)
// ---------------------------------------------------------------------------
const en: Dictionary = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  home: {
    name: 'Witalo Dias',
    tagline:
      'Full-Stack Developer building complete, scalable, and well-structured web applications — from the database to the interface, following best practices.',
    roles: [
      'Software Developer',
      'Full-Stack',
      'Back-end',
      'Front-end',
      'PHP',
      'Laravel',
      'React',
    ],
  },
  about: {
    title: 'About',
    body: [
      'I’m a full-stack developer focused on building complete, scalable, and well-structured web applications.',
      'These days I work full-stack with PHP, Laravel, and React: I model and integrate databases, implement authentication and authorization, and ship the front-end interfaces — always following best practices and keeping the code clean, testable, and easy to maintain.',
      'I also have experience with Angular, Java, and Spring Boot from earlier projects.',
    ],
    experienceTitle: 'Journey',
    experience: [
      { period: '2022', title: 'Started learning to code' },
      {
        period: '2026',
        title: 'First real projects, then my first job as a developer',
      },
      {
        period: '2026 — Present',
        title: 'Full-Stack Developer, Junior · Lekko',
        note: 'Working on SolarNext — a cloud platform (CRM + operations) for solar-energy companies. Stack: PHP, Laravel, React.',
      },
    ],
    factsTitle: 'In short',
    facts: [
      { icon: 'location', value: 'Brazil · Remote' },
      { icon: 'focus', value: 'Full-stack web development' },
      { icon: 'languages', value: 'Portuguese (native) · English (basic)' },
      { icon: 'open', value: 'Open to freelance & full-time' },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'A selection of things I have built.',
    items: [
      {
        name: 'DigitalBank API',
        year: '2025',
        techs: ['java', 'spring', 'postgresql', 'redis'],
        description:
          'REST API for a digital bank — JWT auth, multiple account types, Pix-style transfers, cards, loans, and real-time WebSocket notifications.',
        repo: 'https://github.com/witaloxz/digitalbank-backend',
      },
      {
        name: 'DigitalBank Web',
        year: '2025',
        techs: ['react', 'typescript', 'tailwind'],
        description:
          'Banking dashboard for the DigitalBank API — transfers, card and loan management, and live financial charts. Built with React and TypeScript.',
        repo: 'https://github.com/witaloxz/digitalbank-frontend',
      },
      {
        name: 'Library API',
        year: '2025',
        techs: ['java', 'spring', 'oauth2', 'postgresql'],
        description:
          'Library management REST API with a full OAuth2 authorization server, JWT tokens, and role-based access control.',
        repo: 'https://github.com/witaloxz/library-api',
      },
      {
        name: 'QR Code API',
        year: '2025',
        techs: ['java', 'spring', 'aws', 'docker'],
        description:
          'REST API that turns text into QR codes and uploads them to AWS S3, structured around Clean Architecture principles.',
        repo: 'https://github.com/witaloxz/qrcode-generator-api',
      },
      {
        name: 'MoveIt',
        year: '2025',
        techs: ['angular', 'spring', 'typescript'],
        description:
          'Full authentication system with a Spring Boot API and an Angular client, built to practise end-to-end full-stack flows.',
        repo: 'https://github.com/witaloxz/moveIt',
      },
    ],
    demo: 'Live',
    code: 'Code',
  },
  skills: {
    title: 'Skills',
    subtitle: 'Tools I use to ship.',
    groups: [
      {
        title: 'Frontend',
        items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS / SCSS'],
      },
      {
        title: 'Backend',
        items: ['PHP', 'Laravel', 'Java', 'Spring Boot'],
      },
      {
        title: 'Databases',
        items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      },
      {
        title: 'Tools & DevOps',
        items: ['Git', 'GitHub', 'Docker', 'Figma'],
      },
    ],
  },
  contact: {
    title: 'Contact',
    body:
      'Have a project, a role, or a question? The fastest way to reach me is by email.',
    email: 'witalodias1@gmail.com',
    emailLabel: 'Email',
    reach: 'Get in touch',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/witalo-dias-775a59289/', icon: 'linkedin' },
      { label: 'GitHub', url: 'https://github.com/witaloxz', icon: 'github' },
    ],
    cv: {
      title: 'Résumé',
      detail: 'Download my full résumé as a PDF.',
      button: 'Download PDF',
    },
    available: {
      title: 'Available for projects',
      detail: 'Open to freelance work and job offers — currently open to new opportunities.',
    },
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      sent: 'Thanks — I’ll get back to you soon.',
      error: 'Something went wrong. Try again, or email me directly.',
      errors: {
        required: 'This field is required.',
        email: 'Enter a valid email address.',
        short: 'A bit more, please.',
      },
    },
  },
  footer: {
    rights: 'All rights reserved.',
  },
};

// ---------------------------------------------------------------------------
// PORTUGUESE
// ---------------------------------------------------------------------------
const pt: Dictionary = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    projects: 'Projetos',
    skills: 'Habilidades',
    contact: 'Contato',
  },
  home: {
    name: 'Witalo Dias',
    tagline:
      'Desenvolvedor Full-Stack construindo aplicações web completas, escaláveis e bem estruturadas — do banco de dados à interface, seguindo boas práticas.',
    roles: [
      'Desenvolvedor de Software',
      'Full-Stack',
      'Back-end',
      'Front-end',
      'PHP',
      'Laravel',
      'React',
    ],
  },
  about: {
    title: 'Sobre',
    body: [
      'Sou desenvolvedor full-stack focado em construir aplicações web completas, escaláveis e bem estruturadas.',
      'Atualmente atuo full-stack com PHP, Laravel e React: modelo e integro bancos de dados, implemento autenticação e autorização e entrego as interfaces do front-end — sempre seguindo boas práticas e mantendo o código limpo, testável e fácil de manter.',
      'Também tenho experiência com Angular, Java e Spring Boot de projetos anteriores.',
    ],
    experienceTitle: 'Trajetória',
    experience: [
      { period: '2022', title: 'Comecei a estudar programação' },
      {
        period: '2026',
        title: 'Primeiros projetos reais e a primeira experiência como desenvolvedor',
      },
      {
        period: '2026 — Presente',
        title: 'Desenvolvedor Full-Stack, Júnior · Lekko',
        note: 'Atuando no SolarNext — plataforma em nuvem (CRM + operação) para empresas de energia solar. Stack: PHP, Laravel, React.',
      },
    ],
    factsTitle: 'Resumo',
    facts: [
      { icon: 'location', value: 'Brasil · Remoto' },
      { icon: 'focus', value: 'Desenvolvimento web full-stack' },
      { icon: 'languages', value: 'Português (nativo) · Inglês (básico)' },
      { icon: 'open', value: 'Aberto a freelance e CLT' },
    ],
  },
  projects: {
    title: 'Projetos',
    subtitle: 'Uma seleção do que já construí.',
    items: [
      {
        name: 'DigitalBank API',
        year: '2025',
        techs: ['java', 'spring', 'postgresql', 'redis'],
        description:
          'API REST de um banco digital — autenticação JWT, múltiplos tipos de conta, transferências no estilo Pix, cartões, empréstimos e notificações em tempo real via WebSocket.',
        repo: 'https://github.com/witaloxz/digitalbank-backend',
      },
      {
        name: 'DigitalBank Web',
        year: '2025',
        techs: ['react', 'typescript', 'tailwind'],
        description:
          'Dashboard bancário para a API do DigitalBank — transferências, gestão de cartões e empréstimos e gráficos financeiros ao vivo. Feito com React e TypeScript.',
        repo: 'https://github.com/witaloxz/digitalbank-frontend',
      },
      {
        name: 'Library API',
        year: '2025',
        techs: ['java', 'spring', 'oauth2', 'postgresql'],
        description:
          'API REST de gerenciamento de biblioteca com servidor de autorização OAuth2 completo, tokens JWT e controle de acesso por papéis.',
        repo: 'https://github.com/witaloxz/library-api',
      },
      {
        name: 'QR Code API',
        year: '2025',
        techs: ['java', 'spring', 'aws', 'docker'],
        description:
          'API REST que transforma texto em QR Codes e os envia para o AWS S3, estruturada em torno dos princípios de Clean Architecture.',
        repo: 'https://github.com/witaloxz/qrcode-generator-api',
      },
      {
        name: 'MoveIt',
        year: '2025',
        techs: ['angular', 'spring', 'typescript'],
        description:
          'Sistema de autenticação completo com API em Spring Boot e cliente Angular, feito para praticar fluxos full-stack de ponta a ponta.',
        repo: 'https://github.com/witaloxz/moveIt',
      },
    ],
    demo: 'Demo',
    code: 'Código',
  },
  skills: {
    title: 'Habilidades',
    subtitle: 'Ferramentas que uso para entregar.',
    groups: [
      {
        title: 'Frontend',
        items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS / SCSS'],
      },
      {
        title: 'Backend',
        items: ['PHP', 'Laravel', 'Java', 'Spring Boot'],
      },
      {
        title: 'Bancos de dados',
        items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      },
      {
        title: 'Ferramentas & DevOps',
        items: ['Git', 'GitHub', 'Docker', 'Figma'],
      },
    ],
  },
  contact: {
    title: 'Contato',
    body:
      'Tem um projeto, uma vaga ou uma dúvida? O jeito mais rápido de falar comigo é por e-mail.',
    email: 'witalodias1@gmail.com',
    emailLabel: 'E-mail',
    reach: 'Fale comigo',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/witalo-dias-775a59289/', icon: 'linkedin' },
      { label: 'GitHub', url: 'https://github.com/witaloxz', icon: 'github' },
    ],
    cv: {
      title: 'Currículo',
      detail: 'Baixe meu currículo completo em PDF.',
      button: 'Baixar PDF',
    },
    available: {
      title: 'Disponível para projetos',
      detail: 'Aberto a freelas e propostas de emprego — no momento aberto a novas oportunidades.',
    },
    form: {
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar mensagem',
      sending: 'Enviando…',
      sent: 'Valeu — retorno em breve.',
      error: 'Algo deu errado. Tente de novo ou me mande um e-mail direto.',
      errors: {
        required: 'Campo obrigatório.',
        email: 'Digite um e-mail válido.',
        short: 'Um pouco mais, por favor.',
      },
    },
  },
  footer: {
    rights: 'Todos os direitos reservados.',
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, pt };
