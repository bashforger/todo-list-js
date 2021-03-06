import { db } from './db';
import { codefactory } from './codefactory';
import { status } from './status';

export const helper = () => {
  const renderTodos = (i) => {
    const projects = db().load();
    const { todos } = projects[i];
    if (document.getElementById('todo-names') != null) {
      document.getElementById('todo-names').remove();
    }
    codefactory('div', { class: 'border border-gray-200 my-3 p-5 rounded-lg flex flex-col divide-gray-200', id: 'todo-names' }, '', 'todo-flex-container');
    if (todos) {
      Object.keys(todos).forEach((i) => codefactory('th', { scope: 'col', class: 'p-2 text-xs font-medium text-gray-500 self-center w-full hover:bg-blue-50 cursor-pointer' }, todos[i].name, 'todo-names').addEventListener('click', () => status().todoStatus(i)));
    }
  };

  const renderProjects = () => {
    const projects = db().load();
    if (document.getElementById('project-names') != null) {
      document.getElementById('project-names').remove();
    }
    codefactory('div', { class: 'border border-gray-200 my-3 p-5 rounded-lg flex flex-col divide-gray-200', id: 'project-names' }, '', 'project-flex-container');
    Object.keys(projects).forEach(
      (i) => {
        codefactory('th', { scope: 'col', class: 'p-2 text-xs font-medium text-gray-500 self-center w-full hover:bg-blue-50 cursor-pointer' }, projects[i].name, 'project-names').addEventListener('click', () => (status().projectStatus(i)));
      },
    );
  };

  const clearTodos = () => {
    document.getElementById('todo-names').remove();
  };

  return { renderProjects, renderTodos, clearTodos };
};