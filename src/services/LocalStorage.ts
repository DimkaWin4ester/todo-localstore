export type Todo = {
  description: string;
  active: boolean;
}

export function getAllTodos () {
  const todos = localStorage.getItem('todos')
  if (todos) {
    return JSON.parse(todos)
  }
  return []
}

export function addTodo (todoDescription: string ) {
  const todos = getAllTodos()
  const todo = { description: todoDescription, active: true }
  todos.push(todo)
  localStorage.setItem('todos', JSON.stringify(todos))
}

export function changeTodoStatus (todoDescription: string) {
  const todos = getAllTodos()
  todos.forEach((todo: Todo) => {
    if (todo.description === todoDescription) {
      todo.active = !todo.active
    }
  })
  localStorage.setItem('todos', JSON.stringify(todos))
}
