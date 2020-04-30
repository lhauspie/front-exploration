import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import RuleList from "./RuleList";

import { Provider } from "react-redux";
import store from "./store/app-store";

import { BrowserRouter, Route} from "react-router-dom";

const domElement = document.getElementById("root");
const reactElement =
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={RuleList} />
        </BrowserRouter>
    </Provider>
;

ReactDOM.render(reactElement, domElement);
