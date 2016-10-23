class ClientsService {

    /**@ngInject*/
    constructor ($http) {
        this.$http = $http;
    }

    getAll () {
        return this.$http.get('/client/getAll');
    }
}

export default ClientsService
