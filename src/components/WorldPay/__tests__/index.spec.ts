import {add} from "../index";

describe('world pay', function () {
    it('should add 2 numbers', function () {
        expect(add(1, 2)).toEqual(3);
    });
});