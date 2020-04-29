import _ from "lodash";
import { RULES_LOADED, doLoadRules } from "../rules-actions.js";
import "@testing-library/jest-dom/extend-expect";
import mockAxios from "axios"; // overriden by the /__mocks__/axios.js

import rules from "../../data.json";

jest.mock("axios");

describe("doLoadRules", function() {
    let data;
    let dispatch;

    beforeAll(() => {
        data = _.cloneDeep(rules);
    });

    beforeEach(() => {
        dispatch = jest.fn();
        mockAxios.get.mockImplementationOnce(() => ({
                data: _.cloneDeep(rules),
            })
        );
    });

    it("should return an action of type RULES_LOADED with all the rules", async function() {
        await doLoadRules()(dispatch);
        expect(dispatch).toBeCalledWith({
            type: "RULES_LOADED",
            rules: data,
        });
    });
})