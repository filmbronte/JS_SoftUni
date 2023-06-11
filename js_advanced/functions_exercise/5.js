function add(n) {
    const inner = function (a) {
        n += a;
        return inner;
    };

    inner.toString = function () {
        return n;
    };

    return inner;
}

console.log(add(5)(2)(-1).toString());