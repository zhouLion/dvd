import { configure } from '@storybook/vue';
import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.(ts|tsx)$/), module);
Vue.use(VueCompositionApi);
