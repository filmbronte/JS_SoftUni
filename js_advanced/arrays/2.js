function lastK(n, k) {
    let result = [1, 1];
    let sum = 0;
    for (let i=0; i<n; i++) {
        
        sum += result[i] + result[i+1];
        result.push(sum);
        
    }
    console.log(result)
}

lastK(6, 3)


// function lastKNumbersSequence(n,k) {
//     let array=[1];
 
//     for(let i=1;i<n;i++){
 
//         let lastK=array.slice(-k);
//         let sum=0;
 
//         for (const num of lastK) {
//             sum+=Number(num);
//         }
//         array.push(sum);
//     }
//  return array;
// }