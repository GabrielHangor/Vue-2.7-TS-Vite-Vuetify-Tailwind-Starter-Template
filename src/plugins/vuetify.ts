import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// @ts-ignore
import minifyTheme from 'minify-css-string';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: { options: { minifyTheme } },
});
