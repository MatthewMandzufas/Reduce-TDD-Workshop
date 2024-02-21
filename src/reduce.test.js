import reduce from "./reduce"



describe('Reduce', () => {
    it('Should reduce an array of numbers to their sum', ()=> {
        const arrayToReduce = [1, 2, 3, 4];
        function reducer(accumuator, currentItem) {
            return accumuator + currentItem;
        }

        const sumOfNumbersInAnArray = reduce(arrayToReduce, reducer);
        expect(sumOfNumbersInAnArray).toBe(10);
    })
})