import { DO_LIKE, DO_DISLIKE, doLike, doDislike } from "../like-actions.js";
import "@testing-library/jest-dom/extend-expect";
import rules from "../../data.json";
import mockAxios from "axios";

jest.mock("axios");

describe("doLike", function() {
    const dispatch = jest.fn();
    beforeEach(() => {
        dispatch.mockClear();
        mockAxios.post.mockImplementationOnce(() => ({
            ok: true,
        }));
    });

    it("should return an action of type DO_LIKE containing the good ruleId", async function() {
        await doLike(1)(dispatch);
        expect(dispatch).toBeCalledWith({
            type: DO_LIKE,
            ruleId: 1,
        });
    });
});

describe("doDislike", function() {
    let dispatch;
    beforeEach(() => {
        dispatch = jest.fn();
        mockAxios.post.mockImplementationOnce(() => ({
            ok: true,
        }));
    });

    it("should return an action of type DO_DISLIKE containing the good ruleId", async function() {
        await doDislike(1)(dispatch);
        expect(dispatch).toBeCalledWith({
            type: DO_DISLIKE,
            ruleId: 1,
        });
    });
});
