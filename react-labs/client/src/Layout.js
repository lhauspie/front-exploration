import React from "react";
import Header from "./Header";
import RuleList from "./RuleList";
import { Route } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="container">
                    <Route exact path="/" component={RuleList} />
                </div>
            </div>
        </div>
    );
};

export default Layout;