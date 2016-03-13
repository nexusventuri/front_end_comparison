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
      this.$dispatch('new-todo-submitted', this.newTodo)
      this.newTodo = {}
    }
  }
})

new Vue({
  el: '#ui',
  data: {
    todos: [ ]
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    }
  },
  ready() {
    $.get('/todos', (response) => {
      $.each(response, (key, value) => {
        this.todos.push(value)
      })
    })
  }
})
