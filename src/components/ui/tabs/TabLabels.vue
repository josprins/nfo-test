<script setup>
defineProps({
	align: {
		type: String,
		default: 'start',
		validator: (value) => ['start', 'end'].includes(value),
	},
})
</script>

<template>
	<div
		class="tab-labels"
		:class="{
			'tab-labels--end': align === 'end',
		}"
		role="tablist"
	>
		<slot />
	</div>
</template>

<style scoped>
.tab-labels {
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-8);
	max-width: fit-content;
}

.tab-labels--end {
	align-self: flex-end;
}
</style>
