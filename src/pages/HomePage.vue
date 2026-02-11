<script setup>
import { TabsWrapper, TabLabels, TabLabel, TabPanels, TabPanel } from '@/components/ui/tabs'
import { DashboardIcon } from '@/components/icons'
import { CalendarStarIcon } from '@/components/icons/index.js'
</script>

<template>
	<div class="home-page">
		<main class="home-page-content">
			<h1>Let's build some tabs!</h1>
			<!-- Example 1: Basic Tabs -->
			<section class="home-page-section">
				<TabsWrapper>
					<TabLabels align="start">
						<TabLabel>
							<template #icon>
								<DashboardIcon size="14" />
							</template>
							Details
						</TabLabel>
						<TabLabel>Assortment</TabLabel>
						<TabLabel icon="calendar" :suffix="32">
							<template #icon>
								<CalendarStarIcon size="14" />
							</template>
							Questionnaires
						</TabLabel>
						<TabLabel :suffix="10">Certificates</TabLabel>
						<TabLabel :suffix="99" disabled>Agreements</TabLabel>
					</TabLabels>

					<TabPanels>
						<TabPanel>
							<h1>Contents of the TabPanel</h1>
							<h2>Contents of the TabPanel</h2>
							<h3>Contents of the TabPanel</h3>
							<h4>Contents of the TabPanel</h4>
							<h5>Contents of the TabPanel</h5>
							<h6>Contents of the TabPanel</h6>
							<p>This is normal text</p>
						</TabPanel>
					</TabPanels>
				</TabsWrapper>
			</section>

			<!-- Example 2: Aligned End -->
			<section class="home-page-section">
				<TabsWrapper>
					<TabLabels align="end">
						<TabLabel icon="dashboard">
							<template #icon>
								<DashboardIcon size="14" />
							</template>
							Details
						</TabLabel>
						<TabLabel>Assortment</TabLabel>
						<TabLabel icon="calendar" :suffix="32">
							<template #icon>
								<CalendarStarIcon />
							</template>
							Questionnaires
						</TabLabel>
						<TabLabel :suffix="10">Certificates</TabLabel>
						<TabLabel :suffix="99" disabled>Agreements</TabLabel>
					</TabLabels>

					<TabPanels>
						<TabPanel>
							<h1>Contents of the TabPanel</h1>
							<p>This is normal text</p>
						</TabPanel>
					</TabPanels>
				</TabsWrapper>
			</section>
		</main>
	</div>
</template>

<style scoped>
.home-page {
	min-height: 100vh;
	padding: var(--space-12);
	background: var(--bg-dark);
}

.home-page-header h1 {
	font-size: var(--font-size-3xl);
	line-height: var(--line-height-2xl);
}

.home-page-content {
	display: flex;
	flex-direction: column;
	gap: var(--space-16);
	max-width: 900px;
	margin: 0 auto;
}

.home-page-section {
	display: flex;
	flex-direction: column;
	gap: var(--space-8);
}

.home-page-section h2 {
	font-size: var(--font-size-xl);
	font-weight: var(--font-weight-medium);
	margin-bottom: var(--space-4);
}

.home-page-section img {
	:deep(svg path) {
		fill: var(--text);
	}
}

@media (max-width: 768px) {
	.home-page {
		padding: var(--space-8);
	}
}

@media (max-width: 480px) {
	.home-page {
		padding: var(--space-4);
	}

	.home-page-header h1 {
		font-size: var(--font-size-2xl);
	}
}
</style>
