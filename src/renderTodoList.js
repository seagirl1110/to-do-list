import { doneTodoItem, delTodoItem } from './store';

function renderTodoList(coll, container) {
  const list = container;
  list.innerHTML = '';
  coll.forEach((element, index) => {
    const item = document.createElement('li');
    item.classList.add('todo-list__item', 'todo-item', `todo-item--${element.status}`, `todo-item--${element.priority}`);
    item.innerHTML = `<span class="todo-item__name">${element.name}</span>`;

    const btnDone = document.createElement('button');
    btnDone.classList.add('todo-item__btn-done');
    btnDone.addEventListener('click', () => {
      doneTodoItem(index);
      renderTodoList(coll, list);
    });
    item.prepend(btnDone);

    const btnDel = document.createElement('button');
    btnDel.classList.add('todo-item__btn-del');
    btnDel.addEventListener('click', () => {
      delTodoItem(index);
      renderTodoList(coll, list);
    });
    item.append(btnDel);

    list.append(item);
  });
}

export default renderTodoList;
