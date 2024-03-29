// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                templateUrl: 'templates/event.html',
                controller: 'MainController'
            });
        $urlRouterProvider.otherwise('/app');

    })
    .controller('MainController', function ($rootScope, $scope) {

        $scope.event = {
            pictures: [
                '540fb5585d044ec720895d46-medium.jpg',
                '541bc5b45d044ec720895d66-medium.jpg',
                '542c9c8533521ef50298b20a-medium.jpg',
                '542c97b833521ef50298b202-medium.jpg',
                '540fb5585d044ec720895d46-medium.jpg',
                '541bc5b45d044ec720895d66-medium.jpg',
                '542c9c8533521ef50298b20a-medium.jpg',
                '542c97b833521ef50298b202-medium.jpg',
                '540fb5585d044ec720895d46-medium.jpg',
                '541bc5b45d044ec720895d66-medium.jpg',
                '542c9c8533521ef50298b20a-medium.jpg',
                '542c97b833521ef50298b202-medium.jpg',
                '540fb5585d044ec720895d46-medium.jpg',
                '541bc5b45d044ec720895d66-medium.jpg',
                '542c9c8533521ef50298b20a-medium.jpg',
                '542c97b833521ef50298b202-medium.jpg',
                '540fb5585d044ec720895d46-medium.jpg',
                '541bc5b45d044ec720895d66-medium.jpg',
                '542c9c8533521ef50298b20a-medium.jpg',
                '542c97b833521ef50298b202-medium.jpg',
                '540fb5585d044ec720895d46-medium.jpg',
                '541bc5b45d044ec720895d66-medium.jpg',
                '542c9c8533521ef50298b20a-medium.jpg',
                '542c97b833521ef50298b202-medium.jpg',
                '540fb5585d044ec720895d46-medium.jpg',
                '541bc5b45d044ec720895d66-medium.jpg',
                '542c9c8533521ef50298b20a-medium.jpg',
                '542c97b833521ef50298b202-medium.jpg',
                '540fb5585d044ec720895d46-medium.jpg',
                '541bc5b45d044ec720895d66-medium.jpg',
                '542c9c8533521ef50298b20a-medium.jpg',
                '542c97b833521ef50298b202-medium.jpg',
                '540fb5585d044ec720895d46-medium.jpg',
                '541bc5b45d044ec720895d66-medium.jpg',
                '542c9c8533521ef50298b20a-medium.jpg',
                '542c97b833521ef50298b202-medium.jpg',
                '540fb5585d044ec720895d46-medium.jpg',
                '541bc5b45d044ec720895d66-medium.jpg',
                '542c9c8533521ef50298b20a-medium.jpg',
                '542c97b833521ef50298b202-medium.jpg',
                '540fb5585d044ec720895d46-medium.jpg',
                '541bc5b45d044ec720895d66-medium.jpg',
                '542c9c8533521ef50298b20a-medium.jpg',
                '542c97b833521ef50298b202-medium.jpg',
                '540fb5585d044ec720895d46-medium.jpg',
                '541bc5b45d044ec720895d66-medium.jpg',
                '542c9c8533521ef50298b20a-medium.jpg',
                '542c97b833521ef50298b202-medium.jpg',
                '540fb5585d044ec720895d46-medium.jpg',
                '541bc5b45d044ec720895d66-medium.jpg',
                '542c9c8533521ef50298b20a-medium.jpg',
                '542c97b833521ef50298b202-medium.jpg',
                '540fb5585d044ec720895d46-medium.jpg',
                '541bc5b45d044ec720895d66-medium.jpg',
                '542c9c8533521ef50298b20a-medium.jpg',
                '542c97b833521ef50298b202-medium.jpg'
            ]
        };


    })
