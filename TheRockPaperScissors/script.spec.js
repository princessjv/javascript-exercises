const {RANDOMTEN,computersChoice,playersChoice,JunkenpoyGame} = require('./script.js')

describe('RANDOMTEN',()=>{
            test('works', ()=>{
                expect(RANDOMTEN()).not.toBeNull();
            });
            test.skip('Do not exceed to ten ', ()=>{
                expect(RANDOMTEN()).toBeLessThan(10);
            });
            test.skip('Generates greater than 0 ', ()=>{
                expect(RANDOMTEN()).toBeGreaterThan(0);
            });
});

describe('computersChoice', () =>{
    test(' works ', () =>{//expectations
        expect(computersChoice(10)).toBe('rock');
    });
    test.skip('work when it is lower than four', () =>{
        expect(computersChoice(9)).toBe('rock');
    });
    test.skip('work when it is lower than four', () =>{
        expect(computersChoice(8)).toBe('rock');
    });
    test.skip(' works when it is lower than eight', () =>{
        expect(computersChoice(7)).toBe('paper');
    });
    test.skip(' works when it is lower than eight', () =>{
        expect(computersChoice(6)).toBe('paper');
    });
    test.skip(' works when it is lower than eight', () =>{
        expect(computersChoice(5)).toBe('paper');
    });
    test.skip(' works when it is lower than eight', () =>{
        expect(computersChoice(4)).toBe('paper');
    });
    test.skip('work when it is lower than four', () =>{
        expect(computersChoice(3)).toBe('scissors');
    });
    test.skip('work when it is lower than four', () =>{
        expect(computersChoice(2)).toBe('scissors');
    });
    test.skip('work when it is lower than four', () =>{
        expect(computersChoice(1)).toBe('scissors');
    });
});


describe('playersChoice', ()=>{     
    test.skip('should not generate  undefined', ()=>{
        const input = ['rock','paper','scissors'];
        for (const Item in input) {
            return Item;
        expect(playersChoice(Item)).not.toBeUndefined(); }//testing camel case 
    }); 
    test.skip('works with either rock, paper or scissors ',()=>{
        const input = ['rock','paper','scissors'];
        for (const Item in input) {
            return Item;
        expect(usersChoice(Item)).toMatch(/paper/||/rock/||/scissors/);}
    });

});
