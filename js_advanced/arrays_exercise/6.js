function listOfNames(array) {
    let result = array.sort((a, b) => {
        return a.localeCompare(b);
    })
    console.log(result
        .map(function (a, i) {
            return `${i + 1}.${a}`;
        })
        .join("\n"));
}

listOfNames(["John",
    "Bob",
    "Christina",
    "Ema"])