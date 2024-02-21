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
    }),
    it('Should not modify the original array', ()=> {
        const array = [1, 2, 3, 4];
        const initialValue = 4;
        function reducer(accumulator, currentItem){
            return accumulator + currentItem;
        }
        
        reduce(array, reducer, initialValue);
        expect(array).toStrictEqual([1, 2, 3, 4]);
    })
    describe('Given an initial value', ()=> {
        it('Calls the reducer once per element in the array', ()=> {
            const arrayToReduce = [1, 2, 3, 4];
            const mockReducer = jest.fn();
            const numberOfItemsInArray = arrayToReduce.length;
            const initialValue = 4;
            

            reduce(arrayToReduce, mockReducer, initialValue);
            expect(mockReducer).toHaveBeenCalledTimes(numberOfItemsInArray);
        })
    })
})