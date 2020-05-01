/**
 * Rules Actions.
 * Available actions:
 * - Load Rules: import rules and send RULES_LOADED action with data.
 */
import axios from "axios";

export const RULES_LOADED = "RULES_LOADED";
export const ADD_RULE = "ADD_RULE";
export const UPDATE_RULE = "UPDATE_RULE";

export function doLoadRules() {
    return async dispatch => {
        const response = await axios.get("/rest/rules");
        dispatch({
            type: RULES_LOADED,
            rules: response.data,
        });
    };
};

export function addRule(rule) {
    console.log("IN THE ADD_RULE ACTION CREATOR");
    return async dispatch => {
        try {
            const response = await axios.post("/rest/rules", rule);
            console.log("RESPONSE FROM POST /rest/rules");
            console.log(response);
            dispatch({
                type: ADD_RULE,
                rule: response.data,
            });
        } catch (error) {
            console.error(error);
        }
    };
};

export function updateRule(rule) {
    console.log("IN THE UPDATE_RULE ACTION CREATOR");
    return async dispatch => {
        try {
            const response = await axios.put(`/rest/rules/${rule.id}`, rule);
            console.log("RESPONSE FROM PUT /rest/rules/:id");
            console.log(response);
            dispatch({
                type: UPDATE_RULE,
                rule: response.data,
            });
        } catch (error) {
            console.error(error);
        }
    };
};
