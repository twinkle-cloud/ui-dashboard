/*
 * @Author: duchengdong
 * @Date: 2019-11-12 17:46:04
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-06 17:15:17
 * @Description: 
 */
/**
 * Create React App entry point. This and `public/index.html` files can not be
 * changed or moved.
 */
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { mockAxios, setupAxios } from "./_metronic";
import store, { persistor } from "./app/store/store";
import App from "./App";
import ConfigProvider from 'antd/es/config-provider'
import zh_CN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import "./index.scss"; // Standard version
// import "./sass/style.react.rtl.css"; // RTL version
import "socicon/css/socicon.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./_metronic/_assets/plugins/line-awesome/css/line-awesome.css";
import "./_metronic/_assets/plugins/flaticon/flaticon.css";
import "./_metronic/_assets/plugins/flaticon2/flaticon.css";
// 引入antd样式
import 'antd/es/input/style/css';
import 'antd/es/select/style/css';
import 'antd/es/button/style/css';
import 'antd/es/icon/style/css';
import 'antd/es/table/style/css';
import 'antd/es/alert/style/css';
import 'antd/es/tooltip/style/css';
import 'antd/es/form/style/css';
/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env;

/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/* const mock = */ mockAxios(axios);

/**
 * Inject metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios, store);

const Layout = React.lazy(() => import("./_metronic/layout/Layout.js"));
moment.locale('zh-cn');

ReactDOM.render(
  <ConfigProvider locale={zh_CN}>
    <App
      store={store}
      Layout={Layout}
      persistor={persistor}
      basename={PUBLIC_URL}
    />
  </ConfigProvider>,
  document.getElementById("root")
);
