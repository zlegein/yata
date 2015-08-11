/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('yata')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('_', _)
    .constant('moment', moment);

})();
