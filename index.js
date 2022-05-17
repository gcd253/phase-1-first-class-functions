function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function(a, b) { return a + b}
}