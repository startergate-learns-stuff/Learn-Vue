let TodoList = {
  template: `
        <section>
            <ul>
                <li class="shadow" v-for="(todoItem, index) in todoItems">
                    <i class="checkBtn fas fa-check">
                        {{todoItem}}
                    </i>
                    <span class="removeBtn" type="button">
                        <i class="far fa-trash-alt" aria-hidden="true"></i>
                    </span>
                </li>
            </ul>
        </section>`,
  data() {
    return {
      todoItems: []
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1)
    }
  }
}