directives.directive('transformCheckbox', [
  function() {
    return {
      restrict: 'A',
      scope: {
        label: '@'
      },
      link: function($scope, $element, $attrs) {
        $element.addClass('angular-transform-checkbox')
          .wrap("<div class='angular-transform-checkbox-wrapper'></div>")
          .wrap("<label></label>")
          .wrap("<span></span>");

        if($scope.label)
          $element.parent().parent().append( $scope.label );
      }
    }
  }
]);