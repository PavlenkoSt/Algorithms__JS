const graph = {
    a: [ 'b', 'c' ],
    b: [ 'f' ],
    c: [ 'd', 'e' ],
    d: [ 'f' ],
    e: [ 'f' ],
    f: [ 'g' ]
};

const breadthSearch = (graph, start, end) => {
    let queue = [];
    let steps = 0;
    queue.push(start);

    while (queue.length > 0) {
        const current = queue.shift();

        if (!graph[current]) {
            graph[current] = [];
        }

        if (graph[current].includes(end)) {
            return `граф пройден за ${steps} шагов`;
        } else {
            queue = [ ...queue, ...graph[current] ];
        }

        steps ++ ;
    }

    return `Граф не пройден`;
}

console.log(breadthSearch(graph, 'a', 'g'));