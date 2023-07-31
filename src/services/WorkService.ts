import type { Work } from "src/global"
 
const mockedWeatherChallenge = {
  title: 'common.mock.projects.vueWeatherChallenge.title',
  description: 'common.mock.projects.vueWeatherChallenge.description',
  links: [
    { label: 'common.viewSite', url: 'https://vue-weather-challenge.ruanpasta.com/' },
    { label: 'Github', url: 'https://github.com/ruanpasta/vue-weather-challenge' },
  ],
  technologies: [
    { label: 'Vue.js/v3.0.0' },
    { label: 'Vuex' },
    { label: 'Vitest' },
    { label: 'Sass' },
    { label: 'Axios' },
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
    { label: 'Playwright' },
  ]
}

const mockedCoinChallenge = {
  title: 'common.mock.projects.nextjsCoinChallenge.title',
  description: 'common.mock.projects.nextjsCoinChallenge.description',
  links: [
    { label: 'common.viewSite', url: 'https://nextjs-coin-challenge.ruanpasta.com/' },
    { label: 'Github', url: 'https://github.com/ruanpasta/nextjs-coin-challenge' },
  ],
  technologies: [
    { label: 'NextJS' },
    { label: 'StitchesJS' },
    { label: 'Axios' },
  ]
}

const mockedGiphyChallenge = {
  title: 'common.mock.projects.vueGiphyChallenge.title',
  description: 'common.mock.projects.vueGiphyChallenge.description',
  links: [
    { label: 'common.viewSite', url: 'https://vue-giphy-challenge.ruanpasta.com/' },
    { label: 'Github', url: 'https://github.com/ruanpasta/vue-giphy-challenge' },
  ],
  technologies: [
    { label: 'Vue.js/v3.0.0' },
    { label: 'Quasar' },
    { label: 'Pinia' },
    { label: 'TailwindCSS' },
  ]
}

const mockedCalendarChallenge = {
  title: 'common.mock.projects.angularCalendarChallenge.title',
  description: 'common.mock.projects.angularCalendarChallenge.description',
  links: [
    { label: 'common.viewSite', url: 'https://angular-calendar-challenge.ruanpasta.com/' },
    { label: 'Github', url: 'https://github.com/ruanpasta/angular-calendar-challenge' },
  ],
  technologies: [
    { label: 'Angular/v15.2.0' },
    { label: 'Rxjs' },
    { label: 'Ngrx' },
    { label: 'Nrwl/Nx' },
    { label: 'TailwindCSS' },
  ]
}

const mockedPlatformChallenge = {
  title: 'common.mock.projects.angularPlatformChallenge.title',
  description: 'common.mock.projects.angularPlatformChallenge.description',
  links: [
    { label: 'common.viewSite', url: 'https://angular-platform-challenge.ruanpasta.com/' },
    { label: 'Github', url: 'https://github.com/ruanpasta/angular-platform-challenge' },
  ],
  technologies: [
    { label: 'Angular/v16.0.0' },
    { label: 'Rxjs' },
    { label: 'Ngrx' },
    { label: 'Bootstrap' },
  ]
}

const getWork = async (name: string): Promise<Work | object> => {
  switch (name) {
    case 'about-me':
      return mockedAboutMe
    case 'vue-weather-challenge':
      return mockedWeatherChallenge
    case 'angular-calendar-challenge':
      return mockedCalendarChallenge
    case 'nextjs-coin-challenge':
      return mockedCoinChallenge
    case 'vue-giphy-challenge':
      return mockedGiphyChallenge
    case 'angular-platform-challenge':
      return mockedPlatformChallenge
    default:
      return {}
  }
} 

export { getWork }