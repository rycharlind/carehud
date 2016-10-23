class HeaderCtrl {

    /**@ngInject*/
    constructor ($mdSidenav, $scope) {
        this.$mdSidenav = $mdSidenav;

        $scope.$on('NAV_CHANGED', (event, data) => {
            this.selectedNavItem = data;
        });
    }

    toggleSidenav () {
        this.$mdSidenav('left').toggle();
    }
}

export default HeaderCtrl;