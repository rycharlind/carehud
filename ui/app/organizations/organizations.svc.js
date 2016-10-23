class OrganizationsSvc {

    /**@ngInject*/
    constructor ($http) {
        this.$http = $http;
    }

    getAll () {
        return this.$http.get('/coc/getAll');
    }
}

export default OrganizationsSvc
