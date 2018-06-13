import { createSelector } from 'reselect';

const getTasks = state => state.todosState.todos;
const getFilterType = state => state.todosState.filterType;

const getCompletedTasks = createSelector(
  getTasks,
  todos => {
      return todos.filter(task => task.status);
  }
)

const getUncompletedTasks = createSelector(
  getTasks,
  todos => {
      return todos.filter(task => !task.status);
  }
)

export const getVisibleTodos = createSelector(
    [ getFilterType, getTasks, getCompletedTasks, getUncompletedTasks ],
    (filterType, todos, completed, uncompleted) => {
      switch (filterType) {
        case 'SHOW_ALL':
          return todos;
        case 'SHOW_COMPLETED':
          return completed;
        case 'SHOW_UNCOMPLETED':
          return uncompleted;
      }
    }
  )
