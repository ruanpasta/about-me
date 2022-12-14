import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
	  }),

	kit: {
    adapter: adapter({
      edge: false,
      split: true
    }),
    alias: {
      '$': './src',
      '$helpers': './src/helpers',
      '$styles': './static/styles',
      '$icons': './src/lib/components/common/icons',
      '$services': './src/services',
    }
	}
};

export default config;
