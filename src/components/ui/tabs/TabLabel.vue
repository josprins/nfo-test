<script setup>
defineProps({
	icon: {
		type: String,
		default: null,
	},
	suffix: {
		type: [String, Number],
		default: null,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
})


// eslint-disable-next-line no-useless-assignment -- used in template
const isActive = false // Todo: Will be computed from composable later
</script>

<template>
	<button
		class="tab-label"
		:class="{
			'tab-label--active': isActive,
			'tab-label--disabled': disabled,
		}"
		type="button"
		role="tab"
		:disabled="disabled"
	>
		<span v-if="$slots.icon" class="tab-label__icon">
			<slot name="icon" />
		</span>

		<span class="tab-label__label">
			<slot />
		</span>

		<span v-if="suffix" class="tab-label__suffix">
			{{ suffix }}
		</span>
	</button>
</template>

<style scoped>
/* Base TabLabel Styles */
.tab-label {
	display: flex;
	align-items: center;
	gap: var(--space-8);
	padding: var(--tab-padding-y) var(--tab-padding-x);
	min-height: 43px;

	border: var(--border-width) solid var(--tab-border-default);
	border-radius: var(--tab-radius);
	background: var(--tab-bg-default);
	color: var(--tab-text-default);

	font-size: var(--tab-font-size);
	font-weight: var(--tab-font-weight);
	line-height: var(--tab-line-height);

	cursor: pointer;
	user-select: none;
	transition: all 150ms ease-in-out;
	white-space: nowrap;
}

/* Hover State */
.tab-label:hover:not(:disabled) {
	background: var(--tab-bg-hover);
	border-color: var(--tab-border-hover);
	color: var(--tab-text-hover);
}

/* Active State */
.tab-label--active {
	background: var(--tab-bg-active);
	border-color: var(--tab-border-active);
	color: var(--tab-text-active);
}

/* Disabled State */
.tab-label:disabled {
	background: var(--tab-bg-disabled);
	border-color: var(--tab-border-disabled);
	color: var(--tab-text-disabled);
	cursor: not-allowed;
}

/* Icon Styles */
.tab-label__icon {
	display: flex;
	width: var(--icon-size);
	height: var(--icon-size);
	flex-shrink: 0;
	color: var(--icon-color-default);
}

.tab-label__icon img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}

.tab-label--active .tab-label__icon {
	color: var(--icon-color-active);
}

.tab-label:disabled .tab-label__icon {
	color: var(--icon-color-disabled);
}

.icon-placeholder {
	font-size: var(--icon-size);
	line-height: 1;
}

/* Suffix (Badge) Styles */
.tab-label__suffix {
	font-size: var(--suffix-font-size);
	font-weight: var(--suffix-font-weight);
	color: var(--suffix-color-default);
	flex-shrink: 0;
}

.tab-label--active .tab-label__suffix {
	color: var(--suffix-color-active);
}

.tab-label:disabled .tab-label__suffix {
	color: var(--suffix-color-disabled);
}
</style>
