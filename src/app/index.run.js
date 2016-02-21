(function() {
  'use strict';

  angular
    .module('clinch')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
