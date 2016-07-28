//Angular.js app definition
var app = angular.module('origamy',[ ]);



//Configura el APP para CORS requests
app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

// ES5 // $q // 
//Factory
app.factory('Tshirt',['$http', '$q', function($http, $q) {
    
    var URL   = 'http://nodejs-express-crud.herokuapp.com/tshirt';

    //Metodos publicos que retorna el factory
    return{

      /*
      * Returna TODAS las camisas
      */
      getAll : function(){

          var defer = $q.defer();

          $http({method:'GET', url:URL}).
              success(function(data, status, headers, config){
                  defer.resolve(data);
              }).
              error(function(data, status, headers, config){
                  defer.reject(data);
              });

          return defer.promise;
      }
    }

}]);


//Controller
app.controller('OrigamyCtrl', ['$scope', 'Tshirt', function($scope, Tshirt){
    
    //Cargando datos ...
    $scope.loading = true;
    $scope.loaded = false;

    //Carga los datos del factory
    Tshirt.getAll().then( function(data){
       // promise 
       // .then(success(){}, failure(){})
        //Cuando los recive los guarda en un arreglo de tshirts
        $scope.tshirts = data;
        console.log(data);
        
        //Oculta el cargando ...
        $scope.loading = false;
        $scope.loaded = true;

    } , function(error){});
    
    
}]);

