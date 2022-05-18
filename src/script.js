import './style.scss';
import { todoColl, addTodoItem } from './store';
import { renderTodoList } from './renderTodoList';

const form = document.querySelector('[data-todo="form"]');
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
})

const input = form.querySelector('[data-todo="input"]');
input.focus();

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
        input.focus();
    }
})

const btnAdd = form.querySelector('[data-todo="btn-add-item"]');
btnAdd.addEventListener('click', () => {
    if (!input.value.length) { return }
    const item = {
        name: input.value,
        status: 'active',
    }
    addTodoItem(item);
    input.value = '';
    renderTodoList(todoColl, todoList)
});

const todoList = document.querySelector('[data-todo="list"]');
renderTodoList(todoColl, todoList);

export { todoList }