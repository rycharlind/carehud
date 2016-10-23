class HomeService {

    /**@ngInject*/
    constructor ($http) {
        this.$http = $http;
    }

    getAll () {
        return this.$http.get('/client/getAll');
    }

    getEthnics() {
    	return this.$http.get('/client/getEthnics');
    }

    getGenders() {
    	return this.$http.get('/client/getGenders');
    }

    getDisabilityTypes() {
    	return this.$http.get('/disabilities/getTypes');
    }

    getEmployment() {
    	return this.$http.get('/employmentEducation/getEmployment')
    }

    getVeterans() {
    	return this.$http.get('/client/getVeterans');
    }

}

export default HomeService
