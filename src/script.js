import './style.scss';
import { todoColl, addTodoItem } from './store';
import renderTodoList from './renderTodoList';

const todoList = document.querySelector('[data-todo="list"]');

const form = document.querySelector('[data-todo="form"]');
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

const input = form.querySelector('[data-todo="input"]');
input.focus();

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') {
    input.focus();
  }
});

const btnPriority = form.querySelector('[data-todo="priority"]');
const btnPriorityCheckbox = btnPriority.querySelector('[data-todo="priority-checkbox"]');
btnPriorityCheckbox.addEventListener('change', () => {
  if (btnPriorityCheckbox.checked) {
    btnPriority.classList.add('todo-form__priority--important');
  } else {
    btnPriority.classList.remove('todo-form__priority--important');
  }
});

const btnAdd = form.querySelector('[data-todo="btn-add-item"]');
btnAdd.addEventListener('click', () => {
  if (!input.value.length) { return; }
  let priority = 'common';
  if (btnPriorityCheckbox.checked) {
    priority = 'important';
  }
  const item = {
    name: input.value,
    status: 'active',
    priority,
  };
  addTodoItem(item);
  input.value = '';
  renderTodoList(todoColl, todoList);
});

renderTodoList(todoColl, todoList);
