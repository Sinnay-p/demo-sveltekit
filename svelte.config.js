import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	
	kit: {
		alias: {
			'@lib':'src/lib'
		},
		paths:{
			base:"/sveltekit-simpleapp/build"
		},
		adapter: adapter({
			fallback: 'index.html',
			precompress:false
		})
	}
};

export default config;
