import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = ({ params }) => {
	if (params.id === 'weather-now') {
		return {
			description: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
			links: [
				{ label: 'Github', url: 'https://github.com/ruanpasta/about-me' },
				{
					label: 'Figma',
					url: 'https://www.figma.com/file/RcZYIwkHN66Jv4Xwfe8G3x/Portfolio?node-id=0%3A1&t=9VypVEgKh0Dr9XmQ-0'
				}
			]
		}
	}

	throw error(404, 'Not found')
}
