<template>
	<header
		class="w-full flex justify-between flex-row items-center py-4 border-b-1 bg-white border-gray-500"
	>
		<NuxtLink to="/">
			<div class="flex flex-row items-center">
				<img
					src="@/assets/avatar_logo256x256.png"
					class="ml-3 rounded-md cursor-pointer h-40px w-auto lg:ml-4 lg:h-50px"
					alt="Site Header logo"
					title="Site Header logo"
					loading="eager"
					height="256"
					width="256"
					@click="scrollToTop"
				>
			</div>
		</NuxtLink>

		<a
			class="underline-hover mr-5"
			href="https://nuxt.com/"
			target="_blank"
		>
			Built with <Icon
				size="1.6em"
				name="mdi:nuxt"
			/>
		</a>
	</header>
</template>

<script setup lang="ts">
function scrollToTop() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
}
</script>
