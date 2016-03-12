Vue.component('todo', {
  template: '#todo',
  props: ['todoprop'],
  methods: {
    format_value(todo) {
      if(todo.option == 'dollars') {
        return `${todo.value}$`;
      } else {
        return `£${todo.value}`;
      }
    }
  }
})

Vue.component('todoForm', {
  template: '#todo-form',
  data() {
    return { newTodo: { title: '', value: '', option: '' } }
  },
  methods: {
    todoSubmit() {
      console.log(this.newTodo)
      this.$dispatch('new-todo-submitted', this.newTodo)
      this.newTodo = {}
    }
  }
})

new Vue({
  el: '#ui',
  data: {
    todos: [
      { title: 'My first todo', value: 10, option: 'dollars' },
      { title: 'My third todo', value: 100, option: 'pounds' }
    ]
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    }
  },
  created() {
    //created callback
  }
})
