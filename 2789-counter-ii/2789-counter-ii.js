function createCounter(init) {
    let current = init
    
    let myCounter = {
        increment: function() {
            current++
            return current
        },

        decrement: function(){
            current--
            return current
        },

        reset: function(){
            current = init
            return current
        }
    }

    return myCounter
}

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());