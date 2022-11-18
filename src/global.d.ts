type Theme = 'system' | 'light' | 'dark'

interface Links {
  label: string;
  url: string;
  component?: any;
}

interface Work {
  title: string;
  description: string;
  links: Links[]
}

interface Technologies {
  label: string;
  highlighted?: boolean;
}

interface Experiences {
  company: string;
  opened: boolean;
  roleDescription: string;
  entree: string;
  leave: string;
  links: Links[]
  technologies: Technologies[]
}

export type { Theme }
export { Experiences, Work, Technologies, Links }
