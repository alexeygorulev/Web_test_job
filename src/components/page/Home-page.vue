<template>
<Content />
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Content from '@/components/page/Content.vue'
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'

export default {
  components: { Form, List, Content },
  data() {
    return {
      notes: [
        {
          title: 'Comments 1',
          name: 'name',
          date: 'date',
        },
        {
          title: 'Comments 2',
          name: 'name',
          date: 'date',
        }
      ]
    }
  },
  mounted() {
    this.getNotes()
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  methods: {
    // * get / set notes
    getNotes() {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    },
// * submit note
handleSubmit(title,name, date) {
  const note = {
    title: title,
    name: name,
    date: date,
  }

    return this.notes.unshift(note)
},
    // * remove note
    handleRemove(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>
