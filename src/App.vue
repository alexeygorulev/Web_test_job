<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <Home />
    </div>
  </div>
    <Footer />
</div>
</template>

<script>
import Header from '@/components/UI/header-main';
import Home from '@/components/page/Home-page';
import Footer from '@/components/UI/footer-main';

export default {
  components: {Header, Footer, Home: Home},
}

</script>

<style lang="scss">

</style>
