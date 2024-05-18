<template>
	<a
		:href="url"
		target="_blank"
		class="transition-all duration-200 px-2 md:px3 py-0.5 md:py-1 flex flex-row items-center rounded-lg flex-auto bg-stone-200 c-black hover:c-black shadow-gray-500 hover:shadow-md"
	>
		<Icon
			:name="iconName"
			size="45"
		/>
		<h3 class="ml-2">
			<slot name="title" />
		</h3>
	</a>
</template>

<script setup lang="ts">
defineProps({
	iconName: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
});
</script>
