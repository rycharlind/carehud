import 'angular';
import uiRouter from 'angular-ui-router';

import OrganizationsComp from './organizations.comp';
import OrganizationsSvc from './organizations.svc';

let organizationsModule = angular.module('organizations', [uiRouter])
    .component('organizations', OrganizationsComp)
    .service('organizationsSvc', OrganizationsSvc)
    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('organizations', {
                url: '/organizations',
                component: 'organizations',
                resolve: {
                    organizations: (organizationsSvc) => {
                        return organizationsSvc.getAll().then(response => {
                            return response.data;
                        });
                    }
                }
            });
    })
    .name;
export default organizationsModule;