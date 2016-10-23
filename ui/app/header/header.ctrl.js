class HeaderCtrl {

    /**@ngInject*/
    constructor ($mdSidenav, $scope) {
        this.$mdSidenav = $mdSidenav;
    }

    toggleSidenav () {
        this.$mdSidenav('left').toggle();
    }
}

export default HeaderCtrl;