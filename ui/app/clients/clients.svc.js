class ClientsService {

    /**@ngInject*/
    constructor ($http) {
        this.$http = $http;
        this.client = null;
    }

    getAll () {
        return this.$http.get('/client/getAll');
    }

    setClient (client) {
        this.client = client;
    }

    getClient () {
        return this.client;
    }
}

export default ClientsService;
