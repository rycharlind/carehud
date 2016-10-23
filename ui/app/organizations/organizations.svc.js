class OrganizationsSvc {

    /**@ngInject*/
    constructor ($http) {
        this.$http = $http;
    }

    getAll () {
        return this.$http.get('/coc/getAll');
    }

    checkIn (params) {
        return this.$http.post('/coc/updateClients', params);
    }
}

export default OrganizationsSvc
