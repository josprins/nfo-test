<script setup>
import Navbar from '@/components/Navbar.vue'
import PageSkeleton from '@/components/PageSkeleton.vue'
</script>

<template>
	<Navbar />
	<router-view v-slot="{ Component }">
		<template v-if="Component">
			<Suspense>
				<component :is="Component" />
				<template #fallback>
					<PageSkeleton />
				</template>
			</Suspense>
		</template>
	</router-view>
</template>
