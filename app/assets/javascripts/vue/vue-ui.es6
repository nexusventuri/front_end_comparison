Vue.component('todo-show', {
  template: '#todo-template',
  props: ['todoprop'],
  data() {
    return {
      isEditing: false
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
      this.isEditing = !this.isEditing;
    },

    updateTodo(todo) {
      Vue.util.extend(this.todoprop, todo)
      this.toggleEdit();
    }
  }
})

Vue.component('todo-form', {
  template: '#todo-form',
  props: ['todo', 'isnewtodo'],
  data() {
    return {
      editingTodo: Vue.util.extend({}, this.todo)
    }
  },

  methods: {
    todoSubmit() {
      this.$dispatch('form-submitted', this.editingTodo)

      if(this.isnewtodo) {
        this.editingTodo = {}
      }
    }
  }
})

new Vue({
  el: '#ui',
  data: {
    todos: [],

    filters: {},
    filterValues: [],
    selectedFilter: 'all',

    selectedSortMethod: 'none',
    sortMethods: ['none']
  },

  computed: {
    selectedFilterVaue() {
      return this.filters[this.selectedFilter]
    }
  },

  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },

    deleteTodo(todo) {
      this.todos.$remove(todo);
    }, 

    loadNewCollection() {
      this.loadFromUrl('/todos/search')
    },

    loadFromUrl(url) {
      $.get(url, (response) => {
        this.todos = response;
        this.sortMethods = ['none'].concat(Object.keys(this.todos[0]))

        this.filters['all'] = null
        response.forEach((element) => {this.filters[element.option] = element.option})
        this.filterValues = Object.keys(this.filters);
      })
    }
  },

  ready() {
    this.loadFromUrl('/todos');
  }
})
