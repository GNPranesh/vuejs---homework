<template>
  <Transition name="ModalDialog">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="modal-body">
            <input type="text" v-model="title" placeholder="Add Title" />
          </div>

          <div class="modal-footer">
            <input type="text" class="textarea" v-model="content" placeholder="Add Content" />
            <div class="modal-body">
              <input type="text" class="status" v-model="status" placeholder="Type in the status of the task" />
            </div>

            <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
            <ul>
              <li v-bind:key="error.length" v-for="error in errors">{{ error }}</li>
            </ul>
            </p>
            <button class="savebtn" @click="addTodo(text)">Save</button>
            <button class="savebtn" @click="$emit('close')">Cancel</button>

          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
const STORAGE_KEY = 'test_app';
export default {
  props: {
    show: Boolean
  },
  data: () => (
    {
      todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
      testData: [],
      errors: [],

    }),
  // watch: {
  //   todos: {
  //     handler(todos) {
  //       localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  //     },
  //     deep: true
  //   }
  // },
  // mounted() {
  //   window.addEventListener('hashchange', this.onHashChange)
  //   //this.onHashChange()
  // },
  methods: {
    addTodo() {

      this.errors = [];
      if (!this.title) {
        this.errors.push('title required.');
      }
      if (!this.content) {
        this.errors.push('content required.');
      }
      if (!this.status) {
        this.errors.push('status required.');
      }
      if (this.errors.length !== 0) {
        console.log("check if we are here",this.errors)
        return
      }
      
      let count = this.todos.length
      count = count + 1;
      this.todos.push({
        id: count,
        title: `${this.title}`,
        content: `${this.content}`,
        status: `${this.status}`
      })
      this.testData = this.todos;
      this.title = this.content = this.status = ""
      this.$emit('close', this.testData)
    }
  }
}
</script>
        
<style>
.savebtn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;  
  -moz-osx-font-smoothing: grayscale;
  width: 25%;
  float: left;
  margin: 20px 8px 15px;
  padding: 8px;
  background: #44475C;
  color: #FFF;
  text-transform: uppercase;
  border-radius: 8px;
}

.savebtn:hover {
  background: #474e83;
}
p {
  color: red;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

input {
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border-right: 2px solid #58585c;
  border-bottom: 2px solid #58585c;
  border-top: 2px solid #58585c;
  border-left: 2px solid #58585c;
  font-weight: 400;
  font-size: medium;
  font-style: oblique;
}

.textarea {
  width: 100%;
  border-color: 1px solid #58585c;
  height: 100px;
  border-radius: 5px;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 450px;
  margin: 0px auto;
  padding: 30px 100px 100px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #3b3d3c;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
}

.modal-body {
  margin: 20px 0; 
}
.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>