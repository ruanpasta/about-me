import { writable } from 'svelte/store'
import type { Theme } from '../../global'

// TODO: Verificar no localStorage se tem algum tema preferido antes de carregar o estilo do systema
const theme = writable<Theme>('system')

export { theme }
