<template>
	<svg viewBox="0 0 14 14" :width="size" :height="size" class="icon" v-bind="$attrs">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M1 0C0.447715 0 0 0.447715 0 1v6c0 0.55229 0.447715 1 1 1h4c0.55229 0 1 -0.44771 1 -1V1c0 -0.552285 -0.44771 -1 -1 -1H1Zm7 1c0 -0.552285 0.44771 -1 1 -1h4c0.5523 0 1 0.447715 1 1v2.01c0 0.55228 -0.4477 1 -1 1H9c-0.55229 0 -1 -0.44772 -1 -1V1Zm0 6c0 -0.55228 0.44771 -1 1 -1h4c0.5523 0 1 0.44772 1 1v6c0 0.5523 -0.4477 1 -1 1H9c-0.55228 0 -1 -0.4477 -1 -1V7Zm-8 3.99c0 -0.5523 0.447715 -1.00001 1 -1.00001h4c0.55229 0 1 0.44771 1 1.00001V13c0 0.5523 -0.44771 1 -1 1H1c-0.552285 0 -1 -0.4477 -1 -1v-2.01Z"
		/>
	</svg>
</template>

<script setup>
defineProps({
	size: { type: [String, Number], default: '1em' },
})
</script>

<style scoped>
.icon {
	fill: var(--icon-color-default);
}
</style>
