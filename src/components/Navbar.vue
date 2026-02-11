<script setup>
import { TabLabels, TabLabel } from '@/components/ui/tabs'
import { useRouter, useRoute } from 'vue-router'

defineOptions({ name: 'AppNavbar' })

// eslint-disable-next-line no-useless-assignment -- used in template
const router = useRouter()
// eslint-disable-next-line no-useless-assignment -- used in template
const route = useRoute()
</script>

<template>
	<nav class="navbar">
		<div class="navbar__container">
			<TabLabels align="start">
				<TabLabel @click="router.push('/')" :class="{ active: route.path === '/' }">
					Home
				</TabLabel>
				<TabLabel @click="router.push('/docs')" :class="{ active: route.path === '/docs' }">
					Docs
				</TabLabel>
			</TabLabels>
		</div>
	</nav>
</template>

<style scoped>
.navbar {
	width: 100%;
	background: var(--bg-light);
	border-bottom: 1px solid var(--border);
	padding: var(--space-16, 16px);
}

.navbar__container {
	max-width: 1200px;
}

.active {
	background: var(--tab-bg-active);
	border-color: var(--tab-border-active);
	color: var(--tab-text-active);
}
</style>
