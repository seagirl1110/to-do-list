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

const sortTodoColl = () => {
    todoColl.sort((a, b) => {
        if (a.status === 'active' && b.status === 'done') {
            return -1;
        }
    })
}

const addTodoItem = (item) => {
    todoColl.push(item);
    sortTodoColl();
    localStorage.setItem('todo', JSON.stringify(todoColl))
}

const doneTodoItem = (index) => {
    if (todoColl[index].status === 'active') {
        todoColl[index].status = 'done';
    } else {
        todoColl[index].status = 'active';
    }
    sortTodoColl();
    localStorage.setItem('todo', JSON.stringify(todoColl))
}

const delTodoItem = (index) => {
    todoColl.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(todoColl))
}

export { todoColl, addTodoItem, doneTodoItem, delTodoItem }