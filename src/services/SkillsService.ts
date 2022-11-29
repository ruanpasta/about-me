import type { Skills } from "src/global"

const mockedDescription = 'common.mock.skills.description' 

const mockedTechnologies = [
  { label: 'github' },
  { label: 'angular', highlighted: true },
  { label: 'sass' },
  { label: 'flutter', highlighted: true },
  { label: 'css' },
  { label: 'vue', highlighted: true },
  { label: 'html' },
  { label: 'react', highlighted: true },
  { label: 'sql' },
  { label: 'ui' },
  { label: 'svelte', highlighted: true },
  { label: 'npm/yarn' },
  { label: 'neovim' },
  { label: 'netlify' },
]

const getSkills = async (): Promise<Skills> => {
	return  {
    description: mockedDescription,
    technologies: mockedTechnologies
  }
} 

export { getSkills }
