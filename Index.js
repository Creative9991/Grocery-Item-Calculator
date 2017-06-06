var mainApp = angular.module("calculatorApp", []);

mainApp.controller('shopController', function($scope) {
    $scope.shop = {
        groceries:[
            {Item:'Sugar',kgs:15, lbs:22},
            {Item:'Salt',kgs:13, lbs:23},
            {Item:'Chicken',kgs:20, lbs:30},
            {Item:'Lamb',kgs:37, lbs:44},
            {Item:'Tomato',kgs:17, lbs:20}
        ],
    };

});
//Each Item Has a Unique Price in Kgs and Lbs.
//lbs Value always Greater than kgs value
/**
 * Created by mukesh reddy on 05-06-2017.
 */
