/*
 * @Author: duchengdong
 * @Date: 2019-11-28 17:05:15
 * @LastEditors: duchengdong
 * @LastEditTime: 2019-11-28 18:21:30
 * @Description: 
 */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import  DemoPage1  from "./DemoPage1";

export default function DemosPage() {
  return (
      <Switch>
        <Redirect from="/demos" exact={true} to="/demos/demo1" />
        <Route path="/demos/demo1" component={DemoPage1} />
      </Switch>
  );
}
