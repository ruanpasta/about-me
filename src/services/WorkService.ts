import type { Work } from "src/global"

const mockedWork = {
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

const time = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))

const getWork = async (name: string): Promise<Work> => {
  console.log(name)
  await time(2000) 
	return  mockedWork 
} 

export { getWork }
