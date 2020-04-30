import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import RuleList from "./RuleList";

import { Provider } from "react-redux";
import store from "./store/app-store";

const domElement = document.getElementById("root");
const reactElement =
    <Provider store={store}>
        <RuleList rules={[]} />
    </Provider>
;

ReactDOM.render(reactElement, domElement);
