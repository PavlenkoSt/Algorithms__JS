const array = [ -2, -10, 3, 2, 5, 6, 7, -1, -3, -4, 12, 15 ];


// O(n * n)
const bubleSort = (array) => {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if ( array[j + 1] < array[j] ) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
            count ++;
        }
    }

    return {
        array,
        message: `Массив был отсортирован за ${count} итераций, при длине массива ${array.length}`
    }
}

console.log(bubleSort(array));