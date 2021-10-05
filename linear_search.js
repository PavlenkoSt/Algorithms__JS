const array = [ 1, 2, 3, 4, 5, 6, 7, 8 ];


// O(n)
const linearSearch = (arr, searchValue) => {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        count ++;
        if(arr[i] === searchValue){
            return `Элемент ${searchValue} по индексу ${i} был найден за ${count} итераций`;
        }
    }
    return 'Элемент не найден';
}

console.log(linearSearch(array, 8));