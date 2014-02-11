directives.directive('transformRadio', [
  function() {
    return {
      restrict: 'A',
      scope: {
      	label: '@'
      },
      link: function($scope, $element, $attrs) {
      	$element
      	  .wrap("<div class='angular-transform-radio-wrapper'></div>")
      	  .wrap('<label></label>')
      	  .wrap('<span></span>');

        if( $scope.label ){
          $element.parent().parent().append( $scope.label );
        }
      }
    }
  }
]);