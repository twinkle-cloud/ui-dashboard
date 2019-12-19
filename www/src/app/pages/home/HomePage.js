/*
 * @Author: duchengdong
 * @Date: 2019-11-07 16:41:16
 * @LastEditors: duchengdong
 * @LastEditTime: 2019-12-10 10:22:36
 * @Description: 
 */
import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Builder from "./Builder";
import Dashboard from "./Dashboard";
import DocsPage from "./docs/DocsPage";
import { LayoutSplashScreen } from "../../../_metronic";

const GoogleMaterialPage = lazy(() =>
  import("./google-material/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./react-bootstrap/ReactBootstrapPage")
);
const DemosPage = lazy(() =>
  import("../demos/DemosPage")
);
const AntvPage = lazy(() =>
  import("../antv/index")
);

export default function HomePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <Route path="/builder" component={Builder} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/docs" component={DocsPage} />
        <Route path="/demos" component={DemosPage} />
        <Route path="/antv" component={AntvPage} />
        <Redirect to="/error/error-v1" />
      </Switch>
    </Suspense>
  );
}
