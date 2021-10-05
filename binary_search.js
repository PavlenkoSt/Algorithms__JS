const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ];


// O(log 2n) - работает только с отсортированными массивами
const binarySearchCycle = (array, searchValue) => {
    let start = 0;
    let end = array.length;
    let middle;
    let complete = false;
    let count = 0;

    while(!complete && start <= end){

        count++ ;
        middle = Math.floor((end + start) / 2);

        if(array[middle] === searchValue){
            complete = true;
            return `Элемент ${searchValue} по индексу ${middle} был найден за ${count} итераций`
        }

        if(array[middle] < searchValue){
            start = middle;
        }else{
            end = middle
        }

    }

    return `Элемент не найден`;

}

console.log(binarySearchCycle(array, 14));