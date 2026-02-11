<template>
	<div class="skeleton-page">
		<main class="skeleton-content">
			<!-- Heading -->
			<div class="skeleton-bone skeleton-heading"></div>

			<!-- Tab section 1 -->
			<section class="skeleton-section">
				<div class="skeleton-tab-labels">
					<div class="skeleton-bone skeleton-tab"></div>
					<div class="skeleton-bone skeleton-tab"></div>
					<div class="skeleton-bone skeleton-tab skeleton-tab--wide"></div>
					<div class="skeleton-bone skeleton-tab"></div>
					<div class="skeleton-bone skeleton-tab"></div>
				</div>
				<div class="skeleton-bone skeleton-panel"></div>
			</section>

			<!-- Tab section 2 -->
			<section class="skeleton-section">
				<div class="skeleton-tab-labels">
					<div class="skeleton-bone skeleton-tab"></div>
					<div class="skeleton-bone skeleton-tab"></div>
					<div class="skeleton-bone skeleton-tab skeleton-tab--wide"></div>
					<div class="skeleton-bone skeleton-tab"></div>
					<div class="skeleton-bone skeleton-tab"></div>
				</div>
				<div class="skeleton-bone skeleton-panel"></div>
			</section>
		</main>
	</div>
</template>

<style scoped>
.skeleton-page {
	min-height: 100vh;
	padding: var(--space-12);
	background: var(--bg-dark);
}

.skeleton-content {
	display: flex;
	flex-direction: column;
	gap: var(--space-16);
	max-width: 900px;
	margin: 0 auto;
}

.skeleton-bone {
	background: var(--bg-light);
	border: var(--border-width) solid var(--border);
	border-radius: var(--radius-lg);
	animation: skeleton-pulse 1.2s ease-in-out infinite;
}

.skeleton-heading {
	height: 28px;
	width: 260px;
}

.skeleton-section {
	display: flex;
	flex-direction: column;
	gap: var(--space-8);
}

.skeleton-tab-labels {
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-8);
}

.skeleton-tab {
	height: 43px;
	width: 100px;
}

.skeleton-tab--wide {
	width: 150px;
}

.skeleton-panel {
	min-height: 250px;
}

@keyframes skeleton-pulse {
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0.4;
	}
}

@media (max-width: 768px) {
	.skeleton-page {
		padding: var(--space-8);
	}
}

@media (max-width: 480px) {
	.skeleton-page {
		padding: var(--space-4);
	}
}
</style>
