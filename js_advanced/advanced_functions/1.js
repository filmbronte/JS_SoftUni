/**
 * 
 * @param {function} area 
 * @param {function} vol 
 * @param {string} input 
 * @returns 
 */

function solve(area, vol, input) {
    const cubes = JSON.parse(input);
    const result = [];

    for (let cube of cubes) {
        const cubeArea = area.apply(cube);
        const cubeVol = vol.apply(cube);

        result.push({
            area: cubeArea,
            volume: cubeVol,
        });
    }

    return result;

    // with map:

    // return JSON.parse(input).map(cube => ({
    //     area: area.apply(cube),
    //     volume: vol.apply(cube),
    // }));
}

const data = `[ {"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"} ]`;

console.log(solve(area, vol, data));

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}
