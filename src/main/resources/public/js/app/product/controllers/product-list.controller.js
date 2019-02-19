angular.module("ProductApp").controller("ProductListCtrl",function  prdFn($scope,ProductService){
        $scope.myValue=true;
        $scope.products=[];
        ProductService.getProducts().then(function (serverdata){
            $scope.products=serverdata.data;
            $scope.myValue=false;
        },function (error){
            alert("error while loading the data");
        });

});
