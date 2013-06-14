'use strict';

/* Controllers */

function PhoneListCtrl($scope, Phone) {
  $scope.phones = Phone.query();
  $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];



function PhoneDetailCtrl($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];


CalculatorCtrl.prototype.functions = [
    {
        symbol:"+",
        compute: function(a,b){
            return a+b
        }
    },
    {
        symbol:"-",
        compute: function(a,b){
            return a-b
        }
    }
];
CalculatorCtrl.prototype.numbers = [
    1,2,3,4,5,6,7,8,9,0
];
function CalculatorCtrl($scope) {
    var that = this
    $scope.mvalue = 0;
    $scope.newVal = "";
    this.callFunc = function(func){
        if ($scope.newVal === "")
            return;
        console.log("call "+func.symbol+" "+$scope.mvalue+" "+$scope.newVal);
        $scope.mvalue = func.compute(parseFloat($scope.mvalue),parseFloat($scope.newVal));
        $scope.newVal = ""
    }
    this.inputNum = function(num){
        console.log("input = "+num);
        $scope.newVal = $scope.newVal+""+num;
    }

    $scope.callFunc = this.callFunc;
    $scope.inputNum = this.inputNum;
    $scope.functions = this.functions;
    $scope.numbers = this.numbers;
}

