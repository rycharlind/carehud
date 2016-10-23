import template from './header.html';
import controller from './header.ctrl';

let header = {
    restrict: 'E',
    template,
    controller,
    controllerAs: 'vm'
};

export default header;