Vue.component('todo-component', {
  template: '#todo-template',
  props: ['todoProp'],
  data() {
    return {
      edit: false
    }
  },
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
    },
    toggleEdit() {
      this.edit = !this.edit;
    },
    updateTodo(todo) {
      this.todoProp = todo;
      this.toggleEdit();
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
      this.$dispatch('form-submitted', this.newTodo)
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
