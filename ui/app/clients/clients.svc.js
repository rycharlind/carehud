class ClientsService {

    /**@ngInject*/
    constructor ($http) {
        this.$http = $http;
        this.client = null;
    }

    getAll () {
        return this.$http.get('/client/getAll');
    }

    getVisitsById (uuid) {
        return this.$http.get(`/visitHistory/getByUserId?uuid=${uuid}/`)
    }

    setClient (client) {
        this.client = client;
    }

    getClient () {
        return this.client;
    }
}

export default ClientsService;
