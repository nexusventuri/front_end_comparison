new Vue({
  el: '#ui',
  data: {
    todos: [
      { title: 'My first todo', value: 10, option: 'price' },
      { title: 'My second todo', value: 20, option: 'seconds' },
      { title: 'My third todo', value: 100, option: 'pounds' }
    ]
  },
  computed: {
    format_value(todo) {
      return todo.value + 'lalala'
    }
  },
  created() {
    //created callback
  }
})
