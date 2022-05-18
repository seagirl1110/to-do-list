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
    addTodoItem(input)
});

const todoList = document.querySelector('[data-todo="list"]');
renderTodoList(todoColl, todoList);

export {todoList}