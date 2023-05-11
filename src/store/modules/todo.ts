import { IRootState } from '..'
import { ITodos } from '@/types/todo'
import { Module } from 'vuex'

const todo: Module<ITodos, IRootState> = {
  state: () => ({
    todos: [],
  }),
  mutations: {
    AddTodo(state, todo) {
      state.todos.push(todo)
    },
    DelTodo(state, todo) {
      const index = state.todos.findIndex((_todo) => _todo.id === todo.id)
      state.todos.splice(index, 1)
    },
    UpdateTodo(state, todo) {
      const index = state.todos.findIndex((_todo) => _todo.id === todo.id)
      state.todos.splice(index, 1, todo)
    },
    DoneToggleTodo(state, todo) {
      const index = state.todos.findIndex((_todo) => _todo.id === todo.id)
      state.todos.splice(index, 1, todo)
    },
  },
  actions: {},
  getters: {
    getTodos: (state) => {
      return state.todos
    },
  },
}

export default todo
