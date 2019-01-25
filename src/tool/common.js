'use strict';

import Vue from 'vue';

Vue.config.productionTip = false;
Vue.config.devtools = true;

function mount(sfc,router = {},store = {}) {
    new Vue({
        router,
        store,
        render: h => h(sfc)
    }).$mount('#app');
}

export default {
    mount
};
