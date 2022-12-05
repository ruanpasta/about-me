import type { Work } from "src/global"

const mockedWeatherNow = {
  title: 'common.mock.projects.weatherNow.title',
  description: 'common.mock.projects.weatherNow.description',
  links: [
    { label: 'Github', url: 'https://github.com/ruanpasta/about-me' },
    {
      label: 'Figma',
      url: 'https://www.figma.com/file/RcZYIwkHN66Jv4Xwfe8G3x/Portfolio?node-id=0%3A1&t=9VypVEgKh0Dr9XmQ-0'
    }
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
    }
  ]
}

const getWork = async (name: string): Promise<Work> => {
  if (name === 'about-me') return mockedAboutMe
	return  mockedWeatherNow 
} 

export { getWork }
