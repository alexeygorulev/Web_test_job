<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Form from "@/components/Notes/Form-main.vue"
import List from "@/components/Notes/List-main.vue"
export default {
  components: {Form, List: List},
  data () {
    return {
      notes: ['task1', 'task2', 'task3',]
    }
  },
  methods: {
    handleSubmit (note) {
      this.notes.unshift(note)
    },
    handleRemove (index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>
