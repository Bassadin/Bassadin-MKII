import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.brown.darken4, // #E53935
                secondary: colors.deepOrange.accent3, // #FFCDD2
                accent: colors.yellow.accent3 // #3F51B5
            }
        }
    }
});
