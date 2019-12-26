/*
 * @Author: duchengdong
 * @Date: 2019-12-24 16:24:02
 * @LastEditors  : duchengdong
 * @LastEditTime : 2019-12-24 16:52:10
 * @Description: 
 */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CodeManage from './CodeManage'
import DataManage from './DataManage'
import MenuManage from './MenuManage'
import OrgManage from './OrgManage'
import ParamManage from './ParamManage'
import RoleManage from './RoleManage'
import UserManage  from "./UserManage";

export default function SysPage() {
  return (
      <Switch>
        <Redirect from="/sys" exact={true} to="/sys/usermanage" />
        <Route path="/sys/codemanage" component={CodeManage} />
        <Route path="/sys/datamanage" component={DataManage} />
        <Route path="/sys/menumanage" component={MenuManage} />
        <Route path="/sys/parammanage" component={ParamManage} />
        <Route path="/sys/rolemanage" component={RoleManage} />
        <Route path="/sys/usermanage" component={UserManage} />
        <Route path="/sys/orgmanage" component={OrgManage} />
      </Switch>
  );
}