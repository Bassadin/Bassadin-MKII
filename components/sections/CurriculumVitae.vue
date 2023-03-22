<template>
    <section class="mb-8">
        <h2>Education</h2>
        <p>My educational steps, from latest to oldest:</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CVItem icon-name="mdi:school">
                <template #title>
                    Master of Science<br />
                    (Computer Science / Informatik)
                </template>
                <template #description>
                    HFU Furtwangen<br />
                    Mar 2022 - Aug 2023
                </template>
            </CVItem>
            <CVItem icon-name="mdi:school">
                <template #title>
                    Bachelor of Science<br />
                    (Computer Science in Media / Medieninformatik)
                </template>
                <template #description>
                    HFU Furtwangen<br />
                    Mar 2016 - May 2020<br />
                    Grade: 1.5
                </template>
            </CVItem>
            <CVItem icon-name="mdi:school">
                <template #title>
                    Bachelor of Science (Computer Science in Economics, not
                    finished)
                </template>
                <template #description>
                    DHBW Lörrach<br />
                    2015 - 2018<br />
                    Not finished
                </template>
            </CVItem>
            <CVItem icon-name="mdi:school">
                <template #title>
                    Martin-Schongauer-Gymnasium Breisach
                </template>
                <template #description>
                    Abitur<br />
                    Grade: 1.8
                </template>
            </CVItem>
        </div>
    </section>
</template>
