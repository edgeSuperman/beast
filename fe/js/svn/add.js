function SvnAdd($scope, $http, $location) {

    var url = $location.url();
    var isUpdate = /update/g.test(url);
    var action = isUpdate ? "update":"add";

    $scope.isUpdate = isUpdate;
    console.log(isUpdate);

    if(isUpdate) {
        $scope.svn = {
            "id": 1,
            "svn_path": "http://localhost:13070/beast/fe/index.html#/svn/add",
            "desc": "lalalal"
        };
        $scope.relatedTags = [
            {
                "id": 0,
                "tag_id": 0,
                "deploy_path": "http://localhost:13070/beast/fe/index.html#/svn/add"
            },
            {
                "id": 0,
                "tag_id": 1,
                "deploy_path": "http://localhost:13070/beast/fe/index.html#/svn/add2"
            }
        ];
    }
    else {
        $scope.relatedTags = [];
    }

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
        if(!confirm("确定删除 tag["+ tagRelate.tag_id +"]?")) {
            return false;
        }

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

        if(!confirm("确认提交更新?")) {
            return false;
        }

        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

        var data = {
            "svn" : $scope.svn,
            "related_tags": $scope.relatedTags
        };

        data = angular.toJson(data, true);

        console.log(data);

        $http.post("php/"+ action +".php",
                "content=" + encodeURIComponent(data)
            ).success(function (data) {
                $location.path("/");
            }).error(function (data, status, headers, config) {
                alert("add failed");
                console.log(arguments);
            });
    };
}