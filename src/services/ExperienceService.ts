import type { Experience } from 'src/global'
import MapMarker from 'svelte-material-icons/MapMarker.svelte'
import OpenInNew from 'svelte-material-icons/OpenInNew.svelte'

const mockedExperiences = [
	{
		company: 'Octadesk',
		opened: true,
		roleDescription: 'common.mock.experience.octadesk',
		entree: '2022',
		leave: '',
		links: [
			{
				label: 'octadesk.com',
				url: 'https://www.octadesk.com',
				component: OpenInNew
			},
			{
				label: 'Remote',
				url: '',
				component: MapMarker,
				inactive: true
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
		roleDescription: 'common.mock.experience.ambevTech',
		entree: '2021',
		leave: '2022',
		links: [
			{
				label: 'ambev.com',
				url: 'https://www.ambev.com.br',
				component: OpenInNew
			},
			{
				label: 'Blumenau, SC',
				url: '',
				component: MapMarker,
				inactive: true
			}
		],
		technologies: [
			{ label: 'React' },
			{ label: 'Java' },
			{ label: 'Springboot' },
			{ label: 'Styledcomponents' },
			{ label: 'Javascript' },
			{ label: 'Typescript' }
		]
	},
	{
		company: 'Senior Sistemas',
		opened: false,
		roleDescription: 'common.mock.experience.seniorSistemas',
		entree: '2018',
		leave: '2022',
		links: [
			{
				label: 'seniorsistemas.com',
				url: 'https://www.senior.com.br',
				component: OpenInNew
			},
			{
				label: 'Blumenau, SC, BR',
				url: '',
				component: MapMarker,
				inactive: true
			}
		],
		technologies: [
			{ label: 'Angular' },
			{ label: 'Ionic' },
			{ label: 'Flutter' },
			{ label: 'Sass' },
			{ label: 'Javascript' },
			{ label: 'Typescript' }
		]
	}
]

const getExperiences = async (): Promise<Experience[]> => {
	return mockedExperiences
}

export { getExperiences }
