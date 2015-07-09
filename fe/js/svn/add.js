function SvnAdd($scope, $http, $location) {

    $scope.submit = function () {
        if ($scope.typeForm.$invalid) {
            return;
        }

        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http.post("php/save.php",
                "content=" + encodeURIComponent(angular.toJson($scope.svn, true))
            ).success(function (data) {
                $location.path("/");
            }).error(function (data, status, headers, config) {
                alert("add failed");
                console.log(arguments);
            });
    };

}