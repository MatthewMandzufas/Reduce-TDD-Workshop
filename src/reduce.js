

function reduce(arrayToReduce, reducer){
    let accumulator = arrayToReduce[0];
    for(let i = 1; i < arrayToReduce.length; i++){
        accumulator = reducer(accumulator, arrayToReduce[i])
    }
    return accumulator;
}

export default reduce;