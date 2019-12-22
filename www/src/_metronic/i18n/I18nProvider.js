/*
 * @Author: duchengdong
 * @Date: 2019-11-13 21:10:06
 * @LastEditors  : duchengdong
 * @LastEditTime : 2019-12-22 10:44:13
 * @Description: 
 */
import React from "react";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/dist/locale-data/en";
import "@formatjs/intl-relativetimeformat/dist/locale-data/de";
import "@formatjs/intl-relativetimeformat/dist/locale-data/es";
import "@formatjs/intl-relativetimeformat/dist/locale-data/fr";
import "@formatjs/intl-relativetimeformat/dist/locale-data/ja";
import "@formatjs/intl-relativetimeformat/dist/locale-data/zh";

import deMessages from "./messages/de";
import enMessages from "./messages/en";
import esMessages from "./messages/es";
import frMessages from "./messages/fr";
import jaMessages from "./messages/ja";
import zhMessages from "./messages/zh";

const allMessages = {
  zh: zhMessages,
  en: enMessages,
  de: deMessages,
  es: esMessages,
  fr: frMessages,
  ja: jaMessages
};

export default function I18nProvider({ children }) {
  const locale = useSelector(({ i18n }) => {console.log(i18n.lang);return i18n.lang});
  const messages = allMessages[locale];
  console.log(locale)
  return (
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
  );
}
