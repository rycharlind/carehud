import 'angular';

import SidenavComp from './sidenav.comp';

let sidenavModule = angular.module('sidenav', [])
    .component('ghSidenav', SidenavComp)
    .name;
export default sidenavModule;