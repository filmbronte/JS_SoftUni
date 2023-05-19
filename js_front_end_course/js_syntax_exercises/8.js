function reversedChars(a, b, c) {
    let reversed = [a, b, c];
    // reversed.push(a);
    // reversed.push(b);
    // reversed.push(c);
    let result = reversed.reverse()
    console.log(result.join(" "));
}

reversedChars('a', 'b', 'c')