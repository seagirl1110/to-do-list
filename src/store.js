const todoColl = [
    {
        name: 'task 1',
        status: 'active',
    },
    {
        name: 'task 2',
        status: 'active',
    },
    {
        name: 'task 3',
        status: 'active',
    },
];

const addTodoItem = (item) => {
    todoColl.push(item);
}

const delTodoItem = (index) => {
    todoColl.splice(index, 1);
}

export {todoColl, addTodoItem, delTodoItem}