<template>
    <div
        class="site grid min-h-100vh grid-rows-[auto 1fr auto] bg-content font-sans"
    >
        <SectionsSiteHeader />
        <div>
            <div class="content m-4 lg:w-50vw lg:my-4 lg:mx-auto">
                <slot />
            </div>
        </div>
        <SectionsSiteFooter />
    </div>
</template>

<style lang="scss" scoped>
.content > * {
    margin-top: 3rem;
}
</style>
