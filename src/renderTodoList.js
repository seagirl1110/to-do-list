function renderTodoList(coll, list) {
    list.innerHTML = '';
    coll.forEach(element => {
        const item = document.createElement('li');
        item.classList.add('todo-list__item');
        item.textContent = element.name;
        list.append(item)
    });
}

export {renderTodoList}