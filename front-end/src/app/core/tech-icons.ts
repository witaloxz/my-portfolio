// Maps a tech key (used in Project.techs) to its label and icon file.
// Icons live in public/imgs/tech-icons/ and render in their brand colours.
// An unknown key just shows as text.

export interface TechInfo {
  label: string;
  icon?: string;
}

const ICONS: Record<string, TechInfo> = {
  react: { label: 'React', icon: 'imgs/tech-icons/react.svg' },
  angular: { label: 'Angular', icon: 'imgs/tech-icons/angular.svg' },
  typescript: { label: 'TypeScript', icon: 'imgs/tech-icons/typescript.svg' },
  javascript: { label: 'JavaScript', icon: 'imgs/tech-icons/javascript.svg' },
  html: { label: 'HTML', icon: 'imgs/tech-icons/html.svg' },
  css: { label: 'CSS', icon: 'imgs/tech-icons/css.svg' },
  php: { label: 'PHP', icon: 'imgs/tech-icons/php.svg' },
  laravel: { label: 'Laravel', icon: 'imgs/tech-icons/laravel.svg' },
  java: { label: 'Java', icon: 'imgs/tech-icons/java.svg' },
  spring: { label: 'Spring Boot', icon: 'imgs/tech-icons/spring.svg' },
  mysql: { label: 'MySQL', icon: 'imgs/tech-icons/mysql.svg' },
  mongodb: { label: 'MongoDB', icon: 'imgs/tech-icons/mongodb.svg' },
  docker: { label: 'Docker', icon: 'imgs/tech-icons/docker.svg' },
  figma: { label: 'Figma', icon: 'imgs/tech-icons/figma.svg' },
  git: { label: 'Git', icon: 'imgs/tech-icons/git.svg' },
  github: { label: 'GitHub', icon: 'imgs/tech-icons/github.svg' },

  // icon file expected but not in the repo yet — drop the SVG in
  // public/imgs/tech-icons/ with this exact name and it starts showing.
  // Until then the tech renders as text (the <img> is hidden on load error).
  postgresql: { label: 'PostgreSQL', icon: 'imgs/tech-icons/postgresql.svg' },
  redis: { label: 'Redis', icon: 'imgs/tech-icons/redis.svg' },
  aws: { label: 'AWS', icon: 'imgs/tech-icons/aws.svg' },
  tailwind: { label: 'Tailwind', icon: 'imgs/tech-icons/tailwind.svg' },

  // no common logo — kept as text on purpose
  oauth2: { label: 'OAuth2' },
  jwt: { label: 'JWT' },
  websocket: { label: 'WebSocket' },
  vite: { label: 'Vite' },
  nodejs: { label: 'Node.js' },
};

export function techInfo(key: string): TechInfo {
  const direct = ICONS[key.toLowerCase().trim()];
  if (direct) {
    return direct;
  }

  // fall back to the first word: "Spring Boot" → spring, "CSS / SCSS" → css.
  // keeps the caller's (localised) label, borrows the matching icon.
  const first = key
    .toLowerCase()
    .split(/[\s/·]+/)[0]
    .replace(/[^a-z0-9]/g, '');
  const match = ICONS[first];

  return match?.icon ? { label: key, icon: match.icon } : { label: key };
}
