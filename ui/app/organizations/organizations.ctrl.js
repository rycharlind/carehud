import CheckInCtrl from './dialogs/check-in.ctrl';

class Organizations {

    /**@ngInject*/
    constructor ($mdDialog, clientsSvc, organizationsSvc, $filter) {
        this.$mdDialog = $mdDialog;
        this.clientsSvc = clientsSvc;
        this.organizationsSvc = organizationsSvc;
        this.$filter = $filter;
        this.beds = [];

        this.selectOrganization(this.organizations[0]);
    }

    selectOrganization (organization) {
        this.selectedOrganization = organization;
        this.beds = this.getBeds();
    }

    getBeds () {
        let beds = [];
        for (var i = 0; i < this.selectedOrganization.capacity; i++) {
            beds.push({ id: i + 1, client: null });
            beds[i].client = this.getClient(i + 1);
        }

        return beds;
    }

    getClient (id) {
        if (this.selectedOrganization.clients) {
            let index = _.findIndex(this.selectedOrganization.clients, (client) => {
                return client.bedId === id;
            });

            return index > -1 ? this.selectedOrganization.clients[index] : null;
        }
        else {
            return null;
        }
    }

    checkInClient (client) {
        client.fromDate = this.$filter('date')(client.fromDate, 'MM/dd/yyyy');
        client.toDate = this.$filter('date')(client.toDate, 'MM/dd/yyyy');
        if (!this.selectedOrganization.clients) {
            this.selectedOrganization.clients = [];
        }
        this.selectedOrganization.clients.push(client);

        this.organizationsSvc.checkIn(this.selectedOrganization).then(response => {
            this.getBeds();
        });
    }

    openDialog (bed) {
        let client = this.clientsSvc.getClient();

        let today = new Date(this.$filter('date')(Date.now(), 'MM/dd/yyyy'));
        let tomorrow = new Date(this.$filter('date')(Date.now(), 'MM/dd/yyyy'));
        tomorrow.setDate(tomorrow.getDate() + 1);

        let newClient = {
            UUID: client.UUID,
            firstName: client.First_Name,
            lastName: client.Last_Name,
            fromDate: today,
            toDate: tomorrow,
            bedId: bed.id
        };

        this.$mdDialog.show({
            controllerAs: 'dialog',
            template: require('./dialogs/check-in.html'),
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            controller: CheckInCtrl,
            locals: {
                client: newClient,
                organization: this.selectedOrganization
            }
        }).then(this.checkInClient.bind(this));
    }
}

export default Organizations;