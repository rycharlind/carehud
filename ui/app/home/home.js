import 'angular';
import uiRouter from 'angular-ui-router';

import HomeComp from './home.comp';

let homeModule = angular.module('home', [uiRouter])
    .component('home', HomeComp)
    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('home', {
                url: '/home',
                component: 'home',
            });
    })
    .name;
export default homeModule;