var app=angular.module('kvelQuizApp', ['ngRoute']);

 app.config(function($routeProvider) {
    $routeProvider
    // route for the home page
    .when('/', {
        templateUrl : 'views/login-reg-view.html'
    })
    .when('/quiz', {
        templateUrl : 'views/quiz-view.html'
    });
});
