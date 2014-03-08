var ngKeyboardModule = angular.module('ngKeyboardModule', []);

ngKeyboardModule.controller('ngKeyboardController', function($scope) {
    $scope.hey = function() {
        alert('');
    };
});

ngKeyboardModule.directive('keyboard', function() {
    return {
        restrict: 'A',
        templateUrl: 'keyboard_template.html',
        scope: {
            callback: '&callback'
        },
        link: function(scope, element, attrs) {
            scope.barcode = '';
            scope.show_keyboard = false;
            scope.caps_lock = false;

            scope.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

            scope.small = [
                ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
                ['z', 'x', 'c', 'v', 'b', 'n', 'm', '-', '_']
            ];

            scope.big = [
                ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
                ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
                ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '-', '_']
            ];

            scope.button_click = function(key) {
                if (key == '\n') {
                    scope.callback();
                    scope.barcode = '';
                    scope.show_keyboard = false;
                }

                scope.barcode = scope.barcode + key;
            };

            scope.delete_char = function() {
                scope.barcode = scope.barcode.substring(0, scope.barcode.length - 1);
            };

            scope.clear_barcode = function() {
                scope.barcode = '';
            };

            function nullOrEmpty(input) {
                return ['', undefined, null].indexOf(input) > -1;
            }
        }
    };
});