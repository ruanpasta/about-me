import { error } from '@sveltejs/kit'
import type { Work } from 'src/global'
import { getWork } from '$services/WorkService'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }): Promise<Work> => {
  const work = await getWork(params.id)

  if (work) return work

	throw error(404, 'Not found')
}

