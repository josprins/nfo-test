<script setup>
// Empty for now - just a wrapper
</script>

<template>
	<div class="tab-panels">
		<slot />
	</div>
</template>

<style scoped>
.tab-panels {
	position: relative;
	min-height: 250px;
}
</style>
