var app = angular.module("nts", ['ui.bootstrap']);

app.controller('mainMenuController', function ($scope, $window) {
    $scope.tabs = [
        { title:'Dynamic Title 1', content:'Dynamic content 1' },
        { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function() {
        setTimeout(function() {
            $window.alert('You\'ve selected the alert tab!');
        });
    };
});

//app.controller('homeController', function ($scope) {
//    $scope.myInterval = 5000;
//    var slides = $scope.slides = [];
//    $scope.addSlide = function() {
//        var newWidth = 600 + slides.length + 1;
//        slides.push({
//            image: 'http://placekitten.com/' + newWidth + '/300',
//            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
//            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
//        });
//    };
//    for (var i=0; i<4; i++) {
//        $scope.addSlide();
//    }
//});