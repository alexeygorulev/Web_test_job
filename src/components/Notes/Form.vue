<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit" id="test">
      <textarea required v-model="value" placeholder="Что об этом думаете?" id="comments"/>
      <input type="text" required v-model="name" placeholder="Введите ваше имя" id="name" form="test">
      <button class="btn btnPrimary" type="submit">Добавить комментарий</button>
    </form>
  </div>
</template>

<script>

export default {
  components: {  },
  data() {
    return {
      value: '',
      name: '',
      date: new Date()
    }
  },
  methods: {
    onSubmit() {
    const fullYear = String(this.date.getDate()).padStart(2, '0') + '/' + String(this.date.getMonth() + 1).padStart(2, '0') + '/' + this.date.getFullYear();
    const fullTime = fullYear + " Время " + String(this.date.getHours()).padStart(2, '0') + ':' + String(this.date.getMinutes() + 1).padStart(2, '0') + ':' + this.date.getSeconds()
      this.$emit('onSubmit', this.value, this.name, fullTime )
      this.value = ''
      this.name = ''
    },
    handleTagClick(tag) {

      this.value = ''
    }
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
}
</style>
