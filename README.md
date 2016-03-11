# Front end comparison

The idea behind this project is to create an UI using different front end frameworks and to compare them based on speed, boilerplate and other factors

# Vue.js

Reactive data binding, focuses on the view layer only, effectively is a MVVM framework
Data driven view
Directives start with v-
Large scale app will have components

## Pros
- extra dev tools that can be found here: https://github.com/vuejs/vue-devtools
- implements some smart heuristics to maximize DOM element reuse, so replacing an array with another array containing overlapping objects is a very efficient operation.

## Cons
- reactivity happens only to the properties set up when the vue object is created

## Notes for development
- {{{ for_raw_html_stuff }}}
- only single expressions are allowed inside {{}}
- {{ text | filter 'can' 'have' params }}
- v-bind directive can be expressed as `:` e.g. v-bind:disabled => :disabled
- v-on directive can be expressed as `@` e.g. v-on:clicked => :clicked

- computed setter, computed: { computedValueName: {get() {}, set() {} } }
- v-bind:class
- v-if, v-else, v-show: v-show is better because vue doesn't need to do a complete teardown and re-render

### Lists
vue has mutation methods for array e.g. push() pop() shift() unshift() splice() sort() reverse() $remove(element), so knows how to update the view accordingly
there are also non mutation methods to return a new array filter() concat() slice()
to reset the array it's possible to track by a field to avoid re-render the whole page:
`<div v-for="item in items" track-by="_uid">`

can't detect direct set: e.g. `vm.items[0] = {}` should call $set instead `example1.items.$set(0, { childMsg: 'Changed!'})`

### Events
`<form v-on:submit.prevent="onSubmit"></form>`
`<input v-on:keyup.enter="submit">`

About listeners in html
- It makes it easier to locate the handler function implementations within your JS code by simply skimming the HTML template.
- Since you don’t have to manually attach event listeners in JS, your ViewModel code can be pure logic and DOM-free. This makes it easier to test.
- When a ViewModel is destroyed, all event listeners are automatically removed. You don’t need to worry about cleaning it up yourself.




