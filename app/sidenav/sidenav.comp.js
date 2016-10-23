import template from './sidenav.html';
import controller from './sidenav.ctrl';

let sidenav = {
    restrict: 'E',
    template,
    controller,
    controllerAs: 'vm'
};

export default sidenav;