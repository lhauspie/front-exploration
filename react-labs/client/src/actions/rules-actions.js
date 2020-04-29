/**
 * Rules Actions.
 * Available actions:
 * - Load Rules: import rules and send RULES_LOADED action with data.
 */
import axios from "axios";

export const RULES_LOADED = "RULES_LOADED";

export function doLoadRules() {
    return async dispatch => {
        const response = await axios.get("/rest/rules");
        dispatch({
            type: RULES_LOADED,
            rules: response.data,
        });
    };
};
