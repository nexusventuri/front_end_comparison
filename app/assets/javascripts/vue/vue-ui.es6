Vue.component('todo', {
  template: '#todo',
  props: ['todo'],
  methods: {
    format_value(todo) {
      if(todo.option == 'price') {
        return `$${todo.value}`;
      } else if (todo.option == 'seconds') {
        return `${todo.value}s`;
      } else if (todo.option == 'milliseconds') {
        return `${todo.value}ms`;
      } else {
        return `£${todo.value}`;
      }
    }
  }
})

Vue.component('todoForm', {
  template: '#todo-form'
})

new Vue({
  el: '#ui',
  data: {
    todos: [
      { title: 'My first todo', value: 10, option: 'price' },
      { title: 'My second todo', value: 20, option: 'seconds' },
      { title: 'My third todo', value: 100, option: 'pounds' },
      { title: 'My forth todo', value: 100, option: 'milliseconds' }
    ]
  },
  created() {
    //created callback
  }
})
