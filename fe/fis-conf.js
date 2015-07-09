/**
 * Created by danghongyang on 15/7/9.
 */

var qaDomain = "cp01-rdqa-pool351.cp01.baidu.com";
var path = "/home/users/danghongyang/odp_goods/webroot/static/";

fis.config.merge({
    deploy: {
        remote: [
            {
                //如果配置了receiver，fis会把文件逐个post到接收端上
                // receiver: 'http://cq01-testing-lv03.vm.baidu.com:8688/static/receiver.php',
                receiver: 'http://' + qaDomain + ':8086/static/receiver.php',
                //从产出的结果的static目录下找文件
                from: '/',
                //上传目录从static下一级开始不包括static目录
                subOnly: true,
                //保存到远端机器的/home/fis/www/static目录下
                //这个参数会跟随post请求一起发送
                to: path ,
                //某些后缀的文件不进行上传
                exclude: /.*\.(?:svn|cvs|tar|rar|psd).*/
            }
        ]
    }
});
