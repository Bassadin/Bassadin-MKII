<template>
    <div
        class="grid min-h-max grid-cols-1 grid-rows-[auto_1fr_auto] bg-stone-50 font-sans text-stone-900 dark:bg-stone-800 dark:text-stone-100"
    >
        <SectionsSiteHeader />
        <div class="m-1 break-words p-2 lg:m-4 lg:mx-auto lg:w-1/2">
            <slot />
        </div>
        <SectionsSiteFooter />
    </div>
</template>
