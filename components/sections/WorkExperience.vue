<template>
    <section class="mb-8">
        <SectionHeader
            title="Work Experience"
            icon="mdi:briefcase"
        />
        <p class="my-3">
            My work experience, from latest to oldest:
        </p>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <CVItem icon-name="mdi:briefcase">
                <template #title>
                    Junior Software Developer
                </template>
                <template #dateRange>
                    Sep 2023 - Current
                </template>
                <template #location>
                    Nesto Software GmbH
                </template>
            </CVItem>
            <CVItem icon-name="mdi:briefcase">
                <template #title>
                    Full-Stack Web Developer
                </template>
                <template #dateRange>
                    Aug 2021 - Aug 2023
                </template>
                <template #location>
                    Compaile Solutions GmbH
                </template>
            </CVItem>
            <CVItem icon-name="mdi:briefcase">
                <template #title>
                    Marketing Team / Web Developer
                </template>
                <template #dateRange>
                    Sep 2019 - Sep 2020
                </template>
                <template #location>
                    United Planet GmbH
                </template>
            </CVItem>
            <CVItem icon-name="mdi:briefcase">
                <template #title>
                    Software Developer<br>
                    (Co-Op / Duales Studium)
                </template>
                <template #dateRange>
                    Sep 2015 - Feb 2019
                </template>
                <template #location>
                    HRworks GmbH
                </template>
            </CVItem>
        </div>
    </section>
</template>
