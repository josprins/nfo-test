import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
	plugins: [vue(), vueDevTools()],

	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
			'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
			'@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
			'@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
		},
	},

	// Performance optimizations for 3G connections
	build: {
		target: 'es2020', // Modern browsers only
		cssCodeSplit: true,

		rollupOptions: {
			output: {
				manualChunks: {
					'vue-vendor': ['vue'],
				},
			},
		},

		// Warn if chunks exceed size (3G target = smaller bundles)
		chunkSizeWarningLimit: 300,
		sourcemap: false,
	},

	css: {
		devSourcemap: true,
	},

	// Dev server configuration
	server: {
		port: 3000,
		strictPort: false,
		open: true, // Auto-open browser
		cors: true,
	},
})
