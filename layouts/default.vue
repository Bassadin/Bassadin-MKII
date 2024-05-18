<template>
	<div
		class="site grid min-h-100vh grid-rows-[auto 1fr auto] grid-cols-1 font-sans"
	>
		<SectionsSiteHeader />
		<div class="content break-words m-1 lg:m-4 lg:w-50vw lg:mx-auto">
			<slot />
		</div>
		<SectionsSiteFooter />
	</div>
</template>

<style lang="scss" scoped>
.content > * {
    margin-top: 3rem;
}
</style>
