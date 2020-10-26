let TodoFooter = {
  template: `
        <div class="clearAllContainer">
            <span class="clearAllBtn" @click="clearTodo">
                초기화
            </span>
        </div>`,
  methods: {
    clearTodo() {
      console.log('초기화');
    }
  }
}