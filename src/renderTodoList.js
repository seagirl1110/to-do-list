import { delTodoItem } from './store';

function renderTodoList(coll, list) {
    list.innerHTML = '';
    coll.forEach((element, index) => {
        const item = document.createElement('li');
        item.classList.add('todo-list__item', 'todo-item');
        item.innerHTML = `<span class="todo-item__name">${element.name}</span>`

        const btnDel = document.createElement('button');
        btnDel.classList.add('todo-item__btn-del');
        btnDel.addEventListener('click', () => {
            delTodoItem(index);
            renderTodoList(coll, list)
        })
        item.append(btnDel);

        list.append(item)
    });
}

export { renderTodoList }