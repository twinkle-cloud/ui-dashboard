/*
 * @Author: duchengdong
 * @Date: 2019-11-28 17:05:15
 * @LastEditors: duchengdong
 * @LastEditTime: 2019-12-10 10:23:38
 * @Description: 
 */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import  AntvPage1  from "./AntvPage1";

export default function AntvPage() {
  return (
      <Switch>
        <Redirect from="/antv" exact={true} to="/antv/demo1" />
        <Route path="/antv/demo1" component={AntvPage1} />
      </Switch>
  );
}
