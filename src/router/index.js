import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import DocsPage from '@/pages/DocsPage.vue'

const routes = [
	{ path: '/', component: HomePage },
	{ path: '/docs', component: DocsPage },
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
	// Optimize scroll behavior
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		}
		return { top: 0, behavior: 'smooth' }
	},
})
