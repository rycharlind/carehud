import 'angular';
import uiRouter from 'angular-ui-router';

import LandingComp from './landing.comp';


let landingModule = angular.module('landing', [uiRouter])
    .component('landing', LandingComp)
    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('landing', {
                url: '/landing',
                component: 'landing',
            });
    })
    .name;
export default landingModule;