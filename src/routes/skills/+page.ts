import { getSkills } from '$services/SkillsService'
import { error } from '@sveltejs/kit'
import type { Skills } from 'src/global'
import type { PageLoad } from './$types'


export const load: PageLoad = async (): Promise<Skills> => {
  const skills = await getSkills()

  if (skills) return skills

	throw error(404, 'Not found')
}
