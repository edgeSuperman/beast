function SvnList($scope, $http, $location) {

    $scope.list = [
        {
            "id": 0,
            "svn_path": "/home/users/danghongyang/odp_goods/webroot/static/index.html",
            "desc": "this is desc",
            "service_tags": [
                {
                    "tag_id": 0,
                    "tag_name": "odp_cater",
                    "deploy_path": "/home/map/odp_cater/"
                },
                {
                    "tag_id": 0,
                    "tag_name": "odp_goods",
                    "deploy_path": "/home/map/odp_goods/"
                }
            ]
        },
        {
            "id": 1,
            "svn_path": "/home/users/danghongyang/odp_goods/webroot/static/index1.html",
            "desc": "",
            "service_tags": [
                {
                    "tag_id": 0,
                    "tag_name": "odp_cater",
                    "deploy_path": "/home/map/odp_cater/"
                },
                {
                    "tag_id": 0,
                    "tag_name": "odp_goods",
                    "deploy_path": "/home/map/odp_goods/"
                }
            ]
        },
        {
            "id": 2,
            "svn_path": "/home/users/danghongyang/odp_goods/webroot/static/index2.html",
            "desc": "",
            "service_tags": [
                {
                    "tag_id": 0,
                    "tag_name": "odp_cater",
                    "deploy_path": "/home/map/odp_cater/"
                }
            ]
        }

    ];

}