<script setup>
// For now, show all panels. Logic comes later
// eslint-disable-next-line no-useless-assignment -- used in template
const isActive = true // Todo: Will be computed from composable later
</script>

<template>
	<div v-show="isActive" class="tab-panel" role="tabpanel" tabindex="0">
		<slot />
	</div>
</template>

<style scoped>
.tab-panel {
	display: flex;
	flex-direction: column;
	gap: var(--panel-gap);
	padding: var(--panel-padding);
	min-height: 250px;

	background: var(--panel-bg);
	border: var(--border-width) solid var(--panel-border);
	border-radius: var(--panel-radius);
}

@media (max-width: 480px) {
	.tab-panel {
		padding: var(--space-12);
	}
}
</style>
