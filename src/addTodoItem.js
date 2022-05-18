import todoColl from "./todoColl";
import { todoList } from "./script";
import { renderTodoList } from "./renderTodoList";

function addTodoItem(input) {
    if (!input.value.length) { return }
    const item = {
        name: input.value,
        status: 'active',
    }
    todoColl.push(item);
    renderTodoList(todoColl, todoList);
    input.value = '';
}

export {addTodoItem}