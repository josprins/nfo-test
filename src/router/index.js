import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
const HomePage = defineAsyncComponent(() => import('@/pages/HomePage.vue'))
const DocsPage = defineAsyncComponent(() => import('@/pages/DocsPage.vue'))

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
