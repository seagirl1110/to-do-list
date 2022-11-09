import { doneTodoItem, delTodoItem } from './store';
import TodoItem from './components/todo-item';

customElements.define('todo-item', TodoItem);

function renderTodoList(coll, container) {
  const list = container;
  list.innerHTML = '';
  coll.forEach((element, index) => {
    const item = document.createElement('todo-item');
    item.setAttribute('status', element.status);
    item.setAttribute('priority', element.priority);
    item.setAttribute('name', element.name);

    item.addEventListener('todo-item-done', () => {
      doneTodoItem(index);
      renderTodoList(coll, list);
    });

    item.addEventListener('todo-item-del', () => {
      delTodoItem(index);
      renderTodoList(coll, list);
    });

    list.append(item);
  });
}

export default renderTodoList;
