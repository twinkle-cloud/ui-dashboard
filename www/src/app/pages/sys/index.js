/*
 * @Author: duchengdong
 * @Date: 2019-12-24 16:24:02
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-16 16:14:36
 * @Description: 
 */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CodeManage from './CodeManage'
import DataManageCreate from './dataM/DataManageCreate'
import DataManage from './DataManage'
import MenuManage from './MenuManage'
import OrgManage from './OrgManage'
import ParamManage from './ParamManage'
import RoleManageCreate from './roleM/RoleManageCreate'
import RoleManage from './RoleManage'
import UserManage  from "./UserManage"
import TenantManage from './TenantManage'

export default function SysPage() {
  return (
      <Switch>
        <Redirect from="/sys" exact={true} to="/sys/tenantmanage" />
        {/* 租户管理 */}
        <Route path="/sys/tenantmanage" component={TenantManage} />
        <Route path="/sys/codemanage" component={CodeManage} />
        {/* 数据字典 */}
        <Route path="/sys/datamanage/create/:id?" component={DataManageCreate} />
        <Route path="/sys/datamanage" component={DataManage} />
        
        <Route path="/sys/menumanage" component={MenuManage} />
        <Route path="/sys/parammanage" component={ParamManage} />
        {/* 角色管理 */}
        <Route path="/sys/rolemanage/create/:id?" component={RoleManageCreate} />
        <Route path="/sys/rolemanage" component={RoleManage} />
        <Route path="/sys/usermanage" component={UserManage} />
        <Route path="/sys/orgmanage" component={OrgManage} />
      </Switch>
  );
}