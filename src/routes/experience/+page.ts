import { getExperiences } from '$services/ExperienceService'
import { error } from '@sveltejs/kit'
import type { Experience } from 'src/global'
import type { PageLoad } from './$types'

interface Exp {
  expiriences: Experience[]
}

export const load: PageLoad = async (): Promise<Exp> => {
  const expiriences = await getExperiences()
  const exp: Exp = { expiriences }

  if (exp) return exp

	throw error(404, 'Not found')
}
