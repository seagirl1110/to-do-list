import './style.scss';
import todoColl from './todoColl';
import { renderTodoList } from './renderTodoList';
import { addTodoItem } from './addTodoItem'

const form = document.querySelector('[data-todo="form"]');
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
})

const input = form.querySelector('[data-todo="input"]');

const btnAdd = form.querySelector('[data-todo="btn-add-item"]');
btnAdd.addEventListener('click', () => {
    if (!input.value.length) { return }
    const item = {
        name: input.value,
        status: 'active',
    }
    addTodoItem(todoColl, item);
    input.value = '';
    renderTodoList(todoColl, todoList)
});

const todoList = document.querySelector('[data-todo="list"]');
renderTodoList(todoColl, todoList);

export {todoList}