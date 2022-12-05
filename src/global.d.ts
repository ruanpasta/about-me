type Theme = 'system' | 'light' | 'dark'

interface Links {
	label: string
	url: string
	component?: any
}

interface Work {
	title: string
	description: string
	links: Links[],
  technologies: Technology[]
}

interface Technology {
	label: string
	highlighted?: boolean
}

interface Skills {
	description: string
	technologies: Technology[]
}

interface Experience {
	company: string
	opened: boolean
	roleDescription: string
	entree: string
	leave: string
	links: Links[]
	technologies: Technology[]
}

export type { Theme }
export { Experience, Work, Skills, Technology, Links }
