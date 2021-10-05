const array = [ -2, -10, 3, 2, 5, 6, 7, -1, -3, -4, 12, 15 ];


// O(n * n)
const selectionSort = (array) => {
    let count = 0;

    for (let i = 0; i < array.length; i++ ) {
        let minValueIndex = i;

        for (let j = i + 1; j < array.length; j++ ) {

            if(array[j] < array[minValueIndex]){
                minValueIndex = j;
            }

            count ++ ;
        }

        let tmp = array[i];
        array[i] = array[minValueIndex];
        array[minValueIndex] = tmp;
    }

    return {
        array,
        message: `Массив был отсортирован за ${count} итераций, при длине массива ${array.length}`
    }
}

console.log(selectionSort(array));