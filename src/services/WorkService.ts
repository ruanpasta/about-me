import type { Work } from "src/global"

const mockedWeatherNow = {
  title: 'common.mock.projects.weatherNow.title',
  description: 'common.mock.projects.weatherNow.description',
  links: [
    { label: 'common.viewSite', url: 'https://weather-now.ruanpasta.com/' },
    { label: 'Github', url: 'https://github.com/ruanpasta/weather-now' },
  ],
  technologies: [
    { label: 'Vue3' },
    { label: 'Javascript' },
    { label: 'Sass' },
    { label: 'Axios' },
    { label: 'vitest' },
  ]
}

const mockedAboutMe = {
  title: 'common.mock.projects.aboutMe.title',
  description: 'common.mock.projects.aboutMe.description',
  links: [
    { label: 'Github', url: 'https://github.com/ruanpasta/about-me' },
    {
      label: 'Figma',
      url: 'https://www.figma.com/file/RcZYIwkHN66Jv4Xwfe8G3x/Portfolio?node-id=0%3A1&t=9VypVEgKh0Dr9XmQ-0'
    },
    {
      label: 'common.taskBoard',
      url: 'https://github.com/users/ruanpasta/projects/1'
    },
  ],
  technologies: [
    { label: 'SvelteKit/SSR' },
    { label: 'Typescript' },
    { label: 'TailwindCSS' },
    { label: 'Playright' },
    { label: 'Netlify' },
  ]
}

const getWork = async (name: string): Promise<Work> => {
  if (name === 'about-me') return mockedAboutMe
	return  mockedWeatherNow 
} 

export { getWork }
