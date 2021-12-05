import { expect } from 'chai';
import { getCompletedTodos} from '../todos/selectors';

describe('The getCompletedTodos selector', () => {
    it('Returns only completed todos', () =>{
        const fakeTodos =[ {
            text:  'HEY',
            isCompleted: true,
        }, {
            text: 'BYE',
            isCompleted: false
        },{
            text: 'WIN RACE',
            isCompleted: false
        }]
        const expected = [{
            text:  'HEY',
            isCompleted: true,
        }];
        const actual = getCompleteTodos.resultFunc(fakeTodos)
        expect(actual).to.deep.equal(expected)
    });
});