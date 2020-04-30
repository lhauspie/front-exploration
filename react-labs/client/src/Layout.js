import React from "react";
import Header from "./Header";
import RuleList from "./RuleList";
import RuleForm from "./RuleForm";
import { Route } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="container">
                    <Route exact path="/" component={RuleList} />
                    <Route exact path="/new" component={RuleForm} />
                    <Route exact path="/edit/:id" component={RuleForm} />
                </div>
            </div>
        </div>
    );
};

export default Layout;