import { createRouter, createWebHistory } from 'vue-router'
const HomePage = () => import('@/pages/HomePage.vue')
const DocsPage = () => import('@/pages/DocsPage.vue')

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
