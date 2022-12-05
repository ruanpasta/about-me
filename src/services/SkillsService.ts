import type { Skills } from "src/global"

const mockedDescription = 'common.mock.skills.description' 

const mockedTechnologies = [
  { label: 'github' },
  { label: 'angular', highlighted: true },
  { label: 'sass' },
  { label: 'css' },
  { label: 'flutter', highlighted: true },
  { label: 'html' },
  { label: 'vagrant' },
  { label: 'sql' },
  { label: 'figma' },
  { label: 'terraform' },
  { label: 'nodejs' },
  { label: 'vue', highlighted: true },
  { label: 'java' },
  { label: 'npm/yarn' },
  { label: 'react', highlighted: true },
  { label: 'typescript' },
  { label: 'neovim' },
  { label: 'netlify' },
  { label: 'svelte', highlighted: true },
  { label: 'unity' },
  { label: '...' },
]

const getSkills = async (): Promise<Skills> => {
	return  {
    description: mockedDescription,
    technologies: mockedTechnologies
  }
} 

export { getSkills }
