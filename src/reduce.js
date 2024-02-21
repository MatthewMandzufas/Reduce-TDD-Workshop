

function reduce(arrayToReduce, reducer, initialValue){
    let accumulator;
    let startIndex;
    if(initialValue === undefined){
        if(arrayToReduce.length === 0){
            throw new Error("An initial value must be provided when reducing an empty array")
        }
        accumulator = arrayToReduce[0];
        startIndex = 1;
     
    } else{
        accumulator = initialValue; 
        startIndex = 0;
    }

    for(let i = startIndex; i < arrayToReduce.length; i++){
        accumulator = reducer(accumulator, arrayToReduce[i])
    }

    return accumulator;
    
}

export default reduce;