const { sqlForPartialUpdate } = require("./sql")

describe("sqlForPartialUpdate", function () {
    test("inputdata", function () {
        const result = sqlForPartialUpdate(
            { f1: "value1"},
            { f1: "f1", f2: "f2"});
        expect(result).toEqual({
            setCols: "\"f1\"=$1",
            values: ["value1"]
        });
    });
})