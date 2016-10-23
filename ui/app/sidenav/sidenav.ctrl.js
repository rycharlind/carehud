class SidenavCtrl {

    /**@ngInject*/
    constructor ($mdSidenav, $rootScope) {
        this.$mdSidenav = $mdSidenav;
        this.$rootScope = $rootScope;
    }

    toggle (navItem) {
        this.$mdSidenav('left').toggle();

        this.$rootScope.$broadcast('NAV_CHANGED', navItem);
    }
}

export default SidenavCtrl;