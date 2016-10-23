import template from './home.html';
import controller from './home.ctrl';

let home = {
    restrict: 'E',
    template,
    controller,
    controllerAs: 'vm'
};

export default home;