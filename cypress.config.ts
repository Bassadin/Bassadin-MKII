import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:3000",
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setupNodeEvents(on, config) {},
    },
});
