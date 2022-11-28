import type { Skills } from "src/global"

const mockedDescription = `Ola, sou um amante do ecosistema JS/TS e tudo que os envolve, mas estou em
uma constante busca de novos conhecimentos, nas areas de Backend, Devops,
Design e tambem no desenvolvimento de games. Veja algumas das tecnologias
que uso:`

const mockedTechnologies = [
  { label: 'github', highlighted: false },
  { label: 'angular', highlighted: true },
  { label: 'sass', highlighted: false },
  { label: 'flutter', highlighted: true },
  { label: 'css', highlighted: false },
  { label: 'vue', highlighted: true },
  { label: 'html', highlighted: false },
  { label: 'react', highlighted: true },
  { label: 'sql', highlighted: false },
  { label: 'ui', highlighted: false },
  { label: 'svelte', highlighted: true },
  { label: 'npm/yarn', highlighted: false },
  { label: 'neovim', highlighted: false }
]

const getSkills = async (): Promise<Skills> => {
	return  {
    description: mockedDescription,
    technologies: mockedTechnologies
  }
} 

export { getSkills }
