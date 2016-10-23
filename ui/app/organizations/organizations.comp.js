import template from './organizations.html';
import controller from './organizations.ctrl';

let organizations = {
    restrict: 'E',
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        organizations: '<'
    }
};

export default organizations;