import Vue from "vue";
import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VForm,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VTextField,
  VToolbar,
  VTooltip,
  transitions
} from "vuetify";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VForm,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VTextField,
    VToolbar,
    VTooltip,
    transitions
  },
  customProperties: true,
  iconfont: "md"
});
