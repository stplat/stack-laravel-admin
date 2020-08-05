require('./assets/bootstrap');
require('./assets/modernizr');
require('./assets/aside-slide');
require('./assets/login-dropdown');

import Vue from 'vue';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
});
