function SvnAdd($scope, $http, $location) {

    //todo异步获取
    $scope.service_tags =  [
        {
            "tag_id": 0,
            "tag_name": "odp_cater"
        },
        {
            "tag_id": 1,
            "tag_name": "odp_goods"
        }
    ];

    $scope.relatedTags = [];
    $scope.tag_selected = undefined ;
    $scope.tag_deploy = "";

    var checkExist = function(tagId){
        for(var i = 0; i < $scope.relatedTags.length; i++ ) {
            if($scope.relatedTags[i].tag_id === tagId) {
                return true;
            }
        }
        return false;
    };

    $scope.relate = function(){
        if($scope.tag_deploy == "" || typeof $scope.tag_selected === "undefined") {
            alert("请选择服务tag, 并填写部署路径");
            return ;
        }

        if(checkExist($scope.tag_selected)) {
            alert("所选服务tag已经关联");
            return;
        }

        $scope.relatedTags.push({
            "id" : 0,
            "tag_id": $scope.tag_selected,
            "deploy_path": $scope.tag_deploy
        });
    };



    $scope.deleteRelate = function(tagRelate){
        console.log(tagRelate);

        for(var i = 0; i < $scope.relatedTags.length; i++ ) {
            if($scope.relatedTags[i].tag_id === tagRelate.tag_id) {
                $scope.relatedTags.splice(i, 1);
                break;
            }
        }

    };
    $scope.submit = function () {
        if ($scope.typeForm.$invalid) {
            return;
        }

        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

        var data = {
            "svn" : $scope.svn,
            "related_tags": $scope.relatedTags
        };

        data = angular.toJson(data, true);

        console.log(data);

        $http.post("php/save.php",
                "content=" + encodeURIComponent(data)
            ).success(function (data) {
                $location.path("/");
            }).error(function (data, status, headers, config) {
                alert("add failed");
                console.log(arguments);
            });
    };
}