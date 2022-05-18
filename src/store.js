const todoColl = JSON.parse(localStorage.getItem('todo')) || [
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
    localStorage.setItem('todo', JSON.stringify(todoColl))
}

const delTodoItem = (index) => {
    todoColl.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(todoColl))
}

export {todoColl, addTodoItem, delTodoItem}