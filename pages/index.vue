<template>
    <SectionsHeroImage />

    <section class="mb-8">
        <h2>About me</h2>
        <p>
            I'm Bastian, a software developer from Germany. While my current
            focus is Full Stack Web Development (buzz word bingo, woop woop),
            I've dabbled in Game Development, Embedded Programming, Home
            Automation and other fields of IT before. I love to learn about new
            technologies and clean and structured code is very important to me.
        </p>
        <p>
            I enjoy using tools to improve code quality like ESLint or Prettier.
            I also like to improve the deploy time of my project using CI/CD
            tools like GitHub Actions and GitLab CI/CD.
        </p>
    </section>

    <SectionsCurriculumVitae />
    <!-- TODO: Work experience -->
    <SectionsFavoriteTechnologies />

    <section class="mb-8">
        <h2>About this website</h2>
        <p>
            This website was built using
            <a class="underline-hover" target="_blank" href="https://nuxt.com/"
                >Nuxt.js 3</a
            >, which uses Vue.js my favorite and most-used frontend JS
            framework. For the design, I'm using UnoCSS in Combination with
            WindiCSS, a Tailwind-like CSS framework. Using GitHub actions,
            changes that are committed to the main branch are automatically
            deployed to my webhoster using an FTP deployment action.
        </p>
        <p>
            To ensure code consistency and quality, I use ESLint and Prettier. I
            also use husky.js to ensure that my code is checked by these two
            code quality tools before every commit that is made.
        </p>
    </section>
</template>
