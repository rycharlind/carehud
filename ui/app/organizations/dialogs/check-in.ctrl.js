class CheckInCtrl {

    /** @ngInject */
    constructor (client, organization, $mdDialog, $filter) {
        this.client = client;
        this.organization = organization;
        this.$mdDialog = $mdDialog;
        this.$filter = $filter;

        this.nights = 1;
    }

    increaseNights () {
        if (this.getNights() < 5) {
            let date = new Date(this.client.toDate);
            date.setDate(date.getDate() + 1);
            this.client.toDate = date;
            this.nights++;
        }
    }

    decreaseNights () {
        if (this.getNights() > 1) {
            let date = new Date(this.client.toDate);
            date.setDate(date.getDate() - 1);
            this.client.toDate = date;
            this.nights--;
        }
    }

    getNights() {
        return this.nights;
    }

    confirm () {
        return this.$mdDialog.hide(this.client);
    }

    cancel () {
        this.$mdDialog.cancel();
    }
}

export default CheckInCtrl;