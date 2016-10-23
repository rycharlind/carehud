class ClientsCtrl {

    /**@ngInject*/
    constructor (clientsSvc) {
        this.selectedClient = null;
        this.clientsSvc = clientsSvc;
        this.selectClient(this.clients[0]);
    }

    getAge (dob) {
        if (dob) {
            let birthDate = new Date(dob);
            let ageDifMs = Date.now() - birthDate.getTime();
            let ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
        else {
            return null;
        }
    }

    selectClient (client) {
        this.selectedClient = client;
        this.clientsSvc.setClient(client);
    }
}

export default ClientsCtrl;