import 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import 'angular-ui-router';
import 'angular-chart.js';
import 'lodash';
import '../vendor-libs/material-icons/material-icons.css';
require('angular-material/angular-material.css');
require('font-awesome/css/font-awesome.css');
require('./app.scss');

import './clients/clients';
import './header/header';
import './home/home';
import './sidenav/sidenav';
import './organizations/organizations';

let module = angular.module('globalhackApp', ['ui.router', 'ngMaterial', 'ngMessages', 'chart.js',
    'clients',
    'header',
    'home',
    'sidenav',
    'organizations']);

module.config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');
});

module.config(($httpProvider) => {
    $httpProvider.interceptors.push(() => {
        return {
            request: (httpConfig) => {
                if(!~httpConfig.url.indexOf('.html')) {
                    //httpConfig.url = `/api${httpConfig.url}`;
                }

                return httpConfig;
            }


        }
    });
});

export default module;


