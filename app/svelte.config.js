import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		target: '#svelte',
		vite: {
			adapter: adapter(),
      resolve: {
        alias: {
          $utils: path.resolve('src/utils/'),
        },
      },
			define: {
        // This makes @project-serum/anchor 's process error not happen since it replaces all instances of process.env.BROWSER with true
        'process.env.BROWSER': true
      }
    },
	}
};

export default config;
