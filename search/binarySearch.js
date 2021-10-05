const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ];

let count = 0;

// O(log 2n) - работает только с отсортированными массивами
const binarySearchCycle = (array, searchValue) => {
    let start = 0;
    let end = array.length;
    let middle;
    let complete = false;

    while (!complete && start <= end) {

        count++ ;
        middle = Math.floor( (end + start) / 2 );

        if (array[middle] === searchValue) {
            complete = true;
            return `Элемент ${searchValue} по индексу ${middle} был найден за ${count} итераций`;
        }

        if (array[middle] < searchValue) {
            start = middle;
        } else {
            end = middle;
        }

    }

    return `Элемент не найден`;

}

const binarySearchRecursive = (array, searchValue, start, end) => {
    const middle = Math.floor( (end + start) / 2 );
    count ++;

    if (array[middle] === searchValue) {
        return `Элемент ${searchValue} по индексу ${middle} был найден за ${count} итераций`;
    }

    if (array[middle] < searchValue) {
        return binarySearchRecursive(array, searchValue, middle + 1, end);
    }

    if (array[middle] > searchValue) {
        return binarySearchRecursive(array, searchValue, start, middle - 1);
    }
}

// console.log(binarySearchCycle(array, 14));
console.log(binarySearchRecursive(array, 14, 0, array.length));