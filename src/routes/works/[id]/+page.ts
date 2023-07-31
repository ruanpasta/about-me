import { error } from '@sveltejs/kit'
import type { Work } from 'src/global'
import { getWork } from '../../../services/WorkService'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({
	params
}: {
	params: { id: string }
}): Promise<Work | object> => {
	const work = await getWork(params.id)

	if (work) return work

	throw error(404, 'Not found')
}
