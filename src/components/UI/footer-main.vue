<template>
  <footer class="footer">
    <div class="container">
      <ul class="navbar-list">
          <a class="navbar-item" href="" >{{title}} </a>
      </ul>
    </div>
  </footer>
</template>

<script>
import {app} from "@/_config";

export default {
  data() {
    return {
      title: app.title,
    };
  },
};
</script>
