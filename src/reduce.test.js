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
        describe('and an empty array', ()=>{
            it('returns the initial value', ()=> {
                const arrayToReduce = [];
                const initialValue = 4;
                function reducer(accumulator, currentItem){
                    return accumulator + currentItem;
                }

                const reducedValue = reduce(arrayToReduce, reducer, initialValue);
                expect(reducedValue).toEqual(initialValue);

            })
        })
    })

    describe('Given no initial value', ()=>{
        it('calls the reducer n - 1 times for an array with n elements', ()=>{
            const mockReducer = jest.fn();
            const arrayToReduce = [1, 2, 3, 4];
            const numberOfItemsInArray = arrayToReduce.length;
            reduce(arrayToReduce, mockReducer);
           
            expect(mockReducer).toHaveBeenCalledTimes(numberOfItemsInArray - 1);
        })
        describe('and an empty array', ()=>{
            it('throws an error', ()=> {
                const array = [];
                function reducer(accumulator, currentItem){
                    return accumulator + currentItem;
                }

                expect(() => reduce(array, reducer)).toThrow("An initial value must be provided when reducing an empty array");
            


            })
        })
    })
})