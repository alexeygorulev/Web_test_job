<template>
<Content />
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Content from '@/components/page/Content.vue'
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'
import DataService from '@/services/DataService'

import {defineComponent,onMounted} from 'vue'
export default defineComponent ({
  setup() {},

  components: { Form, List, Content },
  data() {
    return {
      notes: [
        {
          title: 'Example of comment ',
          name: 'Your name',
          date_now: 'Time',
          id: '23'
        },

      ]
    }
  },
  mounted() {
    this.getNotes()
  },
  watch: {
    notes: {
      handler(updatedList) {
        this.getNotes()
      },
      deep: true
    }
  },
  methods: {
    // * get / set notes
    getNotes() {
      DataService.getAllUsers()
      .then((res) => {
        const dates = res.data
        this.notes = dates.reverse()
      })
      .catch((e) => console.log(e))

    },
// * submit note
handleSubmit(title,name, date_now) {
  const note = {
    title: title,
    name: name,
    date_now: date_now,
  }
  let formData = new FormData()
  formData.append('title', title)
  formData.append('name', name)
  formData.append('date_now', date_now)
  DataService.setAllUsers(formData)
  .then((res) => {
    console.log(res)
  })
  .catch((e) => console.log(e))



    // return this.notes.unshift(note)
},
    // * remove note
    handleRemove(id) {
      DataService.deleteUser(id)
      .then((res) => {
        console.log(res)
      })
      .catch((e) => console.log(e))
      // this.notes.splice(index, 1)
    }
  }



});


</script>
