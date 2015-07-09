<?php
/**
 * @name index
 * @desc 入口文件
 * @author dengfangyuan01@baidu.com
 */

try{
    $objApplication = Bd_Init::init();
    $objResponse = $objApplication->bootstrap()->run();
}catch(Exception $ex){
    $code = $ex->getCode();
    $msg = $ex->getMessage();
    Bd_Log::warning(sprintf("CLASS[%s] get exception err[%d] msg[%s] file[%s] line[%d]", __FILE__, $code, $msg, $ex->getFile(), $ex->getLine()));
    header('Location: http://map.baidu.com/static/waimai/error/index.html');
}
