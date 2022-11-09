export default class TodoItem extends HTMLElement {
  connectedCallback() {
    this.status = this.getAttribute('status');
    this.priority = this.getAttribute('priority');
    this.name = this.getAttribute('name');
    this.classList.add('todo-list__item', 'todo-item', `todo-item--${this.status}`, `todo-item--${this.priority}`);
    this.innerHTML = `<span class="todo-item__name">${this.name}</span>`;

    const btnDone = document.createElement('button');
    btnDone.classList.add('todo-item__btn-done');
    btnDone.addEventListener('click', () => {
      btnDone.dispatchEvent(new CustomEvent('todo-item-done', { bubbles: true }));
    });
    this.prepend(btnDone);

    const btnDel = document.createElement('button');
    btnDel.classList.add('todo-item__btn-del');
    btnDel.addEventListener('click', () => {
      btnDone.dispatchEvent(new CustomEvent('todo-item-del', { bubbles: true }));
    });
    this.append(btnDel);
  }
}
