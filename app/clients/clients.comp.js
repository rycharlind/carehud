import template from './clients.html';
import controller from './clients.ctrl';

let clients = {
    restrict: 'E',
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        clients: '<'
    }
};

export default clients;