class ClientsCtrl {

    /**@ngInject*/
    constructor () {
        this.selectedClient = null;
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
    }
}

export default ClientsCtrl;