// Using Object Expression to change fat arrow functions
// to be surrounded with () instead of using 'return {}'

// EX
// export const addTodo = (text) => {
//   return {}
//     type: 'ADD_TODO',
//     id: (nextTodoId++).toString(),
//     text,
//   };
// };
// EQUALS the other 'addTodo' function


let nextTodoId = 0;
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: (nextTodoId++).toString(),
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

