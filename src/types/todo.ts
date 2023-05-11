export interface ITodo {
  id: string
  isDone: boolean
  title: string
  content: string
  createdDate: string
}

export interface ITodos {
  todos: ITodo[]
}
