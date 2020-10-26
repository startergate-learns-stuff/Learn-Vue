let TodoInput = {
  template: `
        <div class="inputBox shadow">
            <input type="text" v-model="newTodoItem">
            <span class="addContainer" @click="addTodo">
                <i class="addBtn fas fa-plane" aria-hidden="true"></i>
            </span>
        </div>`,
  data() {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        let value = this.newTodoItem && this.newTodoItem.trim()
        localStorage.setItem(value, value)
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}