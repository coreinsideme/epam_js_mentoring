const file = require("./index");

describe("tests", () => {
    it("should return array with length = 3", () => {
        expect(file.getElements().length).toEqual(3);
    });
});
