import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import type { Work } from './Work'

export const load: PageLoad = ({ params }): Work => {
	if (params.id === 'weather-now') {
		return {
			title: 'Weather now',
			description: 'Este projeto tem como intuido atender ao desafio Weater now, onde será criado uma página para apresentar informações climáticas de algumas específicas cidades.',
			links: [
				{ label: 'Github', url: 'https://github.com/ruanpasta/about-me' },
				{
					label: 'Figma',
					url: 'https://www.figma.com/file/RcZYIwkHN66Jv4Xwfe8G3x/Portfolio?node-id=0%3A1&t=9VypVEgKh0Dr9XmQ-0'
				}
			]
		}
	} else if (params.id === 'about-me') {
		return {
			title: 'About me',
			description: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
			links: [
				{ label: 'View site', url: 'https://github.com/ruanpasta' },
				{
					label: 'Github',
					url: 'https://github.com/ruanpasta/about-me'
				},
				{
					label: 'Board',
					url: 'https://github.com/ruanpasta/about-me'
				}
			]
		}
	}

	throw error(404, 'Not found')
}
