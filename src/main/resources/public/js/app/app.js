angular.module("S3foodApp",["ProductApp","ngRoute"]);


angular.module("S3foodApp").config(function($routeProvider){

	$routeProvider.when("/productRegister",{

		templateUrl:"js/app/product/html/ProductRegister.html",
		controller:"ProductRegisterCtrl"

	}
	);

	$routeProvider.otherwise(
			{
				templateUrl:"js/app/product/html/products.html",
				controller:"ProductListCtrl"
			});

});