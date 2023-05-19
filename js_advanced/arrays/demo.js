let arr = ['Pesho', 'Ivo', 'Ivan', 'Georgi'];

let query = 'iV';

let result = arr
            .filter(text => {
                return text.toLowerCase().indexOf(query.toLowerCase()) >= 0;
            });

console.log(result);
