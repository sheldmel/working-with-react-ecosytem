import { expect } from "chai";
import { getBorderStyleForDate } from "../todos/TodoListItem";

describe('getBporderStyleForDate', () => {
    it('returns none when the date was less than five days ago', () =>{
        const today = Date.now();
        const recentDate = new Date(Date.now() - 8640000 * 3)

        const expected = 'none';
        const actual = getBorderStyleForDate(recentDate, today)

        expect(actual).to.equal(expected)
    });
    it('returns a border when the date is more than five days ago', () =>{
        const today = Date.now();
        const recentDate = new Date(Date.now() - 8640000 * 7)

        const expected = '2px solid red';
        const actual = getBorderStyleForDate(recentDate, today)

        expect(actual).to.equal(expected)
    });
})