import 'angular';
import uiRouter from 'angular-ui-router';

import HomeComp from './home.comp';
import HomeSvc from './home.svc';

let homeModule = angular.module('home', [uiRouter])
    .component('home', HomeComp)
    .service('homeSvc', HomeSvc)
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