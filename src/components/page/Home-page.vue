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
  setup() {




    // GET ЗАПРОС
    // onMounted(() => getUsers())
    // const getUsers = () => {
    //   DataService.getAllUsers()
    //   .then((res) => {
    //     const dates = res.data.values
    //     loading.value = false
    //   })
    //   .catch((e) => console.log(e))
    //   return {
    //     users
    //   }
    // },

    // POST запрос в бд
    // -----------------------------------------------------------------------
    // const dataa = {name: 'andrey', title: 'ref'}
    // onMounted(() => setUsers())
    // const setUsers = () => {
    //   DataService.setAllUsers(dataa)
    //   .then((res) => {
    //     console.log(res.config.data)
    //   })
    //   .catch((e) => console.log(e))
    // }
// -----------------------------------------------------------------
  },

  components: { Form, List, Content },
  data() {
    return {
      notes: [
        {
          title: 'Example of comment ',
          name: 'Your name',
          date: 'Time',
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



});


</script>
