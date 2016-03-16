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
    todos: [],
    filteredTodos() {
      let result = this.todos.filter((todo) => {
        return this.selectedFilter == 'all' || todo.option == this.selectedFilter;
      })

      return this.sortTodos(result);
    },
    filters: [],
    selectedFilter: 'all',

    selectedSortMethod: 'none',
    sortMethods: ['none']
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },

    deleteTodo(todo) {
      this.todos.$remove(todo);
    }, 

    sortTodos(todos) {
      if(this.selectedSortMethod == 'none') {
        return todos;
      }

      let field = this.selectedSortMethod 
      todos.sort((a, b) => {
        if(a[field] > b[field]) {
          return 1;
        } else if(a[field] < b[field]) {
          return -1;
        }
        return 0;
      })
      return todos;
    },

    loadNewCollection() {
      this.loadFromUrl('/todos/search')
    },
    loadFromUrl(url) {
      $.get(url, (response) => {
        let allOptions = ['all'].concat(response.map((element) => {return element.option}))
        this.todos = response;
        this.filters = [...new Set(allOptions)]
        this.sortMethods = ['none'].concat(Object.keys(this.todos[0]))
      })
    }
  },

  ready() {
    this.loadFromUrl('/todos');
  }
})
