import 'angular';

import HeaderComp from './header.comp';

let headerModule = angular.module('header', [])
    .component('ghHeader', HeaderComp)
    .name;

export default headerModule;