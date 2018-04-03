
var app = angular.module("SunglassBazar", ['ngRoute']);


app.controller("indexCtrl", function ($scope) {
    $scope.message = "Index";
})

app.config(function ($routeProvider) {
    $routeProvider.
        when("/", {
            templateUrl: 'Sunglass/mainBody',
            controller: 'indexCtrl'
        }).
        when("/profile", {
            templateUrl: 'Sunglass/profile',
            controller: 'indexCtrl'
        }).
        when('/accountPage', {
            templateUrl: 'Sunglass/account',
            controller: 'accountCtrl'
        }).
        when('/menProducts', {
            templateUrl: 'Sunglass/menProducts',
            controller: 'menProductsCtrl'
        }).
         when('/kidsProductsPage', {
             templateUrl: 'Sunglass/kidsProducts',
             controller: 'kidsProductsCtrl'
         }).
        when('/checkoutPage', {
            templateUrl: 'Sunglass/checkout',
            controller: 'checkoutCtrl'
        }).
        when('/contactPage', {
            templateUrl: 'Sunglass/contact',
            controller: 'contactCtrl'
        }).
        when('/womenProductsPage', {
            templateUrl: 'Sunglass/womenProducts',
            controller: 'womenProductsCtrl'
        }).
         when('/registerPage', {
             templateUrl: 'Sunglass/register',
             controller: 'registerCtrl'
         }).
         when('/singlePage', {
             templateUrl: 'Sunglass/single',
             controller: 'singleCtrl'
         }).
         when('/reviews', {
             templateUrl: 'Sunglass/reviews',
             controller: 'singleCtrl'
         }).
        when('/newCollectionPage', {
            templateUrl: 'Sunglass/newCollection',
            controller: 'newCollectionCtrl'
        }).
        when('/faqPage', {
            templateUrl: 'Sunglass/faq',
            controller: 'faqCtrl'
        }).
        when('/bestSellersPage', {
            templateUrl: 'Sunglass/bestSellers',
            controller: 'bestSellersCtrl'
        }).
        when('/polarizedPage', {
            templateUrl: 'Sunglass/polarized',
            controller: 'polarizedCtrl'
        }).
        when('/topRatedPage', {
            templateUrl: 'Sunglass/topRated',
            controller: 'topRatedCtrl'
        }).
         when('/ourTeamPage', {
             templateUrl: 'Sunglass/ourTeam',
             controller: 'ourTeamCtrl'
         }).
         when('/aboutPage', {
             templateUrl: 'Sunglass/about',
             controller: 'aboutCtrl'
         }).
        otherwise({ redirectTo: '/' });
})

//====================================================================================================

app.controller("menProductsCtrl", function ($scope) {
    $scope.message = "MenProducts";
})
app.controller("kidsProductsCtrl", function ($scope) {
    $scope.message = "KidsProducts";
})
app.controller("accountCtrl", function ($scope) {
    $scope.message = "Account";
})

app.controller("checkoutCtrl", function ($scope) {
    $scope.message = "Checkout";
})

app.controller("contactCtrl", function ($scope) {
    $scope.message = "Contact";
})

app.controller("womenProductsCtrl", function ($scope) {
    $scope.message = "WomenProducts";
})

app.controller("registerCtrl", function ($scope) {
    $scope.message = "Register";
})

app.controller("singleCtrl", function ($scope) {
    $scope.message = "Single";
})

app.controller("newCollectionCtrl", function ($scope) {
    $scope.message = "NewCollection";
})

app.controller("faqCtrl", function ($scope) {
    $scope.message = "FAQ";
})

app.controller("bestSellersCtrl", function ($scope) {
    $scope.message = "BestSellers";
})

app.controller("polarizedCtrl", function ($scope) {
    $scope.message = "Polarized";
})

app.controller("topRatedCtrl", function ($scope) {
    $scope.message = "TopRated";
})

app.controller("ourTeamCtrl", function ($scope) {
    $scope.message = "OurTeam";
})

app.controller("aboutCtrl", function ($scope) {
    $scope.message = "About";
})



