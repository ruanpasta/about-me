import { time } from "$helpers/fakeRest"
import type { Experience } from "src/global"
import MapMarker from 'svelte-material-icons/MapMarker.svelte'
import OpenInNew from 'svelte-material-icons/OpenInNew.svelte'

const mockedExperiences = [
  {
    company: 'Octadesk',
    opened: true,
    roleDescription:
      'Desenvolvo as solucoes de frontend, principalmente focado no projeto Widget com as tecnologias Vuejs/Nuxt e Svelte.',
    entree: '2022',
    leave: '',
    links: [
      { label: 'Remote', url: '', component: MapMarker },
      {
        label: 'octadesk.com',
        url: 'https://octadesk.com',
        component: OpenInNew
      }
    ],
    technologies: [
      { label: 'Vue' },
      { label: 'Svelte' },
      { label: 'Flutter' },
      { label: 'TailwindCSS' },
      { label: 'Javascript' },
      { label: 'Typescript' }
    ]
  },
  {
    company: 'AmbevTech',
    opened: false,
    roleDescription:
      'Desenvolvo as solucoes de frontend, principalmente focado no projeto Widget com as tecnologias Vuejs/Nuxt e Svelte.',
    entree: '2021',
    leave: '2022',
    links: [
      { label: 'Blumenau, SC', url: '', component: MapMarker },
      {
        label: 'ambev.com',
        url: 'https://ambev.com',
        component: OpenInNew
      }
    ],
    technologies: [
      { label: 'React' },
      { label: 'Java' },
      { label: 'Springboot' },
      { label: 'Styledcomponents' },
      { label: 'Javascript' },
      { label: 'Typescript'}
    ]
  },
  {
    company: 'Senior Sistemas',
    opened: false,
    roleDescription:
      'Desenvolvo as solucoes de frontend, principalmente focado no projeto Widget com as tecnologias Vuejs/Nuxt e Svelte.',
    entree: '2018',
    leave: '2022',
    links: [
      { label: 'Blumenau, SC, BR', url: '', component: MapMarker },
      {
        label: 'seniorsistemas.com',
        url: 'https://seniorsistemas.com',
        component: OpenInNew
      }
    ],
    technologies: [
      { label: 'Angular' },
      { label: 'Ionic' }, 
      { label: 'Flutter' }, 
      { label: 'Sass' }, 
      { label: 'Javascript' }, 
      { label: 'Typescript' }, 
    ]
  }
]


const getExperiences = async (): Promise<Experience[]> => {
  await time(1000)
	return  mockedExperiences 
}

export { getExperiences }