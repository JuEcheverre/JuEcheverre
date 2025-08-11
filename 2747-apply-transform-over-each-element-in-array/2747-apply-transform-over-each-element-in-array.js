function map(arr, fn) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let transformed = fn(arr[i], i);


        result.push(transformed);
    }


    return result;
}

function plusone(n) {
    return n + 1;
}

console.log(map([1, 2, 3], plusone));
