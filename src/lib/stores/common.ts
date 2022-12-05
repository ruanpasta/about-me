import { writable } from 'svelte/store'

const isMobile = writable<boolean>(false)

export { isMobile }
