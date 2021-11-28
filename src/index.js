import React from "react";
import ReactDOM from "react-dom";

import { IntlProvider } from "react-intl";

import locale_Es from "./locales/es.json"
import locale_En from "./locales/en.json"

import JobsList from "./components/jobslist";

//var language = "en"
var language = navigator.language.substring(0,2)
var localM;

console.log(navigator.language)

language === "es"? localM=locale_Es  : localM=locale_En;


ReactDOM.render(

    <IntlProvider locale={language} messages={localM}>
        <JobsList/>
    </IntlProvider>, document.getElementById("root")

);

