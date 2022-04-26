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

    // onMounted(() => getUsers())
    // const getUsers = () => {
    //   DataService.getAllUsers()
    //   .then((res) => {
    //     const dates = res.data.values
    //     console.log(dates)

    //   })
    //   .catch((e) => console.log(e))
    // }

    // POST запрос в бд
    // -----------------------------------------------------------------------
    // const dataa = {name: 'andrey', title: 'ref'}
    // onMounted(() => setUsers())
    // const setUsers = () => {
    //   DataService.setAllUsers(dataa)
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((e) => console.log(e))
    // }
// -----------------------------------------------------------------
    // const id = {id: '14'}
    // onMounted(() => deleteUsers())
    // const deleteUsers  = () => {
      // DataService.deleteUser(id)
      // .then((res) => {
      //   console.log(res)
      // })
      // .catch((e) => console.log(e))
    // }




// --------------------------------------------------------------------
  },

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
    // notes: {
    //   handler(updatedList) {
    //     localStorage.setItem('notes', JSON.stringify(updatedList))
    //   },
    //   deep: true
    // }
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

  DataService.setAllUsers(note)
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
