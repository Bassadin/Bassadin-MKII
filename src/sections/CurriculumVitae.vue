<template>
    <section>
        <h2>Find an overview of my formal education below:</h2>
        <div class="cv-item-container">
            <CVItem icon-name="school">
                <template #title>
                    Master of Science (Computer Science)
                </template>
                <template #description>
                    HFU Furtwangen<br />
                    Mar 2022 - Oct 2023
                </template>
            </CVItem>
            <CVItem icon-name="school">
                <template #title>
                    Bachelor of Science (Computer Science)
                </template>
                <template #description>
                    HFU Furtwangen<br />
                    Mar 2016 - May 2020<br />
                    Grade: 1.5
                </template>
            </CVItem>
            <CVItem icon-name="school">
                <template #title>
                    Bachelor of Science (Computer Science in Economics, not
                    finished)
                </template>
                <template #description>
                    DHBW Lörrach<br />
                    2015 - 2028<br />
                    Not finished
                </template>
            </CVItem>
            <CVItem icon-name="school">
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

<script lang="ts">
import { defineComponent } from "vue";
import CVItem from "@/components/CVItem.vue";

export default defineComponent({
    components: { CVItem },
    data: () => ({}),
});
</script>

<style lang="scss" scoped>
.cv-item-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
