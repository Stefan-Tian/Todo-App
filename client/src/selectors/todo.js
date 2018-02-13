export const filterTodos = (Todos, { text, completeStatus }) =>
  Todos.filter(({ title, completed }) => {
    const textMatch = title.toLowerCase().includes(text.toLowerCase());
    const completeStatusMatch =
      completeStatus === undefined
        ? true
        : completeStatus ? completed === true : completed === false;
    return textMatch && completeStatusMatch;
  });
