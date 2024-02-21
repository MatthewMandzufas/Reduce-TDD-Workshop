

function reduce(arrayToReduce, reducer, initialValue){
    let accumulator;
    let startIndex;
    if(initialValue === undefined){
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