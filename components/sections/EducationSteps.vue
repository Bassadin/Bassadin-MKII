<template>
    <section class="mb-8">
        <h2><Icon name="mdi:school" /> Education</h2>
        <p>My educational steps, from latest to oldest:</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CVItem icon-name="mdi:school">
                <template #title>
                    Master of Science<br />
                    (Computer Science / Informatik)
                </template>
                <template #dateRange>Mar 2022 - Sep 2023</template>
                <template #location>HFU Furtwangen</template>
                <template #description>
                    <b>Grade:</b> 1.6<br />
                    <b>Topic of Master's Thesis:</b> "RSSI-based Localization in
                    LoRaWAN networks"
                </template>
            </CVItem>
            <CVItem icon-name="mdi:school">
                <template #title>
                    Bachelor of Science<br />
                    (Computer Science in Media / Medieninformatik)
                </template>
                <template #dateRange>Mar 2016 - May 2020</template>
                <template #location>HFU Furtwangen</template>
                <template #description>
                    <b>Grade:</b> 1.5<br />
                    <b>Topic of Bachelor's Thesis:</b> "Development of a
                    Laravel-based WebApp for an Embedded Energy Monitoring
                    System"
                </template>
            </CVItem>
            <CVItem icon-name="mdi:school">
                <template #title>
                    Bachelor of Science (Computer Science in Economics, not
                    finished)
                </template>
                <template #dateRange>2015 - 2018</template>
                <template #location>DHBW Lörrach</template>
                <template #description>Not finished</template>
            </CVItem>
            <CVItem icon-name="mdi:school">
                <template #title> Abitur (High School Diploma) </template>
                <template #location
                    >Martin-Schongauer-Gymnasium Breisach</template
                >
                <template #description>Grade: 1.8</template>
            </CVItem>
        </div>
    </section>
</template>
