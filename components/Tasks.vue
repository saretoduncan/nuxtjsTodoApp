<script>
export default {
  props: ["task"],
  methods: {
    toggleDone(task) {
      this.$store.commit("TOGGLE_TASK", task);
    },
    deleteTodo(task) {
      this.$store.commit("REMOVE_TASK", task);
    },
  },
};
</script>
<template>
  <div :class="`task ${task.done ? 'is-complete' : ''}`">
    <div class="content">{{ task.content }}</div>
    <div class="buttons">
      <button @click="toggleDone(task)">
        {{ task.done ? "undo" : "Done" }}
      </button>
      <button class="delete" @click="deleteTodo(task)">Delete</button>
    </div>
  </div>
</template>
<style></style>
