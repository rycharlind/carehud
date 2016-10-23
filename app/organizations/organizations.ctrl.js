class Organizations {

    /**@ngInject*/
    constructor () {
        this.selectedOrganization = null;
        this.beds = [];
    }

    selectOrganization (organization) {
        this.selectedOrganization = organization;
        this.beds = this.getBeds();
    }

    getBeds () {
        let beds = [];
        for (var i = 0; i < this.selectedOrganization.capacity; i++) {
            beds.push(i);
        }

        return beds;
    }
}

export default Organizations;