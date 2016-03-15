Vue.component('todo-show', {
  template: '#todo-template',
  props: ['todoprop'],
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
      this.todoprop = todo;
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
    todos: [ ],
    filters: ['all'],
    selectedFilter: 'all',
    filteredTodos() {
      let result = this.todos.filter((todo) => {
        return this.selectedFilter == 'all' || todo.option == this.selectedFilter;
      })
      console.log(result)
      return result;
    }
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
        this.filters.push(value.option)
      })

      this.filters = [...new Set(this.filters)]
    })
  }
})
