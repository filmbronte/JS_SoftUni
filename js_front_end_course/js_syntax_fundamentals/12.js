function reverseArray(n, array) {
    let removed_items = array.splice(0,n);
    let reversed = removed_items.reverse()
    console.log(reversed.join(" "));
}

reverseArray(4, [-1, 20, 99, 5])