import { createSelector } from 'reselect';

const getTasks = state => state.todosState.todos;
const getFilterType = state => state.todosState.filterType;

export const getVisibleTodos = createSelector(
    [ getFilterType, getTasks ],
    (filterType, todos) => {
      switch (filterType) {
        case 'SHOW_ALL':
          return todos;
        case 'SHOW_COMPLETED':
          return todos.filter(task => task.status);
        case 'SHOW_UNCOMPLETED':
          return todos.filter(task => !task.status);
      }
    }
  )
