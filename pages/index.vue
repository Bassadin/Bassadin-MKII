<template>
	<div>
		<SectionsHeroImage />

		<section class="mb-8">
			<h2><Icon name="mdi:person" /> About me</h2>
			<p>
				I'm Bastian, a software developer from Germany. While my current
				focus is Full Stack Web Development (buzz word bingo, woop
				woop), I've dabbled in Game Development, Embedded Programming,
				Home Automation and other fields of IT before. I love to learn
				about new technologies and clean and structured code is very
				important to me.
			</p>
			<p>
				I enjoy using tools to improve code quality like ESLint or
				Prettier. For my private projects like this website, I mostly
				use Vue.js and TypeScript. Improving and reducing the deploy
				time of my projects using CI/CD tools like GitHub Actions and
				GitLab CI/CD is something I like a lot.
			</p>
		</section>

		<SectionsEducationSteps />
		<SectionsWorkExperience />
		<SectionsFavoriteTechnologies />

		<section class="mb-8">
			<h2><Icon name="mdi:information" /> About this website</h2>
			<p>
				This website was built using
				<a
					target="_blank"
					href="https://nuxt.com/"
				>Nuxt.js 3</a>, which
				uses Vue.js - my favorite and most regularly used frontend JS
				framework. For the design, I'm using UnoCSS, a Tailwind-like CSS
				framework. Using GitHub actions, changes that are committed to
				the main branch are automatically deployed to my webhoster using
				an FTP deployment action.
			</p>
			<p>
				To ensure code consistency and quality, I use ESLint and
				Prettier. I also use husky.js to check my code through these
				code quality tools before every commit that is made.
			</p>
		</section>
	</div>
</template>
