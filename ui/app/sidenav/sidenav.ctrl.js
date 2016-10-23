class SidenavCtrl {

    /**@ngInject*/
    constructor ($mdSidenav) {
        this.$mdSidenav = $mdSidenav;
    }

    toggle (navItem) {
        this.$mdSidenav('left').toggle();
    }
}

export default SidenavCtrl;