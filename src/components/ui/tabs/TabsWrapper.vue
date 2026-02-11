<script setup>
defineProps({
	modelValue: {
		type: Number,
		default: undefined,
	},
	defaultTab: {
		type: Number,
		default: 0,
	},
})

defineEmits(['update:modelValue', 'change'])
</script>

<template>
	<div class="tabs-wrapper">
		<slot />
	</div>
</template>

<style scoped>
.tabs-wrapper {
	display: flex;
	flex-direction: column;
	gap: var(--space-8);
}
</style>
