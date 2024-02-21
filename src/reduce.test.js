import reduce from "./reduce"



describe('Reduce', () => {
    it('Should reduce an array of numbers to their sum', ()=> {
        const arrayToReduce = [1, 2, 3, 4];
        function reducer(accumulator, currentItem) {
            return accumulator + currentItem;
        }

        const sumOfNumbersInAnArray = reduce(arrayToReduce, reducer);
        expect(sumOfNumbersInAnArray).toBe(10);
    }),
    it('Should use the initial value as the accumulator instead of the first element of the array', ()=> {
        const arrayToReduce = [1, 2, 3, 4];
        const initialValue = 4;
        function reducer(accumulator, currentItem) {
            return accumulator + currentItem;
        }

        const sumOfNumbersInAnArray = reduce(arrayToReduce, reducer, initialValue);
        expect(sumOfNumbersInAnArray).toBe(14);
    })
})