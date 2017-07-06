// Using Object Expression to change fat arrow functions
// to be surrounded with () instead of using 'return {}'
// Can only do this when there is just a return statement for a function

// EX
// export const addTodo = (text) => {
//   return {}
//     type: 'ADD_TODO',
//     id: (nextTodoId++).toString(),
//     text,
//   };
// };
// EQUALS the other 'addTodo' function

import { v4 } from 'node-uuid';

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});

