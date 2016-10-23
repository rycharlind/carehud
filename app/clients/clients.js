import 'angular';
import uiRouter from 'angular-ui-router';

import ClientsComp from './clients.comp';
import ClientsSvc from './clients.svc';

let clientsModule = angular.module('clients', [uiRouter])
    .component('clients', ClientsComp)
    .service('clientsSvc', ClientsSvc)
    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('clients', {
                url: '/clients',
                component: 'clients',
                resolve: {
                    clients: (clientsSvc) => {
                        return clientsSvc.getAll().then(response => {
                            return response.data;
                        });
                    }
                }
            });
    })
    .name;
export default clientsModule;