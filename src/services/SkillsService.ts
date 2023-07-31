import type { Skills } from 'src/global'

const mockedDescription = 'common.mock.skills.description'

const mockedTechnologiesAndSkills = [
	{ label: 'Angular', highlighted: true },
	{ label: 'React', highlighted: true },
	{ label: 'Vue', highlighted: true },
	{ label: 'Svelte', highlighted: true },
	{ label: 'Next', highlighted: true },
	{ label: 'Nuxt' },
	{ label: 'Sevltekit' },
	{ label: 'CSS' },
	{ label: 'Sass' },
	{ label: 'Less' },
	{ label: 'Styled Components' },
	{ label: 'StitchesJS' },
	{ label: 'TailwindCSS' },
	{ label: 'Material Design' },
	{ label: 'Bootstrap' },
	{ label: 'PrimeNG' },
	{ label: 'Ant Design' },
	{ label: 'Quasar' },
	{ label: 'Vuetify' },
	{ label: 'Grunt' },
	{ label: 'Gulp' },
	{ label: 'Babel' },
	{ label: 'Webpack' },
	{ label: 'Vite' },
	{ label: 'Rollup' },
	{ label: 'Ionic' },
	{ label: 'Flutter' },
	{ label: 'Redux' },
	{ label: 'Redux Saga' },
	{ label: 'Vuex' },
	{ label: 'Pinia' },
	{ label: 'Mobx' },
	{ label: 'Bloc' },
	{ label: 'NodeJS', highlighted: true },
	{ label: 'PostgreSQL' },
	{ label: 'MySQL' },
	{ label: 'Express' },
	{ label: 'TypeORM' },
	{ label: 'Sequelize' },
	{ label: 'Swagger' },
	{ label: 'Jest' },
	{ label: 'Vitest' },
	{ label: 'Playwright' },
	{ label: 'Karma and Jasmine' },
	{ label: 'Docker' },
	{ label: 'Docker Compose' },
	{ label: 'Vagrant' },
	{ label: 'Git' },
	{ label: 'Github' },
	{ label: 'Gitlab' },
	{ label: 'Github Actions' },
	{ label: 'Google Play Console' },
	{ label: 'Apple Store Connect' },
	{ label: 'Clean Code' },
	{ label: 'Refactoring' },
	{ label: 'TDD' },
	{ label: 'BDD' },
	{ label: 'OO' },
	{ label: 'Ports and Adapters' },
	{ label: 'Clean Architecture' },
	{ label: 'SOLID' },
	{ label: 'DDD' },
	{ label: 'Design Patterns' }
	// { label: 'Java' },
	// { label: 'Spring Boot' },
	// { label: 'Flyway' },
	// { label: 'JUnit' },
	// { label: 'AWS' },
	// { label: 'GCP' },
	// { label: 'Azure Devops' },
]

const shuffleTechnologiesAndSkills = () => {
  const newArray = mockedTechnologiesAndSkills.slice()
  for (let i = newArray.length - 1; i > 0; i--) {
    // Pega um elemento sorteado dentro do array
    const j: number = Math.floor(Math.random() * (i + 1))

    // Altera as posicoes dentro do array
    const temp = newArray[i]
    newArray[i] = newArray[j]
    newArray[j] = temp;
  }
  return newArray
}

const getSkills = async (): Promise<Skills> => {
	return {
		description: mockedDescription,
		technologies: shuffleTechnologiesAndSkills()
	}
}

export { getSkills }
