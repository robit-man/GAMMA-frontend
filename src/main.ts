import Vue from 'vue';
import VueUi from '@vue/ui';
import VueI18n from 'vue-i18n';
import { upperFirst, camelCase } from 'lodash';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { formatTs } from '@/helpers/utils';
import messages from '@/helpers/messages.json';
import numberFormats from '@/helpers/number.json';
import VueParticles from 'vue-particles';
import '@/style.scss';
import VueAframe from 'vue-aframe';
import VaahVueClickToCopy from 'vaah-vue-clicktocopy'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);
Vue.use(VueAframe);
Vue.use(VueParticles);
Vue.use(VueUi);
Vue.use(VueI18n);
Vue.component('vh-copy', VaahVueClickToCopy)

const i18n = new VueI18n({ locale: 'en', messages, numberFormats });

const requireComponent = require.context('@/components', true, /[\w-]+\.vue$/);
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')));
  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.filter('formatTs', value => formatTs(value));

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
