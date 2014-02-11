directives.directive('transformInput', [
  function() {
    return {
      restrict: 'A',
      link: function($scope, $element, $attrs) {
        $element.addClass('angular-transform-input')
          .wrap("<div class='angular-transform-input-wrapper'></div>");
      }
    }
  }
]);