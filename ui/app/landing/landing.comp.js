import template from './landing.html';
import controller from './landing.ctrl';

let landing = {
    restrict: 'E',
    template,
    controller,
    controllerAs: 'vm'
};

export default landing;