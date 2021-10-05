const array = [ -2, -10, 3, 2, 5, 6, 7, -1, -3, -4, 12, 15 ];

let count = 0;

// O(log 2n *n)
const quickSort = (array) => {
    if(array.length <= 1){
        return array;
    }

    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];
    const less = [];
    const greater = [];

    for (let i = 0; i < array.length; i++ ) {
        if (array[i] === pivot) {
            continue;
        }

        if (array[i] < pivot) {
            less.push(array[i]);
        }

        if (array[i] > pivot) {
            greater.push(array[i]);
        }

        count++;
    }

    return [ ...quickSort(less), pivot, ...quickSort(greater) ];
}

console.log(quickSort(array), ` с длинной ${array.length} был отсортирован за ${count} интераций`);