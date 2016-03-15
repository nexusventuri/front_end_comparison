Vue.component('todo-component', {
  template: '#todo-template',
  props: ['todoProp'],
  methods: {
    formatValue(todo) {
      if(todo.option == 'dollars') {
        return `${todo.value}$`;
      } else {
        return `£${todo.value}`;
      }
    },
    deleteTodo(todo) {
      this.$dispatch('delete-todo', todo);
    }
  }
})

Vue.component('todo-form', {
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
    },
    deleteTodo(todo) {
      console.log('deleting todo');
      console.log(todo)
      this.todos.$remove(todo);
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
