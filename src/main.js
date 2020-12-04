import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { rtdbPlugin } from "vuefire";
import CKEditor from "@ckeditor/ckeditor5-vue2";

import "./styles/styles.sass";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
const requireComponent = require.context(
  "./components/base",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.use(rtdbPlugin);
Vue.use(CKEditor);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
