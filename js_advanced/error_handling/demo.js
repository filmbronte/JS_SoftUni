function solve() {
    try {
        throw new Error('my error');
    } catch (error) {
        console.log(error);
    }
}

solve();