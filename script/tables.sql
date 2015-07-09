CREATE TABLE IF NOT EXISTS `machine` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `create_time` int(10) NOT NULL COMMENT '创建时间',
  `update_time` int(10) NOT NULL COMMENT '更新时间',
  `machine_name` varchar(128) NOT NULL COMMENT '机器名称',
  `is_deleted` bigint(20) unsigned NOT NULL COMMENT '是否删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='机器信息表' AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `service_tag` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `create_time` int(10) NOT NULL COMMENT '创建时间',
  `update_time` int(10) NOT NULL COMMENT '更新时间',
  `tag_name` varchar(128) NOT NULL COMMENT 'tag名称',
  `domain_name` varchar(128) NOT NULL COMMENT '内网域名',
  `port` varchar(128) NOT NULL COMMENT '端口',
  `cmd_start` varchar(128) NOT NULL COMMENT 'cmd start',
  `cmd_stop` varchar(128) NOT NULL COMMENT 'cmd stop',
  `cmd_restart` varchar(128) NOT NULL COMMENT 'cmd restart',
  `is_deleted` bigint(20) unsigned NOT NULL COMMENT '是否删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='服务tag表' AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `service_svn` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `create_time` int(10) NOT NULL COMMENT '创建时间',
  `update_time` int(10) NOT NULL COMMENT '更新时间',
  `svn_path` varchar(128) NOT NULL COMMENT '服务单元svn的路径',
  `is_deleted` bigint(20) unsigned NOT NULL COMMENT '是否删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='服务单元svn表' AUTO_INCREMENT=1 ;


CREATE TABLE IF NOT EXISTS `svn2tag` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `create_time` int(10) NOT NULL COMMENT '创建时间',
  `update_time` int(10) NOT NULL COMMENT '更新时间',
  `svn_id` bigint(20) unsigned NOT NULL COMMENT 'svn_id',
  `tag_id` bigint(20) unsigned NOT NULL COMMENT 'tag_id',
  `is_deleted` bigint(20) unsigned NOT NULL COMMENT '是否删除',
  `deploy_path` varchar(128) NOT NULL COMMENT '部署路径',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='服务单元svn表' AUTO_INCREMENT=1 ;


CREATE TABLE IF NOT EXISTS `tag2machine` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `create_time` int(10) NOT NULL COMMENT '创建时间',
  `update_time` int(10) NOT NULL COMMENT '更新时间',
  `machine_id` bigint(20) unsigned NOT NULL COMMENT 'machine_id',
  `tag_id` bigint(20) unsigned NOT NULL COMMENT 'tag_id',
  `is_deleted` bigint(20) unsigned NOT NULL COMMENT '是否删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='服务单元svn表' AUTO_INCREMENT=1 ;

